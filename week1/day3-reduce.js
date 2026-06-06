// Exercise 1 -  Return the total sum of all prices

const prices = [10, 25, 8, 42, 15, 2];


const totalSum = prices.reduce((accumulator, currentItem) => accumulator + currentItem, 0);

console.log(totalSum)

// Exercise 2 — Count items - Count how many orders have status "delivered"

const orders = [
  { id: 1, status: "delivered" },
  { id: 2, status: "pending" },
  { id: 3, status: "delivered" },
  { id: 4, status: "cancelled" },
  { id: 5, status: "delivered" },
];

const totalOrdersDelivered = orders.reduce((count,currentOrder) => {
    if (currentOrder.status === "delivered"){
        return count+1;
    }
        return count;
},0 )

console.log(totalOrdersDelivered);

// Exercise 3 - Return an object that counts how many times each fruit appears

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((counter, currentFruit) => {
    if (counter[currentFruit]) {
        counter[currentFruit] = counter[currentFruit] + 1;
    } else {
        counter[currentFruit] = 1;
    }
    return counter;
}, {});

console.log(fruitCount);