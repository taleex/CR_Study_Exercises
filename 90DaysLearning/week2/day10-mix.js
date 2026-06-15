// Exercise 1 

async function getUserDetail(id) {

    let isLoading = true;
    try{
        
        const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const dataUser = await responseUser.json();

        const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${dataUser.id}`);
        const dataPost = await responsePost.json();
        
        const outputData = dataPost.filter(post => post.title.length > 40).map(post => ({id: post.id, title:post.title}));

        return {fetchData: outputData,isLoading:false,error:null};
    }
    catch(error){
        return {fetchData: null,isLoading:false,error};
    }
    
}

const {fetchData, isLoading, error} = await getUserDetail(3);

console.log(fetchData,isLoading,error);