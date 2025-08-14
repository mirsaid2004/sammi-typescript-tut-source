import { AuthFacade } from "./processes/auth.facade";

const authFacade = new AuthFacade();

// Simulate user registration
function login(email: string, password: string) {
  try {
    authFacade.login(email, password);
  } catch (err) {
    const error = err as Error;
    console.error(`Error during registration: ${error.message}`);
  }
}

function register(email: string, password: string) {
  try {
    const token = authFacade.register(email, password);
    console.log(`User registered successfully. Token: ${token}`);
  } catch (err) {
    const error = err as Error;
    console.error(`Error during registration: ${error.message}`);
  }
}

register("mir21.07.2004@gmail.com", "password123");
login("mir21.07.2004@gmail.com", "password123");
