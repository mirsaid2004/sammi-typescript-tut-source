import { HashService } from "../services/hash.service";
import { TokenService } from "../services/token.service";
import { AuthUserService } from "../services/users.service";

export class AuthFacade {
  private userService = new AuthUserService();
  private tokenService = new TokenService();
  private hashService = new HashService();

  register(email: string, password: string) {
    if (this.userService.findByEmail(email)) {
      throw new Error(`User with email ${email} already exists.`);
    }

    const hashedPassword = this.hashService.hash(password);
    this.userService.createUser(email, hashedPassword);
    console.log(`User registered with email: ${email}`);
    return this.tokenService.generateToken(email);
  }

  login(email: string, password: string) {
    const user = this.userService.findByEmail(email);
    if (!user) {
      throw new Error(`User with email ${email} does not exist.`);
    }
    const isPasswordValid = this.hashService.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error(`Invalid password for user with email: ${email}`);
    }
    console.log(`User logged in with email: ${email}`);
    return this.tokenService.generateToken(email);
  }
}
