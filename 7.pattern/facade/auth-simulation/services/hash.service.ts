export class HashService {
  hash(password: string) {
    console.log(`Hashing password: ${password}`);
    // Simulate hashing logic
    return `hashed_${password}`;
  }

  compare(password: string, hashedPassword: string) {
    console.log(
      `Comparing password: ${password} with hashed password: ${hashedPassword}`
    );
    // Simulate comparison logic
    return hashedPassword === `hashed_${password}`;
  }
}
