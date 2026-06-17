export namespace main {
	
	export class DepositMailAckCleanupResult {
	    ok: boolean;
	    message: string;
	    fileName: string;
	    filePath: string;
	    backupPath?: string;
	    removedCount: number;
	    pendingCleanupCount: number;
	    pendingCleanupStored: boolean;
	    mailRequestIds: string[];
	    esoIsRunning: boolean;
	
	    static createFrom(source: any = {}) {
	        return new DepositMailAckCleanupResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ok = source["ok"];
	        this.message = source["message"];
	        this.fileName = source["fileName"];
	        this.filePath = source["filePath"];
	        this.backupPath = source["backupPath"];
	        this.removedCount = source["removedCount"];
	        this.pendingCleanupCount = source["pendingCleanupCount"];
	        this.pendingCleanupStored = source["pendingCleanupStored"];
	        this.mailRequestIds = source["mailRequestIds"];
	        this.esoIsRunning = source["esoIsRunning"];
	    }
	}
	export class DepositMailAckEntry {
	    mail_request_id: string;
	    event_id?: string;
	    recipient?: string;
	    subject?: string;
	    body?: string;
	    amount?: number;
	    created_at?: string;
	    batch_id?: string;
	    sent_at?: string;
	    raw?: Record<string, any>;
	
	    static createFrom(source: any = {}) {
	        return new DepositMailAckEntry(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.mail_request_id = source["mail_request_id"];
	        this.event_id = source["event_id"];
	        this.recipient = source["recipient"];
	        this.subject = source["subject"];
	        this.body = source["body"];
	        this.amount = source["amount"];
	        this.created_at = source["created_at"];
	        this.batch_id = source["batch_id"];
	        this.sent_at = source["sent_at"];
	        this.raw = source["raw"];
	    }
	}
	export class DepositMailAckReadResult {
	    ok: boolean;
	    message: string;
	    fileName: string;
	    filePath: string;
	    ackEntries: DepositMailAckEntry[];
	    ackCount: number;
	    esoIsRunning: boolean;
	
	    static createFrom(source: any = {}) {
	        return new DepositMailAckReadResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ok = source["ok"];
	        this.message = source["message"];
	        this.fileName = source["fileName"];
	        this.filePath = source["filePath"];
	        this.ackEntries = this.convertValues(source["ackEntries"], DepositMailAckEntry);
	        this.ackCount = source["ackCount"];
	        this.esoIsRunning = source["esoIsRunning"];
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
	export class DepositMailWriteResult {
	    ok: boolean;
	    message: string;
	    fileName: string;
	    filePath: string;
	    backupPath?: string;
	    recordsWritten: number;
	    eventIds: string[];
	    esoIsRunning: boolean;
	
	    static createFrom(source: any = {}) {
	        return new DepositMailWriteResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ok = source["ok"];
	        this.message = source["message"];
	        this.fileName = source["fileName"];
	        this.filePath = source["filePath"];
	        this.backupPath = source["backupPath"];
	        this.recordsWritten = source["recordsWritten"];
	        this.eventIds = source["eventIds"];
	        this.esoIsRunning = source["esoIsRunning"];
	    }
	}
	export class ESORunningStatus {
	    running: boolean;
	    message: string;
	
	    static createFrom(source: any = {}) {
	        return new ESORunningStatus(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.running = source["running"];
	        this.message = source["message"];
	    }
	}
	export class GuildSyncApplicationsDataResult {
	    ok: boolean;
	    message: string;
	    key: string;
	    label: string;
	    fileName: string;
	    filePath: string;
	    data?: Record<string, any>;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncApplicationsDataResult(source);
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
	    enabled: boolean;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncSavedVarsWatchFile(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.key = source["key"];
	        this.label = source["label"];
	        this.fileName = source["fileName"];
	        this.filePath = source["filePath"];
	        this.enabled = source["enabled"];
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
	export class GuildSyncRosterDataResult {
	    ok: boolean;
	    message: string;
	    key: string;
	    label: string;
	    fileName: string;
	    filePath: string;
	    data?: Record<string, any>;
	
	    static createFrom(source: any = {}) {
	        return new GuildSyncRosterDataResult(source);
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

