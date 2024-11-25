"use strict";

let maxValue = 5;
let randomNumber = Math.floor(Math.random() * maxValue) + 1;

// console.log(randomNumber);

let answer = false;

while (!answer) {
    let guess = prompt("Provide a guess: 1 - " + maxValue + ":");
    guess = Number(guess);
    if (guess === randomNumber) {
        answer = true;
        console.log("Very good, you guessed: " + randomNumber + ".");
        break;
    } else if (guess > randomNumber) {
        console.log("Very high number there.");
        break;
    } else {
        console.log("Too low.");
        break;
    }
};

