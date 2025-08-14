class Car {
  name: string;
  date: Date;

  constructor(name: string, date: Date) {
    this.name = name;
    this.date = date;
  }
}

const car = new Car("Toyota", new Date());
console.log(car.name); // Output: Toyota
