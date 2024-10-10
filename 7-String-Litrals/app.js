const boxOne =
 document.querySelector("#box-1");
const boxTwo =
 document.querySelector("#box-2");

const myName = "ImmuCoder";
const working = "WebDev";

const stringConcat =
 "I am " + myName + " and I am " + working;
 
boxOne.textContent = stringConcat;

const stringTemplete =
 `I am ${myName} and I am ${working}`;

boxTwo.textContent = stringTemplete;