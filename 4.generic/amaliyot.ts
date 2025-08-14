// Data type
type FormDataType = {
  email: string;
  password: string;
  name: string;
};

// error type
type ErrorType = {
  email?: string;
  password?: string;
  name?: string;
};

function validateForm<T extends FormDataType>(form: T): ErrorType {
  const errors: ErrorType = {};

  // Validate email
  if (!form.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Email is invalid";
  }

  // Validate password
  if (!form.password) {
    errors.password = "Password is required";
  } else if (form.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  // Validate name
  if (!form.name) {
    errors.name = "Name is required";
  } else if (form.name.length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  return errors;
}

// Example usage
const formData: FormDataType = {
  email: "jakdfls;",
  password: "123",
  name: "A",
};

type isValidEmailType<T> = T extends { email: string } ? boolean : never;
const isValidEmail = (form: FormDataType): isValidEmailType<FormDataType> => {
  return /\S+@\S+\.\S+/.test(form.email);
};
const errors = validateForm(formData);

console.log(errors);
