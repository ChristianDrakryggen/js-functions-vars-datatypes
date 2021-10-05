let tired = false;

function greeting() {
  alert(tired);
}

function callGreeting() {
  greeting();
}

function calculateVAT(priceExVAT) {
  const VAT = 1.25;
  const priceIncVAT = priceExVAT * VAT;
  alert(priceIncVAT);
}

function exempel() {
  const hello = "Hejsan";
  console.log(hello);
}

//return statement
function calculateAndReturn() {
  const valOne = 10;
  const valTwo = 20;
  const sum = valOne + valTwo;
  return sum;
}

greeting();
calculateVAT(355);

//printa värdet som returneras från calculateAndReturn
console.log(calculateAndReturn());
document.getElementById("output").innerHTML = calculateAndReturn();

function myFunction(message) {
  console.log("blablabla");
  alert(message);
}

//SingleLine bara om funktionen har endast ett statement
const mySingleLineArrowFunction = (message) => console.log(message);

//Arrow-functions med fler än ett statements måste ges en funktions-body {}
const myArrowFunction = () => {
  console.log("blablabla");
  alert("lolololol");
};

myFunction("tjohej");
mySingleLineArrowFunction("tjohopp");
