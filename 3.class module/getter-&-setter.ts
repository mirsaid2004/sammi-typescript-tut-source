class Employee {
  private _name: string = "";
  private _age: number = 0;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

const employee = new Employee();
employee.name = "John Doe";
employee.age = 30;
console.log(`Employee Name: ${employee.name}, Age: ${employee.age}`); // Output: Employee Name: John Doe, Age: 30

// Advantages of using getters ans setter:
// 1. **Encapsulation**: Getters and setters allow you to control access to the properties of a class, promoting encapsulation.
// 2. **Validation**: You can add validation logic in setters to ensure that the data being set is valid, preventing invalid states.
// 3. **Computed Properties**: Getters can be used to compute values dynamically based on other properties, providing a way to derive values without storing them.
