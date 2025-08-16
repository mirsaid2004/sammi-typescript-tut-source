import { ILoginStrategy } from "./login.strategy";

export class GithubLoginStrategy implements ILoginStrategy {
    login(username: string, password: string): void {
        if(!username || !password) {
            console.log("Username and password are required for GitHub login.");
            return;
        }

        console.log(`Logging in with GitHub: ${username}, password: ${password}`);
    }
}