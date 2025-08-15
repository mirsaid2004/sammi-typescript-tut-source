import { UserRequest } from "../interfaces/handler";
import { AbstractHandler } from "./abstract.handler";

export class AuthCheckHandler extends AbstractHandler {
    handle(request: UserRequest): void {
        if (!request.user.isAuthenticated) {
            console.log("User is not authenticated. Access denied.");
            return
        }

        console.log("Access granted. User is authenticated.");
        super.handle(request);
    }
}