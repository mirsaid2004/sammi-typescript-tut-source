interface Drivable {
  startEngine(): void;
  stopEngine(): void;
  drive(): void;
}

interface Flyable {
  takeOff(): void;
  land(): void;
  fly(): void;
}

class Transport implements Drivable, Flyable {
  name: string;
  constructor(name: string = "Generic Transport") {
    this.name = name;
  }
  startEngine(): void {
    console.log("Engine started.");
  }

  stopEngine(): void {
    console.log("Engine stopped.");
  }

  drive(): void {
    console.log("Driving on the road.");
  }

  takeOff(): void {
    console.log("Taking off into the sky.");
  }

  land(): void {
    console.log("Landing safely.");
  }

  fly(): void {
    console.log("Flying through the air.");
  }
}

const transport = new Transport("Flying Car");
transport.startEngine();
transport.drive();
transport.takeOff();

// Advantages of implementing interfaces:
// 1. **Code Reusability**: Classes can implement multiple interfaces, allowing for code reuse across different classes.
// 2. **Flexibility**: Interfaces allow for different implementations, enabling polymorphism.
// 3. **Type Safety**: Interfaces provide a way to enforce a contract for classes, ensuring that they implement the required methods and properties.
// 4. **Separation of Concerns**: Interfaces help in separating the definition of methods from their implementation, promoting cleaner code architecture.
// 5. **Documentation**: Interfaces serve as a form of documentation, making it clear what methods and properties a class should implement.
