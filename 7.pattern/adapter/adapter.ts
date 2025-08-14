class OldPrinter {
  printText(text: string): void {
    console.log(`Old Printer: ${text}`);
  }
}

interface INewPrinter {
  print(text: string): void;
}

class PrinterAdapter implements INewPrinter {
  constructor(private oldPrinter: OldPrinter) {}

  print(text: string): void {
    this.oldPrinter.printText(text);
  }
}

// Usage example
const oldPrinter = new OldPrinter();
const printerAdapter = new PrinterAdapter(oldPrinter);
printerAdapter.print("Hello, World!"); // Output: Old Printer: Hello, World!
