import { AuthService } from "../interfaces/auth-service.interface";
import { FirebaseAuthService } from "../services/firebase-auth.service";

export class FirebaseAuthAdapter implements AuthService {
  constructor(private FirebaseAuthService: FirebaseAuthService) {}

  async login(user: string, password: string): Promise<string> {
    return this.FirebaseAuthService.firebaseLogin(user, password);
  }

  async register(user: string, password: string): Promise<string> {
    return this.FirebaseAuthService.firebaseRegister(user, password);
  }
}
