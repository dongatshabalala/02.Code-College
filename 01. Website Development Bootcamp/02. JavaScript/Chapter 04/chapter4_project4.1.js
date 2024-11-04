"use strict";

// Chapter 4 Project: 4.1 - Evaluating a Number Game

/* Ask the user to enter a number and check whether it's greater than,
equal to, or less than a dynamic number value in your code.

Output the result to the user. */

let value = prompt("Please Provide a Value Between 0 - 100.");

let numberValue = Number(value);

let dynamicNumberValue = 50;

/* Check whether the number is greater than,
equal to, or less than a dynamic number in the code */

if (numberValue < dynamicNumberValue) {
    alert("That is less than the dynamic number value.");
    console.log("That is less than the dynamic number value.");
} else if (numberValue === dynamicNumberValue) {
    alert("That is equal to the dynamic number value.");
    console.log("That is equal to the dynamic number value.");
} else if (numberValue > dynamicNumberValue) {
    alert("That is greater than the dynamic number value.");
    console.log("That is greater than the dynamic number value.")
} else {
    alert("Work with a number between 0 and 100 please.");
    console.log("Work with a number between 0 and 100 please.");
};

