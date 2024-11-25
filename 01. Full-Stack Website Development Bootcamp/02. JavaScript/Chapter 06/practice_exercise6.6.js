"use strict";

/* Calculating the Factorial */

/* The factorial of a number is the product
   of all positive integers bigger than 0,
   up to the number itself.

   EXAMPLE: The factorial of seven is 7*6*5*4*3*2*1. 
            This can be written as 7!
*/

/* We are going to call the function with a lower number
   until we reach 0.

   We will use recursion to calculate the factorial result
   of a numeric value set as the argument of a function.
*/

/* 1. Create a function that contains a condition within it
      checking if the argument value is 0.
*/

function argumentCheck(number) {

    if (number === 0) {

        return 1;

    } else {

        return number * argumentCheck(--number);

    };

};

console.log(argumentCheck(10));

/* 2. If the parameter is equal to 0, it should return the value of 1.

      Otherwise, it should return the value of the argument
      multiplied by the value returned from the function itself,
      subtracting one from the value of the argument that is provided.

      This will result in running the block of code 
      until the value reaches 0.
*/

/* 3. Invoke the function, providing an argument
      of whatever number you want to find the factorial of.

      The code should run whatever number is passed initially
      into the function, decreasing all the way to 0
      and outputting the results of the calculation to the console.
*/

/* 4. Change and update the number to see how it affects the results. */