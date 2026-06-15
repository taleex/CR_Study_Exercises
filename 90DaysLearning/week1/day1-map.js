// Exercise 1 — Basic transformation - Return a new array with every number tripled

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.map((number) => number * 3 ));

// Exercise 2 — Extract from objects - Return a new array with only the names

const users = [
  { id: 1, name: "Ana", age: 28 },
  { id: 2, name: "Bruno", age: 34 },
  { id: 3, name: "Carlos", age: 22 },
];

console.log(users.map( (user) => user.name ));


// Exercise 3 — Transform objects - Return a new array where each item has the price doubled

const products = [
  { name: "Shirt", price: 20 },
  { name: "Shoes", price: 80 },
  { name: "Hat", price: 15 },
];


console.log ( products.map((product) => ({
    name: product.name,
    price: product.price * 2
})) );

