let a = prompt("Please provide the length of the first adjacent side.");
let b = prompt("Please provide the length of the second adjacent side.");

let aSquared = a ** 2;
let bSquared = b ** 2;

let cSquared = aSquared + bSquared;

let c = cSquared ** (1 / 2);

console.log(c);
