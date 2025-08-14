// Property decorator
// This decorator capitalizes the first letter of each word in a string property.
function Capitalize(target: object, propertyKey: string) {
  let value: string;
  const getter = () => value;
  const setter = (newValue: string) => {
    value = newValue
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

// Access decorator
// This decorator makes a property read-only by removing the setter.
function Readonly(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.set = function () {
    throw new Error(
      `Property ${propertyKey} is read-only and cannot be modified.`
    );
  };

  return descriptor;
}

// Parameter decorator
function EmailValidator(
  target: Record<string | symbol, any>,
  propertyKey: string | symbol,
  propertyIndex: number
) {
  const originalMethod = target[propertyKey];
  console.log(target, propertyKey, propertyIndex);
  target[propertyKey] = function (...args: any[]) {
    const email = args[propertyIndex];
    if (typeof email !== "string" || !email.includes("@")) {
      throw new Error("Invalid email format.");
    }
    return originalMethod.apply(this, args);
  };
}

// Cache parameters decorator
function MakeCache(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const cache: Record<string, any> = {};

  descriptor.value = function (...args: any[]) {
    const cacheKey = JSON.stringify(args);
    if (cache[cacheKey]) {
      console.log("Returning cached result for:", cacheKey);
      return cache[cacheKey];
    }
    const result = originalMethod.apply(this, args);
    cache[cacheKey] = result;
    console.log("Caching result for:", cacheKey);
    return result;
  };

  return descriptor;
}

class UserSample {
  private _id: number = Math.floor(Math.random() * 1000);
  @Capitalize
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  @Readonly
  get id(): number {
    return this._id;
  }

  createLog(@EmailValidator secondEmail: string) {
    console.log(`User ${this.name} with email ${this.email} created.`);
    console.log(`Second email: ${secondEmail}`);
  }

  @MakeCache
  calculateSum(a: number, b: number): number {
    console.log(`Calculating sum of ${a} and ${b}`);
    return a + b;
  }
}

const userSample = new UserSample("john doe", "mir21.07.2004@gmail.com");
console.log(userSample.name); // Output: "John Doe"
console.log(userSample.id); // Output: Random ID
// @ts-ignore
// userSample.id = 123; // Throws error: Property id is read-only and cannot be modified.
// userSample.createLog("ajdfk"); // Throws error: Invalid email format.
userSample.calculateSum(5, 10); // Output: Calculating sum of 5 and 10
userSample.calculateSum(5, 10); // Output: Returning cached result for: [5,10]
