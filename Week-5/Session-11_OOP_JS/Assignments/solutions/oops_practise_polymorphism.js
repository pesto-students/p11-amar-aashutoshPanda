class Shape {
  calculateArea() {
    // This method will be overridden by the subclasses
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Create instances of each subclass
const rectangle = new Rectangle(4, 5);
const triangle = new Triangle(3, 6);
const circle = new Circle(2);

// Call calculateArea() method on each instance and log the result
console.log("Rectangle area:", rectangle.calculateArea());
console.log("Triangle area:", triangle.calculateArea());
console.log("Circle area:", circle.calculateArea());
