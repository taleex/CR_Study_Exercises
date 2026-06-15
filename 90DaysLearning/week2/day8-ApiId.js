// Exercise 1 

async function GetUserByID(userId) {

    try{
    const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const dataUser = await responseUser.json();

    console.log(dataUser);

    console.log("---------------Spliter--------------");

    const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${dataUser.id}`);
    const dataPost = await responsePost.json();

    console.log(dataPost);
    }
    catch(error)
    {console.log(error);}
    
}

GetUserByID(2);