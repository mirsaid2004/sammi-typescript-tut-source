enum PaymentMethod {
  Payme,
  Click,
  Paynet,
  Paycom,
  Uzum,
}

enum PaymentStatus {
  Pending,
  Completed,
  Failed,
  Refunded,
  Cancelled,
}

class Payment {
  method: PaymentMethod;
  status: PaymentStatus;
  createdAt: Date;
  updatedAt: Date;

  constructor(method: PaymentMethod) {
    this.method = method;
    this.status = PaymentStatus.Pending; // Default status
    this.createdAt = new Date(); // Set createdAt to current date
    this.updatedAt = new Date(); // Set updatedAt to current date
  }

  public setMethod(method: PaymentMethod): void {
    this.method = method;
  }

  public getLifeTime(): number {
    const currentTime = new Date();
    const lifetime = currentTime.getTime() - this.createdAt.getTime();
    return lifetime; // Returns lifetime in milliseconds
  }

  public rejectPayment(): void {
    if (this.status === PaymentStatus.Completed) {
      throw new Error("Payment already completed, cannot reject.");
    }

    if (this.status === PaymentStatus.Refunded) {
      throw new Error("Payment already refunded, cannot reject.");
    }

    this.status = PaymentStatus.Cancelled; // Change status to Cancelled
    this.updatedAt = new Date(); // Update the updatedAt timestamp
    console.log("Payment has been rejected.");
  }

  public completePayment(): void {
    if (this.status !== PaymentStatus.Pending) {
      throw new Error("Payment can only be completed if it is pending.");
    }

    this.status = PaymentStatus.Completed; // Change status to Completed
    this.updatedAt = new Date(); // Update the updatedAt timestamp
    console.log("Payment has been completed.");
  }
}

// Example usage
const payment = new Payment(PaymentMethod.Payme);
payment.completePayment(); // Completes the payment
console.log(`Payment status: ${PaymentStatus[payment.status]}`); // Output: Payment status: Completed
payment.getLifeTime(); // Gets the lifetime of the payment in milliseconds
payment.rejectPayment(); // Rejects the payment
console.log(`Payment lifetime: ${payment.getLifeTime()} ms`); // Output: Payment lifetime in milliseconds
console.log(`Payment method: ${PaymentMethod[payment.method]}`); // Output: Payment method: Payme
