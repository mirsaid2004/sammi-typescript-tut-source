class Singleton {
  private static instance: Singleton;

  private constructor() {
    console.log("Singleton instance created");
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod(): void {
    console.log("Method called on singleton instance");
  }
}

const singleton1 = Singleton.getInstance();
singleton1.someMethod();
const singleton2 = Singleton.getInstance();
console.log(singleton1 === singleton2); // true, both are the same instance
