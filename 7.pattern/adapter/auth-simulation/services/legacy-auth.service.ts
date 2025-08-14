export class LegacyAuthService {
  async legacyLogin(user: string, password: string) {
    // Simulate legacy authentication logic
    return `Legacy user ${user} logged in with password ${password}`;
  }

  async legacyRegister(user: string, password: string) {
    // Simulate legacy registration logic
    return `Legacy user ${user} registered with password ${password}`;
  }
}
