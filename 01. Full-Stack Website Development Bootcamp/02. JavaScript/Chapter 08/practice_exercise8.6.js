"use strict";

/* Experiment with the Math object with these steps: */

/* 1. Output the value of PI into the console using Math. */

let piValue = Math.PI;

console.log(piValue);

/* 2. Using Math, get the ceil() value of 5.7,
      get the floor() value of 5.7,
      get the round() value of 5.7,
      and output it into the console.
*/

/* Get the ceil() value of 5.7
   and output it into the console. */

let ceilValue = Math.ceil(5.7);

console.log(ceilValue);

/* Get the floor() value of 5.7
   and output it into the console. */

let floorValue = Math.floor(5.7);

console.log(floorValue);

/* Get the round() value of 5.7
   and output it into the console. */

let roundValue = Math.round(5.7);

console.log(roundValue);

/* 3. Output a random value into the console. */

let randomValue = Math.random();

/* 4. Use Math.floor() and Math.random()
      to get a number from 0 to 10.
*/

let randomValue1 = Math.floor[Math.random()*10];

/* 5. Use Math.floor() and Math.random()
      to get a number from 1 to 10.
*/

let randomValue2 = Math.floor[Math.random()*10 + 1];

/* 6. Use Math.floor() and Math.random()
      to get a number from 1 to 100.
*/

let randomValue3 = Math.floor[Math.random()*100 + 1];

/* 7. Create a function to generate a random number
      using the parameters of min and max.

      Run that function 100 times, returning into the console
      a random number from 1 to 100 each time.
*/

let randomNumber = function (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

for (let i = 0; i < 100; i++) {

    console.log(randomNumber(1, 100));

};