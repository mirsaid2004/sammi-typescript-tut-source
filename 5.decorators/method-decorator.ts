function Logger(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    return `Hello, ${propertyKey}!`;
  };

  return descriptor;
}

function Admin(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (this: { isAdmin: boolean }, ...args: any[]) {
    if (!this.isAdmin) {
      throw new Error("Access denied: Admin privileges required.");
    }
    return originalMethod.apply(this, args);
  };
}

function Auth(userType: "admin" | "user") {
  return function (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    if (userType === "admin") {
      Admin(target, propertyKey, descriptor);
    } else {
      // You can add more user types and their respective decorators here
      console.warn(`No specific decorator for user type: ${userType}`);
    }
  };
}

class User {
  constructor(
    public name: string,
    public age: number,
    public isAdmin: boolean
  ) {}

  @Logger
  greeting() {
    throw new Error("This method is not implemented yet.");
  }

  @Auth("user")
  deleteAccount() {
    return `Account of ${this.name} deleted.`;
  }
}

const alice = new User("Alice", 30, false);
alice.greeting(); // Output: Calling greeting with arguments: [ '
alice.deleteAccount();
