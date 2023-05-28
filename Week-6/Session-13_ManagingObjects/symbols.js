// Function to generate a closure that encapsulates the transaction ID counter
function createTransactionIdGenerator() {
  let transactionCounter = 0;

  // Return the generateTransactionId function as a closure
  return function generateTransactionId() {
    // Increment the transaction counter
    transactionCounter++;

    // Generate a unique string for the transaction ID
    const transactionIdString = "TRANSACTION_ID_" + transactionCounter;

    // Create a new unique symbol using the transaction ID string
    const transactionIdSymbol = Symbol(transactionIdString);

    // Return the unique transaction ID symbol
    return transactionIdSymbol;
  };
}

// Create an instance of the transaction ID generator closure
const generateTransactionId = createTransactionIdGenerator();

// Example usage
const transaction1 = generateTransactionId();
console.log(transaction1); // Symbol(TRANSACTION_ID_1)

const transaction2 = generateTransactionId();
console.log(transaction2); // Symbol(TRANSACTION_ID_2)

const transaction3 = generateTransactionId();
console.log(transaction3); // Symbol(TRANSACTION_ID_3)
