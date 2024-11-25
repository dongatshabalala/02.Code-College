"use strict";

/* Create a countdown loop starting at a dynamic value of 10. */

/* 1. Set the start variable at a value of 10,
      which will be used as the starting value for the loop.
*/

let startVariable = 10;

/* 2. Create a function that takes one argument,
      which is the countdown value.
*/

/* ATTEMPT 1 */

// function countdown(count) {

/* 3. Within the function, output the current value of the countdown
      into the console.
*/

//       console.log(startVariable);

/* 4. Add a condition to check if the value is less than 1.

      If it is, then return the function.
*/

//       if (startVariable < 1) {

//             return countdown();

//       } else if (startVariable > 0) {

//             --startVariable;

//       } else {

//             countdown(--count);

//       };

// };

// countdown();

/* 5. Add a condition to check if the value of the countdown
      is not less than 1, then continue to loop
      by calling the function within itself.
*/

/* 6. Make sure you add a decrement operator on the countdown
      so the preceding condition eventually will be true to end the loop.

      Every time it loops, the value will decrease until it reaches 0.
*/

/* 7. Update and create a second countdown using a condition
      if the value is greater than 0.

      If it is, then it decreases the value of the countdown by 1.
*/

/* 8. Use return to return the function,
      which then invokes it again and again
      until the condition is no longer true.
*/

/* 9. Make sure when you send the new countdown value as an argument
      into the function that there is a way out of the loop
      by using the return keyword
      and a condition that continues the loop if met.
*/

/* ATTEMPT 2 */

/* 2. Create a function that takes one argument,
      which is the countdown value.
*/

function countdown(count) {

      /* 3. Within the function, output the current value of the countdown
            into the console.
      */

      console.log(count);

      /* 4. Add a condition to check if the value is less than 1.
      
            If it is, then return the function.
      */

      if (count < 1) {

            return;

      };

      /* 5. Add a condition to check if the value of the countdown
            is not less than 1, then continue to loop
            by calling the function within itself.
      */

      /* 6. Make sure you add a decrement operator on the countdown
            so the preceding condition eventually will be true to end the loop.
      
            Every time it loops, the value will decrease until it reaches 0.
      */

      return countdown(count - 1);

};

countdown(startVariable);

/* 7. Update and create a second countdown using a condition
      if the value is greater than 0.

      If it is, then it decreases the value of the countdown by 1.
*/

function secondCountdown(count) {

      console.log(count);

      if (count > 0) {

            count--;

            /* 8. Use return to return the function,
                  which then invokes it again and again
                  until the condition is no longer true.
            */

            return secondCountdown(count);

      };

      /* 9. Make sure when you send the new countdown value as an argument
            into the function that there is a way out of the loop
            by using the return keyword
            and a condition that continues the loop if met.
      */

      return;

};

secondCountdown(startVariable);
