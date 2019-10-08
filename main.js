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

// Class
class Person {
    constructor(dirstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);


