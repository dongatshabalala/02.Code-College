"use strict";

/* Create a recursive function that counts up to 10.

   Invoke the function with different start numbers
   as the arguments that are passed into the function.

   The function should run until the value is greater than 10.
*/

/* Attempt 1 */

// let counter = [

// ];

// function recursiveFunction() {

//    for (let i = 0; i < 10; i++) {

//       counter.push(i); // Adds numbers from 0 to 9 in the counter array.

//    };

//    return counter; // Returns the filled counter array.

// };

// console.log(recursiveFunction()); // This logs the filled counter array.

/* Attempt 2 - Using Recursion */

function recursiveFunction(i) {

   console.log(i);

   if (i < 10) {

      return recursiveFunction(i + 1);

   };

   return;

};

recursiveFunction(0);