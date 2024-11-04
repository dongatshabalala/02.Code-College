"use strict";

/* 1. What will be outputted to the console in this instance? */

// const q = '1';

// let answer;

// switch (q) {
//     case '1':
//         answer = "one";
//         break;
//     case 1:
//         answer = 1;
//         break;
//     case 2:
//         answer = "This is the one.";
//         break;
//     default:
//         answer = "Not working.";
// };

// console.log(answer);

/* ANSWER: The output will be: one. */

/* 2. What will be outputted to the console in this instance? */

// const q = 1;

// let answer;

// switch (q) {
//     case '1':
//         answer = "one";
//     case 1:
//         answer = 1;
//     case 2:
//         answer = "This is the one.";
//         break;
//     default:
//         answer = "Not working.";
// };

// console.log(answer);

/* ANSWER: The output will be: This is the one. */

/* 3. What will be outputted to the console in this instance? */

// let login = false;

// let outputHolder = "";

// let userOkay = login ? outputHolder = "logout" : outputHolder = "login";

// console.log(userOkay);

/* ANSWER: The output will be: login. */

/* 4. What will be outputted to the console in this instance? */

// const userNames = [
//     "Mike",
//     "John",
//     "Larry"
// ];

// const userInput = "John";

// let htmlOutput = "";

// if (userNames.indexOf(userInput) > -1) {

//     htmlOutput = "Welcome, that is a user.";

// } else {

//     htmlOutput = "Denied, not a user.";

// };

// console.log(`${htmlOutput} : ${userInput}.`);

/* ANSWER: The output will be: Welcome, that is a user. : John. */

/* 5. What will be outputted to the console in this instance? */

// let myTime = 9;

// let output;

// if (myTime >= 8 && myTime < 12) {

//     output = "Wake up, it is morning.";

// } else if (myTime >= 12 && myTime < 13) {

//     output = "Go to lunch.";

// } else if (myTime >= 13 && myTime <= 16) {

//     output = "Go to work.";

// } else if (myTime > 16 && myTime < 20) {

//     output = "Time to go to sleep.";

// } else {

//     output = "You should be sleeping.";

// };

// console.log(output);

/* ANSWER: The output will be: Wake up, it is morning. */

/* 6. What will be outputted to the console in this instance? */

// let a = 5;

// let b = 10;

// let c = 20;

// let d = 30;

// console.log(a > b || b > a);

// console.log(a > b && b > a);

// console.log(d > b || b > a);

// console.log(d > b && b > a);

/* ANSWER: The output will be:

I. a > b || b > a: true
II. a > b && b > a: false
III. d > b || b > a: true
IV. d > b && b > a: true */

/* 7. What will be outputted to the console in this instance? */

// let val = 100;

// let message = (val > 100) ? `${val} was GREATER than 100.` :
//     `${val} was LESS or EQUAL to 100.`;

// console.log(message);

// let check = (val % 2) ? `Odd` : `Even`;

// check = `${val} is ${check}`;

// console.log(check);

/* ANSWER: The output will be:

I. 100 was LESS or EQUAL to 100.
II. 100 is Even. */
