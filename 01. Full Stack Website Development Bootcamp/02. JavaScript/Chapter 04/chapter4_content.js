"use strict";

// IF AND IF ELSE STATEMENTS

// let rain = true;

// if (rain) {
//     console.log("Taking my umbrella when I need to go outside.");
// } else {
//     console.log("I can leave my umbrella at home.");
// };

// let age = prompt("Please provide your age:");

// if (age < 18) {
//     console.log("We're very sorry, but you can't get in under 18.");
// } else {
//     console.log("Welcome!");
// };

// ELSE IF STATEMENTS

/* Determine what the ticket price should be.
If a person is younger than 3, then access is free,
else if a person is older than 3 and younger than 12,
then access is 5 dollars, else if a person is older than 12
and younger than 65, then access is 10 dollars,
else if a person is 65 or older, then access is 7 dollars. */

// let age = prompt("Provide your age please.");

// let cost = 0;

// let message;

// if (age < 3) {
//     cost = 0;
//     message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars.";
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message = "A ticket is 7 dollars.";
// };

// console.log(message);

// console.log(`Your Total Cost: ${cost} Dollars`);

// CONDITIONAL TERNARY OPERATORS

// operand1 ? operand2 : operand3;

// expression ? statement for true : statement associated with false;

// let access = age < 18 ? "denied" : "allowed";

// age < 18 ? console.log("denied") : console.log("allowed");

// SWITCH STATEMENTS

if (activity === "Get up.") {
    console.log("It is 6:30AM.");
} else if (activity === "Breakfast.") {
    console.log("It is 7:00AM.");
} else if (activity === "Drive to work.") {
    console.log("It is 8:00AM.");
} else if (activity === "Lunch.") {
    console.log("It is 12:00PM.");
} else if (activity === "Drive home.") {
    console.log("It is 5:00PM.");
} else if (activity === "Dinner.") {
    console.log("It is 6:30PM.");
};

switch (activity) {
    case "Get up":
        console.log("It is 6:30AM.");
        break;
    case "Breakfast":
        console.log("It is 7:00AM.");
        break;
    case "Drive to work":
        console.log("It is 8:00AM.");
        break;
    case "Lunch":
        console.log("It is 12:00PM.");
        break;
    case "Drive home":
        console.log("It is 5:00PM.");
        break;
    case "Dinner":
        console.log("It is 6:30PM.");
        break;
    default:
        console.log("I cannot determine the current time.");
        break;
};

// COMBINING CASES

switch (grade) {
    case "F":
    case "D":
        console.log("You've failed!");
        break;
    case "C":
    case "B":
        console.log("You've passed!");
        break;
    case "A":
        console.log("Nice!");
        break;
    default:
        console.log("I don't know this grade.");
};

if (grade === "F" || grade === "D") {
    console.log("You've failed!");
} else if (grade === "C" || grade === "D") {
    console.log("You've passed!");
} else if (grade === "A") {
    console.log("Nice!");
} else {
    console.log("I don't know this grade.");
};

