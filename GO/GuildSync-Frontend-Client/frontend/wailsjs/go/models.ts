export namespace main {
	
	export class GuildSyncBankingDataResult {
	    ok: boolean;
	    message: string;
	    key: string;
	    label: string;
	    fileName: string;
	    filePath: string;
	    data?: Record<string, any>;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncBankingDataResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ok = source["ok"];
	        this.message = source["message"];
	        this.key = source["key"];
	        this.label = source["label"];
	        this.fileName = source["fileName"];
	        this.filePath = source["filePath"];
	        this.data = source["data"];
	    }
	}
	export class GuildSyncClientConfig {
	    discord_client_id: string;
	    redirect_uri: string;
	    auth_server_url: string;
	    socket_url: string;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncClientConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.discord_client_id = source["discord_client_id"];
	        this.redirect_uri = source["redirect_uri"];
	        this.auth_server_url = source["auth_server_url"];
	        this.socket_url = source["socket_url"];
	    }
	}
	export class GuildSyncSavedVarsWatchFile {
	    key: string;
	    label: string;
	    fileName: string;
	    filePath: string;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncSavedVarsWatchFile(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.key = source["key"];
	        this.label = source["label"];
	        this.fileName = source["fileName"];
	        this.filePath = source["filePath"];
	    }
	}
	export class GuildSyncFileWatcherStatus {
	    watching: boolean;
	    directory: string;
	    files: GuildSyncSavedVarsWatchFile[];
	    message: string;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncFileWatcherStatus(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.watching = source["watching"];
	        this.directory = source["directory"];
	        this.files = this.convertValues(source["files"], GuildSyncSavedVarsWatchFile);
	        this.message = source["message"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GuildSyncPaths {
	    savedVarsDir: string;
	    savedVarsWatchFiles: GuildSyncSavedVarsWatchFile[];
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncPaths(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.savedVarsDir = source["savedVarsDir"];
	        this.savedVarsWatchFiles = this.convertValues(source["savedVarsWatchFiles"], GuildSyncSavedVarsWatchFile);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GuildSyncSavedVarsFileModifiedEvent {
	    key: string;
	    label: string;
	    directory: string;
	    fileName: string;
	    filePath: string;
	    modifiedAt: string;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncSavedVarsFileModifiedEvent(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.key = source["key"];
	        this.label = source["label"];
	        this.directory = source["directory"];
	        this.fileName = source["fileName"];
	        this.filePath = source["filePath"];
	        this.modifiedAt = source["modifiedAt"];
	    }
	}
	
	export class GuildSyncUser {
	    discord_user_id: string;
	    username: string;
	    display_name: string;
	    avatar: string;
	    avatar_url: string;
	    email?: string;
	    role: string;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncUser(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.discord_user_id = source["discord_user_id"];
	        this.username = source["username"];
	        this.display_name = source["display_name"];
	        this.avatar = source["avatar"];
	        this.avatar_url = source["avatar_url"];
	        this.email = source["email"];
	        this.role = source["role"];
	    }
	}
	export class GuildSyncSession {
	    logged_in: boolean;
	    allowed: boolean;
	    token?: string;
	    // Go type: time
	    expires_at?: any;
	    user: GuildSyncUser;
	    socket_url: string;
	    auth_server_url: string;
	    status_message: string;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncSession(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.logged_in = source["logged_in"];
	        this.allowed = source["allowed"];
	        this.token = source["token"];
	        this.expires_at = this.convertValues(source["expires_at"], null);
	        this.user = this.convertValues(source["user"], GuildSyncUser);
	        this.socket_url = source["socket_url"];
	        this.auth_server_url = source["auth_server_url"];
	        this.status_message = source["status_message"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

