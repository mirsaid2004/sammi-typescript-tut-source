export enum Role {
  ADMIN = "admin",
  STUDENT = "student",
}

abstract class User {
  id!: number;
  name!: string;
  role!: Role;

  constructor(id: number, name: string, role: Role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}

class Course {
  private students: User[] = [];

  id!: number;
  title!: string;
  description!: string;

  constructor({
    id,
    title,
    description,
  }: {
    id: number;
    title: string;
    description: string;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  // Getter - students list

  get studentsList(): string[] {
    return this.students.map((student) => student.name);
  }

  checkIsEnrolled(student: User): boolean {
    return this.students.some((s) => s.id === student.id);
  }

  enrollStudent(student: User): void {
    if (this.checkIsEnrolled(student)) {
      console.log(
        `Student ${student.name} is already enrolled in this course.`
      );
      return;
    }
    if (student.role === Role.STUDENT) {
      this.students.push(student);
      console.log(`Student ${student.name} has been enrolled.`);
    }
  }
}

class Admin extends User {
  constructor(id: number, name: string) {
    super(id, name, Role.ADMIN);
  }

  addCourse(course: Course, courses: Course[]): void {
    courses.push(course);
    console.log(`Admin ${this.name} created course: ${course.title}`);
  }

  getStudentsList(course: Course): string[] {
    return course.studentsList;
  }

  enroll(course: Course, student: User): void {
    course.enrollStudent(student);
  }
}

class Student extends User {
  constructor(id: number, name: string) {
    super(id, name, Role.STUDENT);
  }

  enroll(course: Course): void {
    course.enrollStudent(this);
  }
}

function isAdmin(user: User): user is Admin {
  return user instanceof Admin;
}

const courses: Course[] = [];

const admin = new Admin(1, "Alice");

const student1 = new Student(2, "Bob");
const student2 = new Student(3, "Charlie");

const mathCourse = new Course({
  id: 1,
  title: "Mathematics",
  description: "An introductory course to Mathematics.",
});

admin.addCourse(mathCourse, courses);
student1.enroll(mathCourse);
student2.enroll(mathCourse);

admin.getStudentsList(mathCourse);
