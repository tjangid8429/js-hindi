//const tinderUser = new object()

const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser ={
    email:"somw@gmail.com",
    fullname:{
        username:{
            firstName:"hitsaa",
            secondName:"choudhary"
        }
    }
}
console.log(regularUser.fullname.username.firstName)
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj33 = {obj1,obj2}
console.log(obj3);

const obj3 = Object.assign({},obj1,obj2,)
console.log(obj3)

const obj4 = {...obj1,...obj2}
//console.log(obj4)

const users = [
    {
        id:1,
        email:"t@gmail.com"
    },
    {
        id:1,
        email:"t@gmail.com"
    },
    {
        id:1,
        email:"t@gmail.com"
    }
    
]
users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLogged"));



const course ={
    coursename:"js in hindi",
    price:"999",
    courseIntructor:"hitesh"
}
//course.courseInstructor
// const{courseInstructor} = course
console.log(courseIntructor);

const{courseIntructor:courseInstructor}=course
console.log(instructor)

{
    "name"="hitesh",
    "coursename"="js in hindi"
    "price"="free"
}
[
    {},
    {},
    {},
]