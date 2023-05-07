class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

class ScientificCalculator extends Calculator {
  square(num) {
    return num * num;
  }
  cube(num) {
    return num * num * num;
  }
  power(num1, num2) {
    return Math.pow(num1, num2);
  }
}

const scientificCal = new ScientificCalculator();
console.log("2+3 =");
console.log(scientificCal.add.call(scientificCal, 2, 3));
console.log("10-5=");
console.log(scientificCal.subtract.apply(scientificCal, [10, 5]));

const multiplyByTwo = scientificCal.multiply.bind(scientificCal, 2);
const powerOfThree = scientificCal.power.bind(scientificCal, 3);

console.log("Multiply 2 with 2 =", multiplyByTwo(2));
console.log("3 raised to the power of 3", powerOfThree(3));
