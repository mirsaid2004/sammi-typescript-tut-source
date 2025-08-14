export interface AuthService {
  login(user: string, password: string): Promise<string>;
  register(user: string, password: string): Promise<string>;
}
