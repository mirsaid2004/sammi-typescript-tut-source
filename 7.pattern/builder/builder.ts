enum Gender {
  Female,
  Male,
}

class UserTemplate {
  constructor(
    public name: string,
    public age: number,
    public gender: Gender,
    public profession: string,
    public hobbies: string[] = [],
    public address: string = "Unknown",
    public phone: string = "Not Provided",
    public email: string = "Not Provided"
  ) {}
}

class UserBuilder {
  private name: string = "Unknown";
  private age: number = 0;
  private gender: Gender = Gender.Female;
  private profession: string = "Unemployed";
  private hobbies: string[] = [];
  private address: string = "Unknown";
  private phone: string = "Not Provided";
  private email: string = "Not Provided";

  setName(name: string): UserBuilder {
    this.name = name;
    return this;
  }
  setAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }
  setGender(gender: Gender): UserBuilder {
    this.gender = gender;
    return this;
  }
  setProfession(profession: string): UserBuilder {
    this.profession = profession;
    return this;
  }
  addHobby(hobby: string): UserBuilder {
    this.hobbies.push(hobby);
    return this;
  }
  setAddress(address: string): UserBuilder {
    this.address = address;
    return this;
  }
  setPhone(phone: string): UserBuilder {
    this.phone = phone;
    return this;
  }
  setEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }
  build(): UserTemplate {
    return new UserTemplate(
      this.name,
      this.age,
      this.gender,
      this.profession,
      this.hobbies,
      this.address,
      this.phone,
      this.email
    );
  }
}

const userBuilder = new UserBuilder()
  .setName("Alice")
  .setAge(30)
  .setGender(Gender.Male)
  .setProfession("Software Engineer")
  .addHobby("Reading")
  .addHobby("Hiking")
  .setAddress("123 Main St")
  .setPhone("123-456-7890")
  .setEmail("alex@gmail.com")
  .build();

console.log("User Template:", userBuilder);
