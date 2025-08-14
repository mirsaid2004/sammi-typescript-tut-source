type ConstructorType<T = object> = new (...args: any[]) => T;

function CanLog<TBase extends ConstructorType>(Base: TBase) {
  return class extends Base {
    log(message: string) {
      console.log(`Log: ${message}`);
    }
  };
}

function CanAccess<TBase extends ConstructorType>(Base: TBase) {
  return class extends Base {
    role!: string;

    setRole(role: string) {
      this.role = role;
    }

    canAccess(resource: string): boolean {
      if (this.role === "admin") {
        return true;
      }
      console.log(`Access denied to ${resource} for role ${this.role}`);
      return false;
    }
  };
}

function CanValidate<TBase extends ConstructorType>(Base: TBase) {
  return class extends Base {
    isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    isNotEmpty(value: string): boolean {
      return value.trim().length > 0;
    }
  };
}

// Example usage
class UserClass {}

const MixedUser = CanLog(CanAccess(CanValidate(UserClass)));

class UserService extends MixedUser {
  createUser(email: string, name: string) {
    if (!this.isValidEmail(email)) {
      this.log(`Creating user with email: ${email} is not valid`);
      return;
    }

    if (!this.isNotEmpty(email)) {
      this.log(`Email cannot be empty`);
      return;
    }

    if (!this.isNotEmpty(name)) {
      this.log(`Name cannot be empty`);
      return;
    }

    if (!this.canAccess("admin")) {
      this.log(`User does not have access to create users`);
      return;
    }

    this.log(`User created with email: ${email} and name: ${name}`);
  }
}

const userService = new UserService();
userService.setRole("admin");
userService.createUser("mir", "John Doe");
