"use strict";

/* Construct an array as it loops through the incrementing values of x.
   Once the array is done, this exercise also will demonstrate
   several ways to output array contents.
*/

/* 1. Create an empty array. */

let emptyArray = [

];

/* 2. Run a loop 10 times,
      adding a new incrementing value to the array.
*/

for (let i = 0; i < 10; i++) {

    emptyArray.push(i + 1);

};

/* 3. Log the array into the console. */

console.log(emptyArray);

/* 4. Use the for loop to iterate through the array.
      Adjust the number of iterations
      to however many values are in your array.
      Output this into the console.
*/

for (let j = 0; j < emptyArray.length; j++) {

    console.log(emptyArray[j]);

};

/* 5. Use the for of loop to output the value 
      into the console from the array.
*/

for (let val of emptyArray) {

    console.log(val);

};
