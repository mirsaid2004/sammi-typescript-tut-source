import { ILoginStrategy } from "./login.strategy";

export class EmailLoginStrategy implements ILoginStrategy {
    login(username: string, password: string): void {
        if(!password) {
            console.log("Password is required for email login.");
            return;
        }
        
        console.log(`Logging in with email: ${username}, password: ${password}`);
    }
}