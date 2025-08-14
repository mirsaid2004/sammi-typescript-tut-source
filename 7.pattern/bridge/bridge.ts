interface IPaymentMethod {
  pay: (amount: number) => void;
}

class Click implements IPaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Click.`);
  }
}

class Payme implements IPaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Payme.`);
  }
}

class Uzum implements IPaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Uzum.`);
  }
}

// Bridge class
abstract class PaymentProcessor {
  constructor(protected paymentMethod: IPaymentMethod) {}

  processPayment(amount: number): void {
    this.paymentMethod.pay(amount);
  }
}

// payment platforms
// website payment
class WebsitePayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Processing payment on the website...");
    this.paymentMethod.pay(amount);
  }
}

// mobile payment
class MobilePayment extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log("Processing payment on the mobile app...");
    this.paymentMethod.pay(amount);
  }
}

// Example usage
const clickPayment = new Click();
const paymePayment = new Payme();
const uzumPayment = new Uzum();
const websitePayment = new WebsitePayment(clickPayment);
websitePayment.processPayment(100);
