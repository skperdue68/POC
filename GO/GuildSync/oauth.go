package main

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

const (
	discordAPIBase      = "https://discord.com/api/v10"
	discordAuthorizeURL = "https://discord.com/oauth2/authorize"
	defaultRedirectURI  = "http://127.0.0.1:53682/callback"
)

type DiscordOAuthConfig struct {
	ClientID     string `json:"client_id"`
	ClientSecret string `json:"client_secret"`
	RedirectURI  string `json:"redirect_uri"`
}

type DiscordTokenResponse struct {
	AccessToken  string `json:"access_token"`
	TokenType    string `json:"token_type"`
	ExpiresIn    int    `json:"expires_in"`
	RefreshToken string `json:"refresh_token"`
	Scope        string `json:"scope"`
}

type DiscordUser struct {
	ID            string `json:"id"`
	Username      string `json:"username"`
	Discriminator string `json:"discriminator"`
	GlobalName    string `json:"global_name"`
	Avatar        string `json:"avatar"`
	Email         string `json:"email"`
	Verified      bool   `json:"verified"`
}

type DiscordSession struct {
	LoggedIn       bool        `json:"logged_in"`
	User           DiscordUser `json:"user"`
	AccessToken    string      `json:"access_token,omitempty"`
	RefreshToken   string      `json:"refresh_token,omitempty"`
	TokenType      string      `json:"token_type,omitempty"`
	Scope          string      `json:"scope,omitempty"`
	ExpiresAt      time.Time   `json:"expires_at,omitempty"`
	LastLoginAt    time.Time   `json:"last_login_at,omitempty"`
	StatusMessage  string      `json:"status_message,omitempty"`
	AccessTokenSet bool        `json:"access_token_set"`
}

type PublicDiscordSession struct {
	LoggedIn      bool        `json:"logged_in"`
	User          DiscordUser `json:"user"`
	Scope         string      `json:"scope,omitempty"`
	ExpiresAt     time.Time   `json:"expires_at,omitempty"`
	LastLoginAt   time.Time   `json:"last_login_at,omitempty"`
	StatusMessage string      `json:"status_message,omitempty"`
}

type oauthRuntimeState struct {
	mu     sync.Mutex
	state  string
	server *http.Server
}

func (a *App) StartDiscordLogin() (PublicDiscordSession, error) {
	cfg, err := loadDiscordOAuthConfig()
	if err != nil {
		return PublicDiscordSession{}, err
	}

	state, err := randomState()
	if err != nil {
		return PublicDiscordSession{}, err
	}

	if err := a.startDiscordCallbackServer(cfg, state); err != nil {
		return PublicDiscordSession{}, err
	}

	params := url.Values{}
	params.Set("response_type", "code")
	params.Set("client_id", cfg.ClientID)
	params.Set("redirect_uri", cfg.RedirectURI)
	params.Set("scope", "identify email")
	params.Set("state", state)
	params.Set("prompt", "consent")

	authURL := discordAuthorizeURL + "?" + params.Encode()
	runtime.BrowserOpenURL(a.ctx, authURL)

	return PublicDiscordSession{
		LoggedIn:      false,
		StatusMessage: "Discord login opened in your browser.",
	}, nil
}

func (a *App) GetDiscordSession() (PublicDiscordSession, error) {
	session, err := loadDiscordSession()
	if err != nil {
		return PublicDiscordSession{LoggedIn: false}, nil
	}

	return session.public(), nil
}

func (a *App) LogoutDiscord() (PublicDiscordSession, error) {
	path, err := getDiscordSessionPath()
	if err == nil {
		_ = os.Remove(path)
	}

	return PublicDiscordSession{
		LoggedIn:      false,
		StatusMessage: "Logged out of Discord.",
	}, nil
}

func (a *App) startDiscordCallbackServer(cfg DiscordOAuthConfig, expectedState string) error {
	if a.oauth == nil {
		a.oauth = &oauthRuntimeState{}
	}

	a.oauth.mu.Lock()
	defer a.oauth.mu.Unlock()

	if a.oauth.server != nil {
		_ = a.oauth.server.Shutdown(context.Background())
		a.oauth.server = nil
	}

	redirectURL, err := url.Parse(cfg.RedirectURI)
	if err != nil {
		return fmt.Errorf("invalid redirect URI: %w", err)
	}

	listener, err := net.Listen("tcp", redirectURL.Host)
	if err != nil {
		return fmt.Errorf("could not start local Discord OAuth callback server on %s: %w", redirectURL.Host, err)
	}

	mux := http.NewServeMux()
	server := &http.Server{
		Handler:           mux,
		ReadHeaderTimeout: 10 * time.Second,
	}

	a.oauth.state = expectedState
	a.oauth.server = server

	mux.HandleFunc(redirectURL.Path, func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}

		code := r.URL.Query().Get("code")
		returnedState := r.URL.Query().Get("state")
		errorText := r.URL.Query().Get("error")

		if errorText != "" {
			http.Error(w, "Discord login was cancelled or denied.", http.StatusBadRequest)
			a.emitDiscordLoginFailed("Discord login was cancelled or denied.")
			go a.stopDiscordCallbackServerSoon()
			return
		}

		if code == "" {
			http.Error(w, "missing Discord authorization code", http.StatusBadRequest)
			a.emitDiscordLoginFailed("Discord did not return an authorization code.")
			go a.stopDiscordCallbackServerSoon()
			return
		}

		if returnedState == "" || returnedState != expectedState {
			http.Error(w, "invalid Discord OAuth state", http.StatusBadRequest)
			a.emitDiscordLoginFailed("Discord login failed because the security state did not match.")
			go a.stopDiscordCallbackServerSoon()
			return
		}

		session, err := completeDiscordLogin(cfg, code)
		if err != nil {
			http.Error(w, "Discord login failed. You may close this tab and return to GuildSync.", http.StatusInternalServerError)
			a.emitDiscordLoginFailed(err.Error())
			go a.stopDiscordCallbackServerSoon()
			return
		}

		if err := saveDiscordSession(session); err != nil {
			http.Error(w, "Discord login worked, but GuildSync could not save the session.", http.StatusInternalServerError)
			a.emitDiscordLoginFailed(err.Error())
			go a.stopDiscordCallbackServerSoon()
			return
		}

		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		_, _ = io.WriteString(w, `<!doctype html><html><head><title>GuildSync Discord Login</title></head><body style="font-family:Segoe UI,Arial,sans-serif;background:#0F172A;color:#E5E7EB;text-align:center;padding-top:80px;"><h1>Discord login complete</h1><p>You can close this browser tab and return to GuildSync.</p></body></html>`)

		runtime.EventsEmit(a.ctx, "discord-login-complete", session.public())
		go a.stopDiscordCallbackServerSoon()
	})

	go func() {
		if err := server.Serve(listener); err != nil && !errors.Is(err, http.ErrServerClosed) {
			runtime.EventsEmit(a.ctx, "discord-login-failed", err.Error())
		}
	}()

	return nil
}

func (a *App) stopDiscordCallbackServerSoon() {
	time.Sleep(500 * time.Millisecond)

	if a.oauth == nil {
		return
	}

	a.oauth.mu.Lock()
	defer a.oauth.mu.Unlock()

	if a.oauth.server != nil {
		ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
		defer cancel()

		_ = a.oauth.server.Shutdown(ctx)
		a.oauth.server = nil
	}
}

func (a *App) emitDiscordLoginFailed(message string) {
	runtime.EventsEmit(a.ctx, "discord-login-failed", message)
}

func completeDiscordLogin(cfg DiscordOAuthConfig, code string) (DiscordSession, error) {
	token, err := exchangeDiscordCode(cfg, code)
	if err != nil {
		return DiscordSession{}, err
	}

	user, err := fetchDiscordUser(token.AccessToken)
	if err != nil {
		return DiscordSession{}, err
	}

	now := time.Now()

	return DiscordSession{
		LoggedIn:       true,
		User:           user,
		AccessToken:    token.AccessToken,
		RefreshToken:   token.RefreshToken,
		TokenType:      token.TokenType,
		Scope:          token.Scope,
		ExpiresAt:      now.Add(time.Duration(token.ExpiresIn) * time.Second),
		LastLoginAt:    now,
		StatusMessage:  "Logged in with Discord.",
		AccessTokenSet: token.AccessToken != "",
	}, nil
}

func exchangeDiscordCode(cfg DiscordOAuthConfig, code string) (DiscordTokenResponse, error) {
	form := url.Values{}
	form.Set("client_id", cfg.ClientID)
	form.Set("client_secret", cfg.ClientSecret)
	form.Set("grant_type", "authorization_code")
	form.Set("code", code)
	form.Set("redirect_uri", cfg.RedirectURI)

	req, err := http.NewRequest(http.MethodPost, discordAPIBase+"/oauth2/token", strings.NewReader(form.Encode()))
	if err != nil {
		return DiscordTokenResponse{}, err
	}

	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	client := http.Client{Timeout: 15 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return DiscordTokenResponse{}, fmt.Errorf("could not contact Discord token endpoint: %w", err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	if resp.StatusCode < 200 || resp.StatusCode > 299 {
		return DiscordTokenResponse{}, fmt.Errorf("Discord token exchange failed: %s", string(body))
	}

	var token DiscordTokenResponse
	if err := json.Unmarshal(body, &token); err != nil {
		return DiscordTokenResponse{}, err
	}

	if token.AccessToken == "" {
		return DiscordTokenResponse{}, errors.New("Discord did not return an access token")
	}

	return token, nil
}

func fetchDiscordUser(accessToken string) (DiscordUser, error) {
	req, err := http.NewRequest(http.MethodGet, discordAPIBase+"/users/@me", nil)
	if err != nil {
		return DiscordUser{}, err
	}

	req.Header.Set("Authorization", "Bearer "+accessToken)

	client := http.Client{Timeout: 15 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return DiscordUser{}, fmt.Errorf("could not contact Discord user endpoint: %w", err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	if resp.StatusCode < 200 || resp.StatusCode > 299 {
		return DiscordUser{}, fmt.Errorf("Discord user lookup failed: %s", string(body))
	}

	var user DiscordUser
	if err := json.Unmarshal(body, &user); err != nil {
		return DiscordUser{}, err
	}

	return user, nil
}

func loadDiscordOAuthConfig() (DiscordOAuthConfig, error) {
	cfg := DiscordOAuthConfig{
		ClientID:     strings.TrimSpace(os.Getenv("GUILDSYNC_DISCORD_CLIENT_ID")),
		ClientSecret: strings.TrimSpace(os.Getenv("GUILDSYNC_DISCORD_CLIENT_SECRET")),
		RedirectURI:  strings.TrimSpace(os.Getenv("GUILDSYNC_DISCORD_REDIRECT_URI")),
	}

	if cfg.RedirectURI == "" {
		cfg.RedirectURI = defaultRedirectURI
	}

	fileCfg, _ := loadDiscordOAuthConfigFile()

	if cfg.ClientID == "" {
		cfg.ClientID = fileCfg.ClientID
	}

	if cfg.ClientSecret == "" {
		cfg.ClientSecret = fileCfg.ClientSecret
	}

	if strings.TrimSpace(os.Getenv("GUILDSYNC_DISCORD_REDIRECT_URI")) == "" && fileCfg.RedirectURI != "" {
		cfg.RedirectURI = fileCfg.RedirectURI
	}

	cfg.ClientID = strings.TrimSpace(cfg.ClientID)
	cfg.ClientSecret = strings.TrimSpace(cfg.ClientSecret)
	cfg.RedirectURI = strings.TrimSpace(cfg.RedirectURI)

	if cfg.ClientID == "" {
		return DiscordOAuthConfig{}, errors.New("missing Discord client ID. Set GUILDSYNC_DISCORD_CLIENT_ID or create discord-oauth.json")
	}

	if cfg.ClientSecret == "" {
		return DiscordOAuthConfig{}, errors.New("missing Discord client secret. Set GUILDSYNC_DISCORD_CLIENT_SECRET or create discord-oauth.json")
	}

	if cfg.RedirectURI == "" {
		cfg.RedirectURI = defaultRedirectURI
	}

	redirectURL, err := url.Parse(cfg.RedirectURI)
	if err != nil || redirectURL.Scheme == "" || redirectURL.Host == "" || redirectURL.Path == "" {
		return DiscordOAuthConfig{}, errors.New("invalid Discord redirect URI")
	}

	return cfg, nil
}

func loadDiscordOAuthConfigFile() (DiscordOAuthConfig, error) {
	path, err := getDiscordOAuthConfigPath()
	if err != nil {
		return DiscordOAuthConfig{}, err
	}

	data, err := os.ReadFile(path)
	if err != nil {
		return DiscordOAuthConfig{}, err
	}

	var cfg DiscordOAuthConfig
	if err := json.Unmarshal(data, &cfg); err != nil {
		return DiscordOAuthConfig{}, err
	}

	return cfg, nil
}

func getDiscordOAuthConfigPath() (string, error) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "", err
	}

	return filepath.Join(configDir, "GuildSync", "discord-oauth.json"), nil
}

func getDiscordSessionPath() (string, error) {
	configDir, err := os.UserConfigDir()
	if err != nil {
		return "", err
	}

	return filepath.Join(configDir, "GuildSync", "discord-session.json"), nil
}

func saveDiscordSession(session DiscordSession) error {
	path, err := getDiscordSessionPath()
	if err != nil {
		return err
	}

	if err := os.MkdirAll(filepath.Dir(path), 0755); err != nil {
		return err
	}

	data, err := json.MarshalIndent(session, "", "  ")
	if err != nil {
		return err
	}

	return os.WriteFile(path, data, 0600)
}

func loadDiscordSession() (DiscordSession, error) {
	path, err := getDiscordSessionPath()
	if err != nil {
		return DiscordSession{}, err
	}

	data, err := os.ReadFile(path)
	if err != nil {
		return DiscordSession{}, err
	}

	var session DiscordSession
	if err := json.Unmarshal(data, &session); err != nil {
		return DiscordSession{}, err
	}

	if session.ExpiresAt.Before(time.Now()) {
		return DiscordSession{}, errors.New("Discord session expired")
	}

	return session, nil
}

func (s DiscordSession) public() PublicDiscordSession {
	return PublicDiscordSession{
		LoggedIn:      s.LoggedIn,
		User:          s.User,
		Scope:         s.Scope,
		ExpiresAt:     s.ExpiresAt,
		LastLoginAt:   s.LastLoginAt,
		StatusMessage: s.StatusMessage,
	}
}

func randomState() (string, error) {
	buf := make([]byte, 32)

	if _, err := rand.Read(buf); err != nil {
		return "", err
	}

	return base64.RawURLEncoding.EncodeToString(buf), nil
}
