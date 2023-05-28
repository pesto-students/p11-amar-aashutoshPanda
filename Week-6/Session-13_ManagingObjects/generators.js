function* stringSymbolIterator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield Symbol(arr[i]);
  }
}

// Example usage:
const strings = ["hello", "world", "test"];
const iterator = stringSymbolIterator(strings);

for (const symbol of iterator) {
  console.log(symbol);
}
