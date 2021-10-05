//variabler

//är för varierande variabler som ska kunna assignas nya värden
let hungry = false;

hungry = true;

//konstanter är konstanta och kan inte tilldelas nya värden efter att de har deklarerats
const fName = "Christian";

//console.log(hungry);
//console.log(fName);

//Datatyper - Primitiva
//String
const lastName = "Johannesson";

//Number
const value = 5.8;

//Boolean
let tired = true;

//Undefined
let users;

//Null - Ingenting
let nothing = null;

//console.log(typeof value);

//Datatyper - Avancerade
//Object
const person = { name: "Chritian", age: 31, tired: false };

//Array - Lista av värden
const fruits = ["Banan", "Äpple", "Apelsin"];
const numbers = [1, 2, 3, 4, 5, 567, 8908];

//Array av objects
const persons = [
  { name: "Chritian", age: 31, tired: true },
  { name: "Carl", age: 21, tired: false },
];

//console.log(typeof persons);

//Arithmetics - Beräkningar

const valueOne = 5;

const valueTwo = 10;

const sum = valueOne + valueTwo;

const diff = valueOne - valueTwo;

//Assignments - tilldelning
let num1 = 5;

num1 += 5;

const num2 = num1 + 5;

console.log(num2);
