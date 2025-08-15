import { UserRequest } from "../interfaces/handler";
import { AbstractHandler } from "./abstract.handler";

export class PermissionCheckHandler extends AbstractHandler {
    constructor(private requiredPermission: string) {
        super();
    }

    handle(request: UserRequest): void {
        if (!request.user.permissions.includes(this.requiredPermission)) {
            console.log(`User does not have the required permission: ${this.requiredPermission}. Access denied.`);
            return;
        }

        console.log(`User has the required permission: ${this.requiredPermission}. Access granted.`);
        super.handle(request);
    }
}