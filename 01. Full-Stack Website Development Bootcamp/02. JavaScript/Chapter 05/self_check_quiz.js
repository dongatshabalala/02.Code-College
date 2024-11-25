"use strict";

/* 1. What is the expected output for the following code? */

let step = 3;

for (let i = 0; i < 1000; i += step) {

   if (i > 10) {

      break;

   };

   console.log(i);

};

/* The step is 3. 
   This measures the amount by which the code increments or decrements.
   In this case, there is an increase of 3
   every time the loop is iterated.

   However, if the value of the initialism exceeds 10, the code breaks
   and all the values of i counted up till that point
   will be output to the browser console.

   In this case, those values will be as follows:
   0369
*/

/* 2. What is the final value for myArray,
      and what is expected in the console?
*/

/* I. The array myArray is initialised with three elements: 1, 5, and 7. */

/* II. Using a for in loop: */

/* The loop iterates over the indices of myArray.

   In JavaScript, when you use for in on the array,
   el will take on the string representation of each index.
   For myArray, the indices are o, 1, and 2.

*/

/* III. First Iteration (el = 0): */

/* console.log(Number(el)); will output 0
   (the index converted to a number).

   el = Number(el) + 5; will output 5.
*/

/* IV. Second Iteration (el = 1): */

/* console.log(Number(el)); will output 1.
   
   el = Number(el) + 5; changes el to 6.

   console.log(el); will output 6.

*/

/* V. Third Iteration (el = 2): */

/* console.log(Number(el)); will output 2.

   el = Number(el) + 5; changes el to 7.

   console.log(el); will output 7.

*/

/* VI. Final Output: */

/* After the loop, console.log(myArray);
   outputs [1, 5, 7].
   This is because modifying el inside the loop does not change
   the original array; el is just a variable representing the index.

   The output is as follows:
   051627
*/

/* Key Points: */

/* The for in loop iterates over the indices of the array, not the values.

   Changing el inside the loop does not affect myArray
   because el is just a copy of the index.

*/

const myArray = [

   1,
   5,
   7

];

let el;

for (el in myArray) {

   console.log(Number(el));

   el = Number(el) + 5;

   console.log(el);

};

console.log(myArray);

