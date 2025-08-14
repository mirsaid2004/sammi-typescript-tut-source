interface IProduct {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property
  tags?: string[]; // Optional property
}

const products: IProduct[] = [];

const product1: Required<Readonly<IProduct>> = {
  id: 1,
  name: "Laptop",
  price: 1000,
  description: "A high-performance laptop",
  tags: ["electronics", "computers"],
};

// product1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

function addProduct(product: Required<IProduct>): void {
  products.push(product);
}

addProduct(product1);

function updateProduct(id: number, updatedProduct: Partial<IProduct>): void {
  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex !== -1) {
    const existingProduct = products[productIndex];
    products[productIndex] = {
      ...existingProduct,
      ...updatedProduct,
    };
  }
}

updateProduct(1, {
  price: 900,
});
