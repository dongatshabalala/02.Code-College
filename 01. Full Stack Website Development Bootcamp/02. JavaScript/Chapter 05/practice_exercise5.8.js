/* This exercise will demonstrate how to create a string
   with all the digits as it loops through them.
   We can also set a value to skip by adding a condition
   that will use continue, skipping the matching condition.
   A second option is to do the same exercise
   and use the break keyword.
*/

/* 1. Set up a string variable to use as output. */

let outPut = "";

/* 2. Select a number to skip, and set that number as a variable. */

let skipVariable = 5;

/* 3. Create a for loop that counts to 10. */

// for (let i = 0; i < 10; i++) {

//     /* 4. Add a condition to check if the value of the looped variable
//           is equal to the number that should be skipped.
//     */

//     /* 5. If the number is to be skipped in the condition,
//           continue to the next number.
//     */

//     if (i === skipVariable) {
//         continue;
//     }

//     /* 6. As you iterate through the values, append the new count value
//           to the end of the main output variable.
//     */

//     outPut = outPut + i;

// };

// /* 7. Output the main variable after the loop completes. */

// console.log(outPut);

/* 8. Reuse the code, but change the continue to break and see the difference.
      It should now stop at the skip value.
*/

for (let i = 0; i < 10; i++) {

   if (i === skipVariable) {

      // break;
      continue;

   };

   outPut = outPut + i;

};

console.log(outPut);

/* Skip value 5, is the 4th number
   starting from the first index being 0.
*/

/* Adding break stops the code at the skip value. */