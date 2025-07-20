"use stript";

/* 1. Which method will decode the following? */

var c = "http://www.google.com?id=1000&n=500";
var e = encodeURIComponent(c);

/* a. decodeURIComponent(e)

   b. e.decodeUriComponent()

   c. decoderURIComponent(c)

   d. decoderURIComponent(e)
*/

/* Answer: a */

/* Explanation: */

/* The string e was encoded using encodeURIComponent(),
   so to decode it correctly, you need to use 
   the corresponding decode method:

   decodeURIComponent(e) will decode it back 
   to its original value.
   
   Options b, c, and d either don’t exist 
   or are invalid JavaScript.
*/

/* 2. What will be output into the console
      from the following syntax?
*/

// const arr = [
//              "hi", 
//              "world", 
//              "hello", 
//              "hii", 
//              "hi", 
//              "hi World", 
//              "Hi"
//             ];

// console.log(arr.lastIndexOf("hi"));

/* Answer: 4 */

/* Explanation: */

/* lastIndexOf("hi") returns the last occurrence
   of the exact "hi" string in the array.
   
   Looking at the array:

   "hi" appears at index 0 and 4.

   The last occurrence is at index 4.
*/

/* 3. What is the result of the below code in the console? */

// const arr = [
//              "Hi", 
//              "world", 
//              "hello", 
//              "Hii", 
//              "hi", 
//              "hi World", 
//              "Hi"
//             ];

// arr.copyWithin(0, 3, 5);

// console.log(arr);

/* Answer: */

// [
//     "Hii", 
//     "hi", 
//     "hello", 
//     "Hii", 
//     "hi", 
//     "hi World", 
//     "Hi"
// ];

/* Explanation: */

/* .copyWithin(0, 3, 5) means:

    Copy elements from index 3 to 5 (not including 5):
    ["Hii", "hi"]

    Paste them starting at index 0.
    
    So, arr becomes:
    
    [
     "Hii", 
     "hi", 
     "hello", 
     "Hii", 
     "hi", 
     "hi World", 
     "Hi"
     ];
*/

/* 4. What is the result of the below code in the console? */

// const arr = [
//              "Hi", 
//              "world", 
//              "hello", 
//              "Hii", 
//              "hi", 
//              "hi World", 
//              "Hi"
//             ];

// const arr2 = arr.filter((element, index) => {

//   const ele2 = element.substring(0, 2);

//   return (ele2 == "hi");

// });

// console.log(arr2);

/* Answer: */

// ["hi", "hi World"]

/* Explanation: */

/* The filter keeps elements 
   where element.substring(0, 2) == "hi".
   
   It’s case-sensitive, so:

    "hi"

    "hi World"

    "Hi", "Hii"
    
    Result:
    
    ["hi", "hi World"]
*/
