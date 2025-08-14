function CreatedAtD<T extends { new (...args: any[]): object }>(
  constructor: T
) {
  return class extends constructor {
    readonly createdAt = new Date();
  };
}

export function LogMethod(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} called with arguments:`, args);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

@CreatedAtD
class UserExample {
  constructor(public name: string, public age: number) {}

  @LogMethod
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

@CreatedAtD
class ProductExample {
  constructor(public title: string, public price: number) {}

  @LogMethod
  display() {
    console.log(`Product: ${this.title}, Price: $${this.price}`);
  }
}

type CreatedAtType = {
  createdAt: Date;
};

const userExample = new UserExample("Alice", 30) as UserExample & CreatedAtType;
const productExample = new ProductExample("Laptop", 999.99) as ProductExample &
  CreatedAtType;

userExample.greet();
productExample.display();
