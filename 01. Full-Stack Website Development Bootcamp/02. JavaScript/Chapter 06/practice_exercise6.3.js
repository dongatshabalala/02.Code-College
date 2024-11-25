"use strict";

/* Create a basic calculator that takes two numbers and one string value
   indicating an operation.

   If the operation equals add, the two numbers should be added.

   If the operation equals subtract, the two numbers should be subtracted
   from one another.

   If there is no option specified, the value of the option should be add.
*/

/* The result of this function needs to be logged.

   Test your function by invoking it
   with different operators and no operator specified.
*/

/* 1. Set up two variables containing number values. */

let num1 = 10;
let num2 = 12;

/* 2. Set up a variable to hold an operator, either + or -. */

let operator = "+";

/* 3. Create a function that retrieves the two values
      and the operator string value with a condition
      to check if the operator is + or -
      and add or subtract the values accordingly.

      Remember, if not presented with a valid operator,
      the function should default to addition.
*/

let x;
let y;
let z;

function retrieveValue(x, y, z) {

    if (z === "+") {

        console.log(x + y);

    } else {

        console.log(x - y);

    };

};

/* 4. Within console.log(), call the function using your variables
      and output the response to the console.
*/

retrieveValue(num1, num2, operator);

/* 5. Update the operator value to be the other operator type,
      either plus or minus, and call the function again
      with the new updated arguments.
*/

operator = "-";

function retrieveValue(x, y, z) {

    if (z === "+") {

        console.log(x + y);

    } else {

        console.log(x - y);

    };

};

retrieveValue(num1, num2, operator);

