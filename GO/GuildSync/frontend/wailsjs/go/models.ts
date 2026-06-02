export namespace main {
	
	export class DiscordUser {
	    id: string;
	    username: string;
	    discriminator: string;
	    global_name: string;
	    avatar: string;
	    email: string;
	    verified: boolean;
	
	    static createFrom(source: any = {}) {
	        return new DiscordUser(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.username = source["username"];
	        this.discriminator = source["discriminator"];
	        this.global_name = source["global_name"];
	        this.avatar = source["avatar"];
	        this.email = source["email"];
	        this.verified = source["verified"];
	    }
	}
	export class PublicDiscordSession {
	    logged_in: boolean;
	    user: DiscordUser;
	    scope?: string;
	    // Go type: time
	    expires_at?: any;
	    // Go type: time
	    last_login_at?: any;
	    status_message?: string;
	
	    static createFrom(source: any = {}) {
	        return new PublicDiscordSession(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.logged_in = source["logged_in"];
	        this.user = this.convertValues(source["user"], DiscordUser);
	        this.scope = source["scope"];
	        this.expires_at = this.convertValues(source["expires_at"], null);
	        this.last_login_at = this.convertValues(source["last_login_at"], null);
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

