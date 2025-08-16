import { ILoginStrategy } from "./login.strategy";

export class GoogleLoginStrategy implements ILoginStrategy {
    login(username: string, password: string): void {
        if(!username || !password) {
            console.log("Username and password are required for Google login.");
            return;
        }

        console.log(`Logging in with Google: ${username}, password: ${password}`);
    }
}