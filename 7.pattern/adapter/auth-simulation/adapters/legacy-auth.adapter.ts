import { AuthService } from "../interfaces/auth-service.interface";
import { LegacyAuthService } from "../services/legacy-auth.service";

export class LegacyAuthAdapter implements AuthService {
  constructor(private LegacyAuthService: LegacyAuthService) {}

  async login(user: string, password: string): Promise<string> {
    return this.LegacyAuthService.legacyLogin(user, password);
  }

  async register(user: string, password: string): Promise<string> {
    return this.LegacyAuthService.legacyRegister(user, password);
  }
}
