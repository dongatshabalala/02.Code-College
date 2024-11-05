"use strict";

/* In this exercise, 
   we are experimenting with looping over objects and internal arrays.
*/

/* 1. Create a simple object with three items in it. */

let object = {
    item1: 1,
    item2: 2,
    item3: 3
};

/* 2. Using the for in loop, get the names of the properties
      and values from the object and output them into the console.
*/

for (let prop in object) {
    console.log(prop, object[prop]);
};

/* 3. Create an array containing the same three items.
      Using either the for loop or the for in loop,
      output the values from the array into the console.
*/

let array = [
    "item1",
    "item2",
    "item3"
];

/* Using the for loop. */

for (let i = 0; i < array.length; i++) {

    console.log(i, array[i]);

};

/* Using the for in loop. */

for (let value in array) {

    console.log(value, array[value]);

};

