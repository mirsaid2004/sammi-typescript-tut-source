// Pick <T, K>
// The `Pick` utility type allows you to create a new type by selecting a subset of properties from an existing type.
interface IUser {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  password: string;
  secretKey: string;
}

type UserContactInfo = Pick<IUser, "id" | "email">;

// Omit <T, K>
// The `Omit` utility type allows you to create a new type by excluding specific properties

type UserWithoutSensitiveInfo = Omit<IUser, "password" | "secretKey">;

// Extract <T, U>
// The `Extract` utility type allows you to create a new type by extracting types from a
// union type that are assignable to another type.
type UserKeys = keyof IUser; // "id" | "name" | "email"
type StringKeys = Extract<UserKeys, string>; // "name" | "email"
type SensitiveKeys = Extract<UserKeys, "password" | "secretKey">;

// Exclude <T, U>
// The `Exclude` utility type allows you to create a new type by excluding types from a'
// union type that are assignable to another type.
type NonSensitiveKeys = Exclude<UserKeys, "password" | "secretKey">; // "id" | "name" | "email"
