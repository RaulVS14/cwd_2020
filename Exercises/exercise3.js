// change everything below to the newer Javascript!

// let + const
let a = 'test';
var b = true;
var c = 789;
a = 'test2';
// Solution
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// Destructuring
var person = {
    firstName: "John",
    lastName: "Doe",
    years: 50,
    eyeColor: "blue",
    city: "RockTon"
};
/*
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;*/

// Solution
let {firstName, lastName, years, eyeColor, city} = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

// Solution
var okObj = {a, b, c};


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// Solution
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

// Solution
function isValidAge(age = 18) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
let firstSymbol = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

let whereAmI = (username, location) => username && location ? "I am not lost" : "I am totally lost!";