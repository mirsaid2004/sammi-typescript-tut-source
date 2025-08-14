type FactoryConstructorType<T> = new (...args: any[]) => T;

class Factory {
  static create<FClass, FArgs extends Array<unknown>>(
    Ctor: FactoryConstructorType<FClass>,
    ...args: FArgs
  ): FClass {
    return new Ctor(...args);
  }
}

class PersonF {
  constructor(public name: string) {}
}

class ProductF {
  constructor(public title: string) {}
}

const afs = Factory.create<PersonF, ConstructorParameters<typeof PersonF>>(
  PersonF,
  "Alice"
);
const pfs = Factory.create(ProductF, "Product A");
