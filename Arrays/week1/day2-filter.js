// Exercise 1 — Basic filter - Return only the even numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 21];

console.log(numbers.filter((number) => number%2 === 0 ));

// Exercise 2 — Filter objects - Return only the active users

const users = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Bruno", active: false },
  { id: 3, name: "Carlos", active: true },
  { id: 4, name: "Diana", active: false },
];

console.log(users.filter((user) => user.active ));

// Exercise 3 — Filter by value - Return only products that cost more than 25

const products = [
  { name: "Shirt", price: 20 },
  { name: "Shoes", price: 80 },
  { name: "Hat", price: 15 },
  { name: "Jacket", price: 120 },
];

console.log(products.filter((product) => product.price > 25 ));