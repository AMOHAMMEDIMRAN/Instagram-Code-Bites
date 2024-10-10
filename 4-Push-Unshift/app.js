const pushOutput = 
document.querySelector("#push");
const unshiftOutput = 
document.querySelector("#unshift");

// Array push method:

let mobiles = 
['Iphone', 'Oppo', 'Vivo', 'Nothing']
mobiles.push('one plus')

pushOutput.textContent = mobiles;

// Array unshift method:

let cars = 
['BMW', 'Benz', 'Audi', 'Ferrari']
cars.unshift('porsche')

unshiftOutput.textContent = cars;