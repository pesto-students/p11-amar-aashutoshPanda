const counter = () => {
  let count = 0;
  function inner() {
    count += 1;
    return count;
  }

  return inner;
};

const firstCounter = counter();
const secondCounter = counter();

const firstValues = [];
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

const secondValues = [];
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log("firstValuse array : ", firstValues);
console.log("secondValuse array : ", secondValues);
