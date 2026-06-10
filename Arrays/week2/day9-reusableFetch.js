//Exercise 1

async function useSearchQuery(url) {
    let isLoading = true;
    try{
        
        const response = await fetch(url);
        const data = await response.json();

        isLoading = false;

     return {
            data, isLoading, error:null
        };
    }
    catch(error){
        isLoading = false;
        return {data:null, isLoading: false, error};
    }

}

const {data, isLoading, error} = await useSearchQuery("https://jsonplaceholder.typicode.com/users/1");

console.log(data,isLoading, error);

