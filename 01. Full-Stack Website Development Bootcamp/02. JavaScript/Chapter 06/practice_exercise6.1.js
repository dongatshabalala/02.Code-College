"use strict";

/* Write a function that adds two numbers. */

/* 1. Create a function that takes two parameters,
      adds the parameters together, and returns the result.
*/

/* 2. Set up two different variables with two different values. */

let sum;

let num1 = 5;

let num2 = 6;

/* 3. Use your function on the two variables,
      and output the result using console.log.
*/

function adderFunction(n, v) {

    sum = n + v;
    console.log(sum);

};

/* 4. Create a second call to the function
      using two more numbers as arguments sent to the function.
*/

adderFunction(num1, num2);

adderFunction(6, 10);
