function getUserInfo(name: string, email: string) {
  return {
    id: 1,
    name,
    email,
  };
}

// ReturnType<T>
// The `ReturnType` utility type allows you to extract the return type of a function type.
type getUserReturnType = ReturnType<typeof getUserInfo>;
// Parameters<T>
// The `Parameters` utility type allows you to extract the parameter types of a function type as
type getUserParamsType = Parameters<typeof getUserInfo>;

// Example usage
const user: getUserReturnType = getUserInfo(
  "John Doe",
  "jakdfl;ajds@gmail.com"
);
const userParams: getUserParamsType = ["John Doe", "jakdfll@gajkl;gaj.com"];

// ConstructorParameters<T>
// The `ConstructorParameters` utility type allows you to extract the parameter types of a constructor function

class PersonClass {
  constructor(public name: string, public age: number) {}
}

type PersonConstructorParams = ConstructorParameters<typeof PersonClass>;

// Example usage
const personParams: PersonConstructorParams = ["Alice", 30];

// Awaited<T>
// The `Awaited` utility type allows you to extract the type that a Promise resolves to

type PromiseType = Promise<string>;
type ResolvedType = Awaited<PromiseType>;

async function fetchData2(): Promise<string> {
  return "Data fetched successfully";
}

type FetchData2ReturnType = Awaited<ReturnType<typeof fetchData2>>;
