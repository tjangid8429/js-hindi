// primitive

// 7 type: string, number, boolean, null, undefined, symbol, bigint

// const score = 100
// const scoreValue = 300.3
// const isLoggedIn = false
// const outSideTemp = null
// let usreEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')
// const bigInt = 1235428555545568542555555588524562565252252156525n

// console.log(typeof bigInt);


// reference (Non primitive)

// type: Array, Object, Function

const Heros = ["Tarun, Rahul, Virendra"]
const objct = {
    name:"Tarun",
    age:21
}

const myfunc = function(){
    console.log("Hellow World");
}

// console.log(typeof myfunc);


// *************************Memories***************************

// there are two type of memories 

// 1. Stake  
// - used in primitive datatype 
// - when deffined in stake we get copy of variable 

// 2. Heap
// - used in not primitive datatype 
// - when deffined in heap we get reffrance value of orignal value


// example of stake
let intaId = "rdx_tarun_0010"
let anotherId = intaId
anotherId = "rdxtarun"
// console.log(anotherId);
// console.log(intaId);


// example of hape
let userOne = {
    gmail: "tarun@gmail.com",
    upi: "tarun@upi"
}

let userTwo = userOne

userTwo.gmail = "tarun123@gmail.com"

// userTwo = {
//     gmail: "tarun123@gmail.com",
//     upi: "tarun123@upi"
// }

console.log(userOne.gmail)
console.log(userTwo.gmail)
