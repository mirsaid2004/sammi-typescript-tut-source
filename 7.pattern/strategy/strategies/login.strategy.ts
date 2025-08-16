export interface ILoginStrategy {
    login(username: string, password: string): void;
}