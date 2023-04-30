"use strict";

function calcWordFrequencies() {
  const input = prompt();
  const counts = {};
  console.log(input.split(" "));
  input
    .split(" ")
    .forEach((ele) =>
      counts.hasOwnProperty(ele) ? (counts[ele] += 1) : (counts[ele] = 1)
    );
  for (const [key, val] of Object.entries(counts)) {
    console.log(key, val);
  }
}

calcWordFrequencies();
