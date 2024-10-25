let number = 101;
// Using if-else
function methodOne() {

  if (number % 2 === 0) {
    console.log("Even number");
  } else {
    console.log("Odd number");
  }
}
methodOne();
// Using Ternary Operator
function methodTwo() {
  number % 2 === 0 
  ? console.log("Even number")
  : console.log("Odd number");
}
methodTwo();