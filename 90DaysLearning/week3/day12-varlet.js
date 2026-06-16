//Exercise 1

if(true){
    var nameVar = "Ana";
}

console.log(nameVar);

if(true){
    let nameLet = "Ana";
}

//console.log(nameLet);

//Exercise 2

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}

//Exercise 3
// 1. Global scope — declare a variable outside everything
// 2. Function scope — declare a variable inside a function
// 3. Block scope — declare a variable inside an if block

// For each one, try to access it outside its scope
// and see what happens

const globalVar = "globalTest";

function IsInside(){

    if(true){
    var varVar = "VarTest"
    }

    if(true){
        let letVar = "letTest";
    }

    console.log(varVar);

}
