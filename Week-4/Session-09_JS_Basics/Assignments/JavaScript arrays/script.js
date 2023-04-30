// Put your solution here

const printArr = (arr) => {
  if (arr.length == 0) {
    console.log("None");
  } else {
    arr.forEach((ele) => console.log(ele));
  }
};
const divideArray = (nums) => {
  const even = [];
  const odd = [];
  nums.forEach((element) => {
    if (element % 2 === 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  });

  even.sort();
  odd.sort();

  console.log("Even numbers:");
  printArr(even);

  console.log("Odd numbers:");
  printArr(odd);
};

divideArray([4, 2, 9, 1, 8]);
