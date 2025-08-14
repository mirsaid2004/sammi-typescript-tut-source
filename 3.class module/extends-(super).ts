class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  describe(): void {
    console.log(`This is a shape with color ${this.color}.`);
  }
}

class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color); // Call the constructor of the parent class
    this.radius = radius;
  }

  override describe(): void {
    super.describe(); // Call the describe method of the parent class
    console.log(`It is a circle with radius ${this.radius}.`);
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// usage
const circle = new Circle("red", 5);
circle.describe();
console.log(`Area of the circle: ${circle.area()}`);
