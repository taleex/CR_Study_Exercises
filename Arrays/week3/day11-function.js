// Exercise 1 - function factory

function makeMutiplier(nums) {
    
    return function (number){
        return number * nums;
    }
}

const double = makeMutiplier(2);
const triple = makeMutiplier(3);

console.log(double(5));
console.log(double(2));
console.log(triple(3));

// Exercise 2 — private variable
// Build a function called makeWallet that:
// - Starts with a balance of 0
// - Returns an object with two functions: deposit and getBalance
// - deposit(amount) adds to the balance
// - getBalance() returns the current balance
// - balance cannot be accessed directly from outside

function makeWallet(){

    let balance = 0;

    return {
        
        deposit: function (amount){
            balance = balance + amount;
        },
        getBalance: function(){
            return balance;
        }
};
}

const wallet = makeWallet();
wallet.deposit(50);
wallet.deposit(30);

console.log(wallet.getBalance());
console.log(wallet.balance);
