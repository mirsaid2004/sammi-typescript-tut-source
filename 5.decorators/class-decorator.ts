// types
type PureClass = { new (...args: any[]): object };

type WithIdentity<GClass extends PureClass> = GClass & {
  identity: string;
  getIdentity: () => string;
};

type WithGender<GClass extends PureClass> = {
  new (...args: ConstructorParameters<GClass>): GClass & {
    gender: string;
  };
};

function PeopleIdentity<PClass extends PureClass>(constructor: PClass) {
  return class extends constructor {
    identity = "People Class";
    getIdentity() {
      return this.identity;
    }
  } as PClass & (new (...args: any[]) => { addedProperty: string });
}

function PeopleGender(gender: string) {
  return function <PClass extends PureClass>(constructor: PClass) {
    return class extends constructor {
      gender = gender;
    } as PClass & (new (...args: any[]) => { addedProperty: string });
  };
}

interface People {
  identity: string;
  getIdentity: () => string;
  gender: string;
}

@PeopleIdentity
@PeopleGender("male")
class People {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const people = new People("John", 30);
console.log(people, people.getIdentity());
