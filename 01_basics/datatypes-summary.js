// primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "ahad",
    age: 22,
}

const myfunction = function(){
    console.log("hello world");
    
}

console.log(typeof bigNumber);


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudarydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo = userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);



