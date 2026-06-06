// Excersise 1 -  Calculate the total value of only delivered orders

const orders = [
  { id: 1, status: "delivered", price: 120 },
  { id: 2, status: "pending", price: 80 },
  { id: 3, status: "delivered", price: 200 },
  { id: 4, status: "cancelled", price: 50 },
  { id: 5, status: "delivered", price: 95 }, ];

   const total = 
    orders.filter(order => order.status === "delivered")
    .reduce((accumulator, order) => accumulator + order.price, 0);

  console.log(total)

// Exercise 2 - Return an array of names of active users only

const users = [
  { name: "Ana", age: 28, active: true },
  { name: "Bruno", age: 17, active: false },
  { name: "Carlos", age: 34, active: true },
  { name: "Diana", age: 15, active: false },
];

const activeUsers = users.filter(user => user.active).map(user => user.name)

console.log(activeUsers);

// Exercise 3 
// Return the total price of all in stock products
// But apply a 10% discount to each price first

const products = [
  { name: "Shirt", price: 20, inStock: true },
  { name: "Shoes", price: 80, inStock: false },
  { name: "Hat", price: 15, inStock: true },
  { name: "Jacket", price: 120, inStock: true },
];

const ProductStock = products.filter(product => product.inStock).reduce(
    (accumulator, product) => (accumulator + product.price * 0.9), 0
)

console.log(ProductStock)

