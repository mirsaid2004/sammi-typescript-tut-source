interface IPrototype<T> {
  clone(): T;
}

class PrototypeClass implements IPrototype<PrototypeClass> {
  constructor(
    public title: string,
    public description: string,
    public metadata: {
      tags: string[];
      createdAt: Date;
      updatedAt: Date;
    } = {
      tags: ["Default"],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ) {}

  clone(): PrototypeClass {
    const deepClone = JSON.parse(JSON.stringify(this.metadata));
    return new PrototypeClass(
      deepClone.title,
      deepClone.description,
      deepClone.metadata
    );
  }
}

const original = new PrototypeClass(
  "Original Title",
  "This is the original description",
  {
    tags: ["tag1", "tag2"],
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-02"),
  }
);
const clone = original.clone();
console.log("Original:", original);
console.log("Clone:", clone);
