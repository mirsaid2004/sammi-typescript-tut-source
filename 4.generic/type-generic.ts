function getProperty<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  if (key in obj) {
    return obj[key];
  } else {
    throw new Error(`Property ${key.toString()} does not exist on the object`);
  }
}

// Example usage
const individual = {
  name: "John",
  age: 30,
  isStudent: false,
};

const personName = getProperty(individual, "name"); // Valid
console.log(personName); // Output: John
