import { Handler, UserRequest } from "../interfaces/handler";

export abstract class AbstractHandler implements Handler {
    private nextHandler: Handler | null = null;

    next(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(request: UserRequest): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log("End of chain reached");
        }
    }
}

