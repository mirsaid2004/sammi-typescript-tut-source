function CreatedAt<GClass extends { new (...args: any[]): object }>(
  constructor: GClass
) {
  return class extends constructor {
    readonly createdAt: Date = new Date();
  };
}

@CreatedAt
class Course {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}

@CreatedAt
class Lesson {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}

//types
type CreatedAtEntity = {
  createdAt: Date;
};

const course = new Course(
  "TypeScript Basics",
  "Learn the basics of TypeScript."
) as Course & CreatedAtEntity;
const lesson = new Lesson(
  "Introduction to TypeScript",
  "Understanding TypeScript basics."
) as Lesson & CreatedAtEntity;

console.log(course, course.createdAt);
console.log(lesson, lesson.createdAt);
