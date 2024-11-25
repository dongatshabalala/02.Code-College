"use strict";

/* Use the arrow format to create functions
   that output the values one and two to the console.

   Create a third function that outputs the value three to the console,
   and then invoke the first two functions.

   Create a fourth function that outputs the word four to the console
   and also use setTimeout() to invoke the first function immediately
   and then the third function.

   What does your output look like in the console?
*/

let arrowFunctionOne = () => console.log("one");

let arrowFunctionTwo = () => console.log("two");

let arrowFunctionThree = () => {

    console.log("three");

    arrowFunctionOne();

    arrowFunctionTwo();

};

let arrowFunctionFour = () => {

    console.log("four");

    setTimeout(arrowFunctionOne, 0);

    arrowFunctionThree();

};

arrowFunctionFour();