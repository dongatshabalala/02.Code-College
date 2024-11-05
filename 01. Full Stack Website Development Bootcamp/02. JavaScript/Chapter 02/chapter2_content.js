"use strict";

// VARIABLES

// firstname = "Maaike";
// x = 2;

// console.log(${firstname});


// firstname = "Edward";
// x = 7;

// // DECLARING VARIABLES

// let firstname = "Maria";
// firstname = "Jacky";

// // let, var, and const

// let nr1 = 12;
// var nr2 = 8;
// const PI = 3.14159;

// const someConstant = 3;
// someConstant = 4;

// /* someConstant does give you an error */

// let singleString = 'Hi there!';
// let doubleString = "How are you?";

// // let funActivity = 'Let's learn JavaScript';

// // THE ABOVE DOES NOT WORK WELL

// let funActivity = "Let's learn JavaScript";

// let question = "Do you want to learn JavaScript? "Yes!"";

// THE ABOVE DOES NOT WORK

let language = "JavaScript";
let message = `Let's learn ${language}`;

console.log(message);

/* let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);*/

// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);

let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);

// NUMBER

let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; // decimal version would be 8
let hexNr = 0x3E8; // decimal version would be 1000
let binNr = 0b101; // decimal version would be 5

let intNr2 = 3434;
let intNr3 = -111;

let decNr2 = 45.78;

let binNr2 = 0b100; // decimal version would be 4

// BIGINT

// let bigNr = 90071992547409920n;

// let result = bigNr + intNr;

// the above gives a TypeError message in the console of a browser

// BOOLEAN

let bool1 = false;
let bool2 = true;

let objectIsDeleted = false;

let lightIsOn = true;

// SYMBOL

// let str1 = "JavaScript is fun!";
// let str2 = "JavaScript is fun!";
// console.log("These two strings are the same:", str1 === str2);

/* the output for the above in the console is true */

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);

// UNDEFINED

let unassigned;
console.log(unassigned);

let terribleThingToDo = undefined;

// NULL

let empty = null;

let lastName;
console.log("Same undefined:", lastName === terribleThingToDo);

let betterOption = null;
console.log("Same null:", lastName === betterOption);

// WORKING OUT THE TYPE OF A VARIABLE

testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof (testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);

// let str = "Hello";
// let nr = 7;
// let bigNr = 12345678901234n;
// let bool = true;
// let sym = Symbol("unique");
// let undef = undefined;
// let unknown = null;

// console.log("str", typeof str);
// console.log("nr", typeof nr);
// console.log("bigNr", typeof bigNr);
// console.log("bool", typeof bool);
// console.log("sym", typeof sym);
// console.log("undef", typeof undef);
// console.log("unknown", typeof unknown);

// CONVERTING DATA TYPES

/*let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);

console.log(nr1 + nr2);*/

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);
/*let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);*/
/*let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);*/

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);
let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);

let strToNr2 = "hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);
let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + Number(nr2));

// ADDITION

// let nr1 = 12;
// let nr2 = 14;
// let result1 = nr1 + nr2;
// console.log(result1);

// let str1 = "Hello";
// let str2 = "addition";
// let result2 = str1 + str2;

// console.log(result2);

// SUBTRACTION

// let nr1 = 20;
// let nr2 = 4;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 - nr2;
// let result2 = str1 - nr3;
// console.log(result1, result2);

// MULTIPLICATION

// let nr1 = 15;
// let nr2 = 10;
// let str1 = "Hi";
// let nr3 = 3;
// let result1 = nr1 * nr2;
// let result2 = str1 * nr3;
// console.log(result1, result2);

// DIVISION

// let nr1 = 30;
// let nr2 = 5;
// let result1 = nr1 / nr2;
// console.log(result1);

// EXPONENTIATION

// let nr1 = 2;
// let nr2 = 3;
// let result1 = nr1 ** nr2;
// console.log(result1);

// MODULUS

// let nr1 = 10;
// let nr2 = 3;
// let result1 = nr1 % nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);
// let nr3 = 8;
// let nr4 = 2;
// let result2 = nr3 % nr4;
// console.log(`${nr3} % ${nr4} = ${result2}`);
// let nr5 = 15;
// let nr6 = 4;
// let result3 = nr5 % nr6;
// console.log(`${nr5} % ${nr6} = ${result3}`);

// UNARY OPERATORS: INCREMENT AND DECREMENT

// let nr1 = 4;
// nr1++;
// console.log(nr1);
// let nr2 = 4;
// nr2--;
// console.log(nr2);

// PREFIX AND POSTFIX OPERATORS

// let nr = 2;
// console.log(nr++);
// console.log(nr);

// let nr = 2;
// console.log(++nr);

// let nr1 = 4;
// let nr2 = 5;
// let nr3 = 2;
// console.log(nr1++ + ++nr2 * nr3++);

// ASSIGNMENT OPERATORS

// let x = 2;

// x += 2;

// x -= 2;

// x *= 6;

// x /= 3;

// x **= 2;

// x %= 3;

// console.log(x);

// COMPARISON OPERATORS

// EQUAL

// let x = 5;
// let y = "5";
// console.log(x == y);

// console.log(x === y);

// NOT EQUAL

// let x = 5;
// let y = "5";
// console.log(x != y);

// console.log(x !== y);

// GREATER THAN AND SMALLER THAN

// let x = 5;
// let y = 6;

// console.log(y > x);

// console.log(x > y);

// console.log(y > y);

// console.log(y >= y);

// console.log(y < x);

// console.log(x < y);

// console.log(y < y);

// console.log(y <= y);

// AND

// let x = 1;
// let y = 2;
// let z = 3;

// console.log(x < y && y < z);

// console.log(x > y && y < z);

// OR

// console.log(x > y || y < z);

// console.log(x > y || y > z);

// NOT

// let x = false;
// console.log(!x);

let x = 1;
let y = 2;
console.log(!(x < y));


