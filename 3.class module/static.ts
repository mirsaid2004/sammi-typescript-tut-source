// static class example
class StaticExample {
  static staticProperty: string = "Static Property";
  static staticMethod(): void {
    console.log("This is a static method.");
  }
  static staticMethodWithParam(param: string): void {
    console.log(`Static method called with param: ${param}`);
  }
}

// static class inheritance example
class StaticChild extends StaticExample {
  static childStaticProperty: string = "Child Static Property";
  static childStaticMethod(): void {
    this.staticMethodWithParam("Hello from Child");
    console.log("This is a static method in the child class.");
  }
}

// usage
console.log(StaticExample.staticProperty);
StaticExample.staticMethod();
StaticExample.staticMethodWithParam("Hello World");
console.log(StaticChild.childStaticProperty);
