"use strict";

/* Using the array map() method,
   update the contents of an array.

   Take the following steps:
*/

/* 1. Create an array of numbers. */

let numberArray = [

    1,
    2,
    3,
    4,
    5

];

/* 2. Using the array map method and an anonymous function,
      return an updated array,
      multiplying all the numbers in the array by 2.

      Output the result into the console.
*/

let updatedArray = numberArray.map(function(number) {

    return number * 2;

});

console.log(updatedArray);

/* 3. As an alternative method, use the arrow function format
      to multiply each element of the array by 2
      with the array map() method in one line of code.
*/

let secondArray = numberArray.map((number) => number*2);

/* 4. Log the result onto the console. */

console.log(secondArray);