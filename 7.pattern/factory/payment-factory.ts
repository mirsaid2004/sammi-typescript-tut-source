enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  PAYPAL = "PAYPAL",
  BANK_TRANSFER = "BANK_TRANSFER",
  CRYPTOCURRENCY = "CRYPTOCURRENCY",
}

enum PaymentStatus {
  IDLE = "IDLE",
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

interface IPayment {
  processPayment(amount: number): string;
}

class CreditCardPayment implements IPayment {
  processPayment(amount: number): string {
    return `Processed credit card payment of $${amount}`;
  }
}

class PayPalPayment implements IPayment {
  processPayment(amount: number): string {
    return `Processed PayPal payment of $${amount}`;
  }
}

class BankTransferPayment implements IPayment {
  processPayment(amount: number): string {
    return `Processed bank transfer payment of $${amount}`;
  }
}

class CryptocurrencyPayment implements IPayment {
  processPayment(amount: number): string {
    return `Processed cryptocurrency payment of $${amount}`;
  }
}

class PaymentFactory {
  private constructor() {}

  public static createPayment(method: PaymentMethod): IPayment {
    switch (method) {
      case PaymentMethod.CREDIT_CARD:
        return new CreditCardPayment();
      case PaymentMethod.PAYPAL:
        return new PayPalPayment();
      case PaymentMethod.BANK_TRANSFER:
        return new BankTransferPayment();
      case PaymentMethod.CRYPTOCURRENCY:
        return new CryptocurrencyPayment();
      default:
        throw new Error("Unknown payment method");
    }
  }
}
