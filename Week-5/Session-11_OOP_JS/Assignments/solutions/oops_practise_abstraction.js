"use strict";
class BankAccount {
  accountNumber;
  balance;
  accountHolderName;
  constructor(accountNumber, balance, accountHolderName) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountHolderName = accountHolderName;
  }

  deposit(amount) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    } else {
      console.log("Withdrawal failed. Insufficient balance.");
    }
  }
}

// Create instances of each subclass
// const checking = new CheckingAccount("C001", 5000, "John Doe");
const savings = new SavingsAccount("S001", 3000, "Jane Smith");
savings.withdraw(500);
console.log(`Savings account balance: $${savings.getBalance()}`);
savings.withdraw(4000);
console.log(`Savings account balance: $${savings.getBalance()}`);

const checkingAcount = new CheckingAccount("C001", 3000, "Jane Smith");
savings.withdraw(500);
console.log(`Checking account balance: $${savings.getBalance()}`);
savings.withdraw(4000);
console.log(`Checking account balance: $${savings.getBalance()}`);
