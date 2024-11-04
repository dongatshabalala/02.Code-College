"use strict";

/* Mathematics Multiplication Table */

/* Create a math multiplication table using loops.

This can be done using creativity. 

Alternatively, follow the following steps: */

/* 1. Set up a blank array to contain
the final multiplication table. */

let mathTable = [

];

/* 2. Set a value variable to specify how many values
you want to multiply with one another and show the results for. */

let value = 5;

/* 3. Create an outer for loop to iterate through each row
and a temp array to store the row values.

Each row will be an array of cells that will be nested
into the final table. */

/* 4. Add an inner for loop for the column values,
which will push the multiplied row and column values
to the temp array. */

outer:

for (let i = 0; i < value; i++) {

    let temp = [

    ];

    inner:

    for (let j = 0; j < value; j++) {

        temp.push(i * j);

    };

    mathTable.push(temp);

};

console.table(mathTable);























