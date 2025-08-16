// State pattern - allows an object to alter its behavior when its internal state changes
// Strategy pattern - defines a family of algorithms, encapsulates each one, and makes them interchangeable

import { EmailLoginStrategy } from "./strategies/email-login";
import { GithubLoginStrategy } from "./strategies/github-login";
import { GoogleLoginStrategy } from "./strategies/google-login";
import { ILoginStrategy } from "./strategies/login.strategy";

class AuthService {
    constructor(private strategy: ILoginStrategy) {}

    setStrategy(strategy: ILoginStrategy) {
        this.strategy = strategy;
    }

    login(username: string, password: string): void {
        this.strategy.login(username, password);
    }
}

const authService = new AuthService(new EmailLoginStrategy());
authService.login("user@example.com", "password123");

authService.setStrategy(new GoogleLoginStrategy());
authService.login("user@gmail.com", "password456");

authService.setStrategy(new GithubLoginStrategy());
authService.login("user", "password789");
