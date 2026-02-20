// singleton

// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh",
    age: 18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDay:["Monday","Saturday"],
    [mySym]: "mykey1"
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chat.com"
Object.freeze(JsUser)
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello Js User,{this.name}`);

}
console.log(JsUser.greetingTwo());



