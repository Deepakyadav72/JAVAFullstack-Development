class BankAccount {
  #balance; 
  constructor(accountHolder) {
    this.accountHolder = accountHolder;
    this.#balance = 0;
  }

  // Public method - visible to users
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  // Public method - visible to users
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn ₹${amount}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  checkBalance() {
    console.log(`Current balance: ₹${this.#balance}`);
  }
}

// Create an account
const account = new BankAccount("MehFuz");

// Interact using abstracted methods
account.deposit(1000);
account.withdraw(400);
account.checkBalance();

