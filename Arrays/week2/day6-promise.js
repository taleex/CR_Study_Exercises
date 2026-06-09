// Excersise 1 - A Promise has two outcomes — resolve or reject

const myPromise = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("It worked!");
    } else {
        reject("Something went wrong.");
    }

    console.log(success);

});



myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error)); 

// Exercise 2

const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = { id: 1, name: "Ana" };
        resolve(user);
    }, 2000); // simulates a 2 second API call
});

fetchUser
    .then(user => console.log(user))
    .catch(error => console.log(error));

// Exercise 3 - previous but with async

async function getUser() {
    try{
    // use await here
    const data = await fetchUser;
    console.log(data);}
    catch(error) {
    console.log(error);
}
}

getUser();