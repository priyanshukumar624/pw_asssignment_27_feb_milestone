// Create a customer object
const customer = {
    name: "Priyanshu",
    balance: 1000,
    
    // Method to deposit money into the account
    deposit: function(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount}. Current balance is ${this.balance}.`);
    },
    
    // Method to withdraw money from the account
    withdraw: function(amount) {
      if (amount > this.balance) {
        console.log("Insufficient balance.");
      } else {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. Current balance is ${this.balance}.`);
      }
    }
  };
  
  // Deposit money into the account
  customer.deposit(500);
  
  // Withdraw money from the account
  customer.withdraw(200);
  