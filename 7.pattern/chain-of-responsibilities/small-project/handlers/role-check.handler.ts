import { UserRequest } from "../interfaces/handler";
import { AbstractHandler } from "./abstract.handler";

export class RoleCheckHandler extends AbstractHandler {
    constructor(private requiredRole: string) {
        super();
    }

    handle(request: UserRequest): void {
        if (!request.user.roles.includes(this.requiredRole)) {
            console.log(`User does not have the required role: ${this.requiredRole}. Access denied.`);
            return;
        }

        console.log(`User has the required role: ${this.requiredRole}. Access granted.`);
        super.handle(request);
    }
}