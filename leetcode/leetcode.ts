type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {

    let filteredArr = [];

    for( let i = 0 ; i < arr.length; i++){
        filteredArr = Fn(arr[i], i);
    }

    return filteredArr
    
};