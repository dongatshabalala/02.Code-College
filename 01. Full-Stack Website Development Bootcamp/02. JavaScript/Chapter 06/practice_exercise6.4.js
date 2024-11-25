"use strict";

/* Modify the calculator that you made in Practice exercise 6.2
   to return added values instead of printing them.

   Then, call the function 10 or more times in a loop,
   and store the results in an array.

   Once the loop finishes, output the final array
   into the console.
*/

/* Calculator from Practice exercise 6.2 */

/* Creating a program
   that will randomly describe an inputted name.
*/

/* 1. Create an array of descriptive words. */

let descriptiveWords = [

      "alpha",
      "bravo",
      "charlie",
      "delta",
      "echo"

];

/* 2. Create a function that contains a prompt
      asking the user for a name.
*/

function descriptiveFunction() {

      let name = prompt("Please give me a name.");

      /* 3. Select a random value from the array
            using Math.random.
      */

      let randomValue = descriptiveWords[

            Math.floor(Math.random() * descriptiveWords.length)

      ];

      /* 4. Output into the console the prompt value
            and the randomly selected array value.
      */

      console.log(`${name}, ${randomValue}`);

};

/* 5. Invoke the function. */

descriptiveFunction();

/* 1. Set up an empty array to store the values
      that will be calculated within the loop.
*/

let emptyArray = [

];

/* 2. Create a loop that runs 10 times,
      incrementing by 1 each time,
      creating two values each iteration.

      For the first value, multiply the value
      of the loop count by 5.

      For the second value, multiply the value
      of the loop counter by itself.
*/

for (let i = 0; i < 10; i++) {

      let value1 = i * 5;
      let value2 = i * i;

      let variable = calculationFunction(value1, value2);

      emptyArray.push(variable);

};

console.log(emptyArray);

function calculationFunction(value1, value2) {

      return value1 + value2;

};

/* 3. Create a function that returns the value of two parameters
      passed into the function when it is called.

      Add the values together, returning the result.
*/

/* 4. Within the loop, call the calculation function,
      passing in the two values as arguments into the function
      and storing the returned result in a response variable.
*/

/* 5. Still within the loop, push the result values into the array
      as it iterates through the loop.
*/

/* 6. After the loop is complete, output the value of the array
      into the console.
*/

/* 7. You should see the values 
      [0, 6, 14, 24, 36, 50, 66, 84, 104, 126]
      for the array in the console.
*/