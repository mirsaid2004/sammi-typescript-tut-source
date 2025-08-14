// import { add } from "math";

declare function add(a: number, b: number): number;

// what is declare
// declare is used to define the shape of a module or variable that is defined elsewhere, typically in a separate file or library. It tells TypeScript about the existence of a variable or module without providing its implementation.
// It is often used in declaration files (.d.ts) to provide type information for JavaScript

console.log(add(10, 5)); // Output: 15
