interface Person {
  name: string;
  greeting(): string;
}

enum PersonType {
  STUDENT = "student",
  TEACHER = "teacher",
}

class Student implements Person {
  constructor(public name: string) {}

  sayHello(): void {
    throw new Error("Method not implemented.");
  }
  greeting(): string {
    return "Hello, I am a student!";
  }
}

class Teacher implements Person {
  constructor(public name: string) {}

  sayHello(): void {
    throw new Error("Method not implemented.");
  }
  greeting(): string {
    return "Hello, I am a teacher!";
  }
}

class PersonFactory {
  private constructor() {}
  public static createPerson(type: PersonType, name: string): Person {
    switch (type) {
      case PersonType.STUDENT:
        return new Student(name);
      case PersonType.TEACHER:
        return new Teacher(name);
      default:
        throw new Error("Unknown person type");
    }
  }
}

const student = PersonFactory.createPerson(PersonType.STUDENT, "Alice");
const teacher = PersonFactory.createPerson(PersonType.TEACHER, "Bob");
