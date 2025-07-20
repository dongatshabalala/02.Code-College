"use strict";

/* Using string manipulation, create a function
   that will return a string with the first letter 
   of all the words capitalised
   and the rest of the letters in lowercase.

   You should transform the sentence 
   "thIs will be capiTalised for each word"
   into "This Will Be Capitalised For Each Word."
*/

/* 1. Create a string with several words that have letters
      with different cases, a mix of upper
      and lowercase words.
*/

let string = "thIs will be capiTalised for each word";

/* 2. Create a function that gets a string as an argument,
      which will be the value that will be manipulated.
*/

let newString = function stringFunction(string) {

    /* 3. In the function, first transform everything
          to lowercase letters.
    */

    string = string.toLowerCase();

    /* 4. Create an empty array that can hold the values
          of the words when we capitalise them.
    */

    let emptyArray = [];

    /* 5. Convert the phrase into words in an array
          using the split() method.
    */

    let words = string.split(" ");

    /* 6. Loop through each one of the words
          that are now in the new array,
          so you can select one independently.

          forEach() can be used for this.
    */

    words.forEach(word => {

    /* 7. Using slice() isolate the first letter in each word,
          then transform it to uppercase.

          Again, using slice(), get the remaining value of the word
          without including the first letter.

          Then concatenate the two together
          to form the world that is now capitalised.
    */

    let letterChange = word.slice(0, 1).toUpperCase() + word.slice(1);

    /* 8. Add the new capitalised word into the blank array
          that you created.

          By the end of the loop, you should have an array
          with all the words as separate items in the new array.
    */

    emptyArray.push(letterChange);

    });

    /* 9. Take the array of updated words
          and using the join() method,
          transform them back into a string
          with spaces between each word.
    */

    return emptyArray.join(" ");

};

/* 10. Return the value of the newly-updated string
       with capitalised words that can then be output
       into the console.
*/

console.log(newString(string));