let balance = 500.00;

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
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

  commit() {
    this.account.balance += this.amount;
  }

}

class Withdrawal extends Transaction {

  commit() {
    this.account.balance -= this.amount;
  }

}





// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t3 = new Deposit(120.00, myAccount);
t3.commit();

console.log('Transaction 3:', t3);

console.log('Balance:', myAccount.balance);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', myAccount.balance);

