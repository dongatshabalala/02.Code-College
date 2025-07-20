"use strict";

/* Output the decodeURIComponent() for the string
   How's%20it%20going%3F to the console.

   Also, encode the string How's it going? 
   to be output into the console.
*/

/* Create a web URL and encode the URI: */

/* 1. Add the strings as variables in the JavaScript code. */

let string1 = "How's it going?";

let string2 = "How's%20it%20going%3F";

/* 2. Using encodeURIComponent() and decodeURIComponent(),
      output the results into the console.
*/

let encoded_uri = encodeURIComponent(string1);

let decoded_uri = decodeURIComponent(string2);

console.log(encoded_uri);

console.log(decoded_uri);

/* 3. Create a web URI with request parameters
      http://www.basescripts.com?=Hello World";
*/

let code = "http://www.basescripts.com?=Hello World";

/* 4. Encode and output the web URI into the console. */

encoded_uri = encodeURIComponent(code);

console.log(encoded_uri);
