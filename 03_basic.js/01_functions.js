function sayName(){
    console.log("T");
    console.log("A");
    console.log("R");
    console.log("U");
    console.log("N");  
}
// sayName()


// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }
// // addTwoNum(3,5)
// const result = addTwoNum(3,5)
// console.log("Result:",result);



function addTwoNum(num1,num2){
    // let result = num1+num2;
    // return result
    return num1+num2
}

const result = addTwoNum(3,5)
// console.log("Result:",result);


// function userLogin(username){
//     return `${username} just log in `
// }
 
// console.log(userLogin("Tarun"));


function userLogin(username){
    if (username === undefined){
        console.log("please enter a user" );
        return
    }
    return `${username} just log in `
}
 
// console.log(userLogin("Tarun"));



function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000));


const user = {
    username: "Tarun",
    prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices} `);
}
// handleObject(user)

const myArray = [200,400,500,2000]

function returnsecondValue(anyarray){
    return anyarray[2]
}
console.log(returnsecondValue(myArray));



