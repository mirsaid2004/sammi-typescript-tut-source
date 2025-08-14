export class AuthUserService {
  private users: Map<string, { email: string; password: string }> = new Map();

  findByEmail(email: string) {
    return this.users.get(email);
  }

  createUser(email: string, password: string) {
    this.users.set(email, { email, password });
    console.log(`User created with email: ${email}`);
  }
}
