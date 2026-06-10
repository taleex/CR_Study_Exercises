//Excercise 1 - call endpoint with real data

async function getUsersEx1() {

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

 getUsersEx1();

// Exercise 2 — Transform the data
    // 1. Return only the name and email of each user
    // 2. Filter only users whose email ends with ".biz"
    // 3. Log the results

async function getUsersEx2() {
    
    let result = [];

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        result =  data;

        result = result.map(user => ({ name: user.name, email: user.email })).filter(user => {
            return user.email.endsWith(".biz")
        });
        
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

getUsersEx2();