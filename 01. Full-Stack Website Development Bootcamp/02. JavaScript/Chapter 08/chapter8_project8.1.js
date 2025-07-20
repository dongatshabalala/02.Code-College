"use strict";

/* Create a function that returns a value of a word
   and scrambles the letter order with Math.random():
*/

/* 1. Create a string 
      that will hold a word value of your choice.
*/

let wordValue = "Word";

/* 2. Create a function 
      that can intake a parameter of the string word value.
*/

function scrambleWordValue(value) {

    /* 3. Just like an array,
          strings also have a length by default.

          You can use this length
          to set the loop maximum value.

          You will need to create a separate variable
          to hold this value
          as the length of the string will be decreasing
          as the loop continues.
    */

    let maxValue = value.length;

    /* 4. Create an empty temporary string variable
          that you can use
          to hold the new scrambled word value.
    */

    let tempVariable = "";

    /* 5. Create a for loop that will iterate the number
          of letters within the string parameter
          starting at 0 and iterating until 
          the original length value of the string is reached.
    */

    for (let i = 0; i < maxValue; i++) {

        /* 6. Create a variable
              that will randomly select one letter
              using its index value
              with Math.floor() and Math.random()
              multiplied by the current length
              of the string.
        */

        let indexValue = Math.floor(Math.random() * value.length);

        /* 7. Add the new letter to the new string
              and remove it from the original string.
        */

        tempVariable += value[indexValue];

        /* 8. Using console.log(),
              output the newly constructed string
              from the random letters
              and output to the console
              both the original string
              and the new one as the loop continues.
        */

        console.log(tempVariable);

        /* 9. Update the original string
              by selecting the substring from the index value
              and adding it to the remaining string value
              from the index plus one onward.

              Output the new original string value
              with the removed characters.
        */

        value = value.substr(0, indexValue) + value.substr(indexValue + 1);


        /* 10. As you loop through the content,
               you will see a countdown
               of the remaining letters,
               the new scrambled version of the word
               as it is built,
               and the decreasing letters
               in the original word.
        */

        console.log(value);

    };


    /* 11. Return the final result and invoke the function
           with the original string word
           as an argument.

           Output this to the console.
    */

    return tempVariable;

};

console.log(scrambleWordValue(wordValue));
