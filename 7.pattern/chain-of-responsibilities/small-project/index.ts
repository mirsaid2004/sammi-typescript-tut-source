import { AuthCheckHandler } from "./handlers/auth-check.handler";
import { PermissionCheckHandler } from "./handlers/permission-check.handler";
import { RoleCheckHandler } from "./handlers/role-check.handler";
import { UserRequest } from "./interfaces/handler";

const request: UserRequest = {
    user: {
        isAuthenticated: true,
        roles: ["admin"],
        permissions: ["read", "write"]
    },
    action: "delete"
};

// Chain of responsibilities
const auth = new AuthCheckHandler();
const role = new RoleCheckHandler("admin");
const permission = new PermissionCheckHandler("delete");

auth.next(role).next(permission);

// handle the request
auth.handle(request);
