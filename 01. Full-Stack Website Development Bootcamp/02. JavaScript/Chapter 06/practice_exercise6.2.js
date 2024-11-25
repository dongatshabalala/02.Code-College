"use strict";

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
