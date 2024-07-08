//  primitive

// 7 types: string, number, boolean,undefined,symbol,null,
BigInt

const score = 100
const scoreValue = 100

const IsLoggedIn = null
const outsideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId);

const bigNumber = 22222226666288888n
// console.log(bigNumber);

console.log();

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "rahul",
    age: 22,
}

const myFunction = function(){
  console.log("hello world");
}

console.log(typeof bigNumber);




// Reference (Non Primitive)

// Array,objects,Functions



// =============================================

// memory: stack(primitive) ,heap(non-primitive)

let myYoutubename = "Deoraj Mishra"

let anothername = myYoutubename
anothername = "dexter"

console.log(myYoutubename);
console.log(anothername);

let userOne= {
    email: "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dexter@google.com"
console.log(userOne.email);
console.log(userTwo.email);