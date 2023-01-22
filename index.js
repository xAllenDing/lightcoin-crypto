let balance = 500.00;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}


class Account {
  constructor(username) {
    this.username = username;

    //have balance to start at 0
    this.balance = 0;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

}

class Withdrawal extends Transaction {

 get value() {
  return -this.amount;
 }

}





// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

console.log("Your starting balance is:", myAccount.balance);

const t1 = new Deposit(500, myAccount);
t1.commit();

console.log("Your new balance is: ", myAccount.balance);

const t2 = new Withdrawal(300, myAccount);
t2.commit();

console.log("Your new balance is: ", myAccount.balance);

