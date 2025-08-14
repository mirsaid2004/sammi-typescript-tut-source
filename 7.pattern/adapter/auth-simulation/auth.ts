import { FirebaseAuthAdapter } from "./adapters/firebase-auth.adapter";
import { LegacyAuthAdapter } from "./adapters/legacy-auth.adapter";
import { FirebaseAuthService } from "./services/firebase-auth.service";
import { LegacyAuthService } from "./services/legacy-auth.service";

async function bootstrap() {
  const legacyAuthService = new LegacyAuthService();
  const legacyAuthAdapter = new LegacyAuthAdapter(legacyAuthService);

  const registrationResult = await legacyAuthAdapter.register(
    "john_doe",
    "password123"
  );
  const loginResult = await legacyAuthAdapter.login("john_doe", "password123");

  console.log(loginResult, registrationResult); // Output: Legacy user john_doe logged in with password password

  const firebaseAuthService = new FirebaseAuthService();
  const firebaseAuthAdapter = new FirebaseAuthAdapter(firebaseAuthService);

  const firebaseRegistrationResult = await firebaseAuthAdapter.register(
    "jane_doe",
    "password456"
  );
  const firebaseLoginResult = await firebaseAuthAdapter.login(
    "jane_doe",
    "password456"
  );

  console.log(firebaseLoginResult, firebaseRegistrationResult); // Output: Firebase user jane_doe logged in with password password456
}

bootstrap();
