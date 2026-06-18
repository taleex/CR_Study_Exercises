// Exercise 1

const user = {
    name: "Ana",
    greet: function() {
        console.log(this.name);
    }
};

user.greet(); // "Ana" — this refers to the user object

function greet() {
    console.log(this);
}

greet(); // undefined (strict mode) or global object

const user2 = {
    name: "Ana",
    greet: () => {
        console.log(this.name);
    }
};

user2.greet(); // undefined — arrow functions don't have their own this

// Exercise 2

const timer = {
    seconds: 0,
    start: function() {
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
};

timer.start();