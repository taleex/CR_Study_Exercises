// Exercise 1 - Find the first active user, Check if some users are under 18, Check if every user is active

const users = [
  { id: 1, name: "Ana", age: 28, active: true },
  { id: 2, name: "Bruno", age: 17, active: false },
  { id: 3, name: "Carlos", age: 34, active: true },
  { id: 4, name: "Diana", age: 15, active: true },
];

let outputsUsers = []

outputsUsers = [...outputsUsers, users.find(user => user.active)];
outputsUsers = [...outputsUsers,users.some(user => user.age<18)];
outputsUsers = [...outputsUsers,users.every(user => user.active)];

console.log(outputsUsers)

//Exercise 2
// 1. Find the first product that is out of stock
// 2. Check if some products cost more than 100
// 3. Check if every product is in stock

const products = [
  { name: "Shirt", price: 20, inStock: true },
  { name: "Shoes", price: 80, inStock: false },
  { name: "Hat", price: 15, inStock: true },
  { name: "Jacket", price: 120, inStock: false },
];

let outputsProducts = [];

outputsProducts = [...outputsProducts, products.find( product => !product.inStock)];
outputsProducts = [...outputsProducts, products.some( product => product.price  > 100)];
outputsProducts = [...outputsProducts, products.every( product => product.inStock)];

console.log(outputsProducts);

// Excersise 3 
// 1. Find the first score above 80
// 2. Check if some scores are below 60
// 3. Check if every score is above 50

const scores = [72, 85, 90, 68, 95, 55];

let outputScores = [];

outputScores = [...outputScores, scores.find(score => score > 80)];
outputScores = [...outputScores, scores.some(score => score < 60 )];
outputScores = [...outputScores, scores.every(score => score > 50)];

console.log(outputScores);