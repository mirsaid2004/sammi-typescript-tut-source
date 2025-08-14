class GenericShape<GName, GType> {
  name: GName;
  type: GType;

  constructor(name: GName, type: GType) {
    this.name = name;
    this.type = type;
  }

  getDescription(): string {
    return `Shape Name: ${this.name}, Shape Type: ${this.type}`;
  }
}

// Example usage
const circleShape = new GenericShape<string, string>("Circle", "Round");
const square = new GenericShape<string, string>("Square", "Quadrilateral");

console.log(circleShape.getDescription()); // Output: Shape Name: Circle, Shape Type: Round
console.log(square.getDescription()); // Output: Shape Name: Square, Shape Type: Quadrilateral
