abstract class AbstractShape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  describe(): void {
    console.log(`This is a shape with color ${this.color}.`);
  }

  abstract calculateArea(): number; // Abstract method to be implemented by subclasses

  abstract draw(): void; // Another abstract method
}

class CircleInAbstract extends AbstractShape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color); // Call the constructor of the parent class
    this.radius = radius;
  }

  override describe(): void {
    super.describe(); // Call the describe method of the parent class
    console.log(`It is a circle with radius ${this.radius}.`);
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius; // Implementing the abstract method
  }

  draw(): void {
    console.log(
      `Drawing a circle with color ${this.color} and radius ${this.radius}.`
    ); // Implementing another abstract method
  }
}

// Usage
const myCircle = new CircleInAbstract("blue", 10);
myCircle.describe();
console.log(`Area of the circle: ${myCircle.calculateArea()}`);
