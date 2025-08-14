function ChangeClassName(constructor: Function) {
  constructor.prototype.name = "new name";
}

function ChangeClassStyle(constructor: Function) {
  constructor.prototype.style = "new style";
  constructor.prototype.name = "updated name";
}

@ChangeClassStyle
@ChangeClassName
class MyClass {
  name!: string;
  property = "original property";
}

const instance = new MyClass();
console.log(instance, instance.name); // Output: "original property"
