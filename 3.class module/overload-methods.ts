class Provider {
  name: string;
  provider: string[];

  constructor(name: string) {
    this.name = name;
    this.provider = [];
  }

  public addProvider(provider: string): void;
  public addProvider(provider: string[]): void;
  public addProvider(provider: string | string[]): void {
    if (typeof provider === "string") {
      this.provider.push(provider);
    } else if (Array.isArray(provider)) {
      this.provider.push(...provider);
    } else {
      throw new Error(
        "Invalid provider type. Must be a string or an array of strings."
      );
    }
  }
}

const provider = new Provider("MyProvider");
provider.addProvider("Provider1");
provider.addProvider(["Provider2", "Provider3"]);
console.log(provider.provider); // Output: ['Provider1', 'Provider2', 'Provider3']
