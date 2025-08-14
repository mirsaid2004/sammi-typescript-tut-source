// composition example

class Person {
  name: string;

  constructor(name: string = "John Doe") {
    this.name = name;
  }

  sayHello(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

class Checkout {
  amount: number;

  constructor(amount: number = 0) {
    this.amount = amount;
  }

  processPayment(): void {
    console.log(`Processing payment of $${this.amount}.`);
  }
}

class ShoppingCart {
  person: Person;
  checkout: Checkout;

  constructor(person: Person, checkout: Checkout) {
    this.person = person;
    this.checkout = checkout;
  }

  checkoutCart(): void {
    this.person.sayHello();
    this.checkout.processPayment();
  }
}

// Usage
const person = new Person("Alice");
const checkout = new Checkout(100);
const cart = new ShoppingCart(person, checkout);
cart.checkoutCart();

// access modifiers
// 1. **Public**: Members are accessible from anywhere.
// 2. **Private**: Members are accessible only within the class.
// 3. **Protected**: Members are accessible within the class and its subclasses.

class BankAccount {
  protected readonly accountNumber: string;
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
    this.accountNumber = `ACC-${Math.floor(Math.random() * 1000000)}`;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance is $${this.balance}.`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance is $${this.balance}.`);
    } else {
      console.log("Invalid withdrawal amount.");
    }
  }

  public getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  private interestRate: number;

  constructor(initialBalance: number = 0, interestRate: number = 0.05) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  public applyInterest(): void {
    const interest = this.getBalance() * this.interestRate;
    this.deposit(interest);
    console.log(
      `Applied interest of $${interest}. New balance is $${this.getBalance()}.`
    );
  }
}

// Usage
const savingsAccount = new SavingsAccount(1000, 0.03);
savingsAccount.deposit(500);
savingsAccount.withdraw(200);
savingsAccount.applyInterest();
savingsAccount.withdraw(1000); // Invalid withdrawal amount
