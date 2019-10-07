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

const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id: 3,
        text: "Dentist appointment",
        isCompleted: false
    }
];

//forEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.text)
});