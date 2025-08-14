export class TokenService {
  generateToken(userId: string): string {
    console.log(`Generating token for user ID: ${userId}`);
    // Simulate token generation logic
    return `token_for_${userId}`;
  }
}
