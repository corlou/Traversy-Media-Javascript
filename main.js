// var, let, const
// let and const are NOT interchangable, but use const as it is stronger

//Data Types: "String", Numbers, Boolean (true/false), Null (empty), Undefined, Symbol

/*const name = "John";
const age = 30;

//Concatenation
console.log("My name is " + name + " and I am " + age)
//Template String
const hello = `My name is ${name} and I am ${age}`;

console.log(hello);*/

//Arrays  - variables that hold multiple values

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 Main St",
        city: "Boston",
        state: "MA"
    }
}

const { firstName, lastName, address: { city }} = person;

console.log(city);