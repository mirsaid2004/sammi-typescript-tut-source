interface IShape<T> {
  radius: T;
}

function createShape<T>(arg: T): IShape<T> {
  return {
    radius: arg,
  };
}

const circle1 = createShape(5);
const circle2 = createShape<string>("10cm");
