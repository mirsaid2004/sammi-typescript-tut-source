class Variant {
  constructor(
    public name: string,
    public price: number,
    public quantity: number
  ) {}
}

class Product {
  constructor(
    public name: string,
    public description: string,
    public variants: Variant[] = []
  ) {}
}

class VariantBuilder {
  private name: string = "Unknown";
  private price: number = 0;
  private quantity: number = 0;

  setName(name: string): VariantBuilder {
    this.name = name;
    return this;
  }

  setPrice(price: number): VariantBuilder {
    this.price = price;
    return this;
  }

  setQuantity(quantity: number): VariantBuilder {
    this.quantity = quantity;
    return this;
  }

  build(): Variant {
    return new Variant(this.name, this.price, this.quantity);
  }
}

class ProductBuilder {
  private name: string = "Unnamed Product";
  private description: string = "No description";
  private variants: Variant[] = [];

  setName(name: string): ProductBuilder {
    this.name = name;
    return this;
  }

  setDescription(description: string): ProductBuilder {
    this.description = description;
    return this;
  }

  addVariant(variant: Variant): ProductBuilder {
    this.variants.push(variant);
    return this;
  }

  build(): Product {
    return new Product(this.name, this.description, this.variants);
  }
}

const variant1 = new VariantBuilder()
  .setName("Variant 1")
  .setPrice(19.99)
  .setQuantity(100)
  .build();

const variant2 = new VariantBuilder()
  .setName("Variant 2")
  .setPrice(29.99)
  .setQuantity(50)
  .build();

const product = new ProductBuilder()
  .setName("Sample Product")
  .setDescription("This is a sample product description.")
  .addVariant(variant1)
  .addVariant(variant2)
  .build();

console.log("Product:", product);
