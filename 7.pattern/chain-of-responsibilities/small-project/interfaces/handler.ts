export interface Handler {
    next(handler: Handler): Handler;
    handle(request: UserRequest): void;
}

export interface UserRequest {
    user: {
        isAuthenticated: boolean;
        roles: string[];
        permissions: string[];
    }
    action: string
}