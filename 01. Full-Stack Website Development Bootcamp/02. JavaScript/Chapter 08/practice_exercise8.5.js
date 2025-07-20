"use strict";

/* Using the replace() string method,
   complete this vowel replacer exercise
   by replacing the vowels in a string with numbers.

   You can starts with this string:

   "I love JavaScript"

   And turn it into something like the following:

   "2 13v1 j0v0scr2pt"
*/

/* Take the Following Steps: */

/* 1. Create the previously specified string,
      and convert it to lowercase.
*/

let specificString = "I love JavaScript";

specificString = specificString.toLowerCase();

/* 2. Create an array containing the vowels: a, e, i, o, u. */

let vowelArray = [

    "a", "e", "i", "o", "u"

];

/* 3. Loop through each letter you have in the array,
      and output the current letter into the console
      so that you can see which letter will be converted.
*/

vowelArray.forEach((letter, index) => {

    console.log(letter);

    /* 4. Within the loop, using replaceAll()
          update each vowel substring 
          with the index value of the letter
          from the vowel array.
    */

    specificString = specificString.replaceAll(letter, index);

});

/* 5. Once the loop completes, output the result
      of the new string into the console.
*/

console.log(specificString);