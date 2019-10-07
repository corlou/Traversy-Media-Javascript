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

//Array of To Dos, note that Arrays use []

//Conditionals

//Ternary Operator = shorthand "if" statement and used a lot to assign variables based on a condition

// ? represents the ternary operator

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNums(5, 5));