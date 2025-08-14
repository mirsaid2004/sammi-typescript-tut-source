type Constructor<T = object> = new (...args: any[]) => T;

function DrawShape<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    draw() {
      console.log("Drawing a shape");
    }
  };
}

function FillShape<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    fill() {
      console.log("Filling a shape");
    }
  };
}

class ShapeClass {}

const MixedShape = FillShape(DrawShape(ShapeClass));

class CircleClass extends MixedShape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  draw() {
    super.draw();
    console.log(`Drawing a circle with radius ${this.radius}`);
  }

  fill() {
    super.fill();
    console.log(`Filling a circle with radius ${this.radius}`);
  }
}
