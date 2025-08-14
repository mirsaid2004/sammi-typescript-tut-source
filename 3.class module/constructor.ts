class CarWithConstructorOverloading {
  name!: string; // has no default value, it treats as undefined, when we set ! before the property name, it is not null or undefined
  date!: Date; // or we should turn off strictNullChecks in tsconfig.json

  constructor(name: string, date: Date);
  constructor(data: { name: string; date: Date });

  constructor(nameOrData: string | { name: string; date: Date }, date?: Date) {
    if (typeof nameOrData === "string") {
      this.name = nameOrData;
      this.date = date || new Date();
    } else if (typeof nameOrData === "object") {
      // Assuming nameOrData is an object with properties 'name' and 'date'
      this.name = nameOrData.name;
      this.date = nameOrData.date;
    }
  }
}

const car1 = new CarWithConstructorOverloading("Toyota", new Date());
const car2 = new CarWithConstructorOverloading({
  name: "Honda",
  date: new Date(),
});
