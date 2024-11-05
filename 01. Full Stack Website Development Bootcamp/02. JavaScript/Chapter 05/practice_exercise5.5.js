"use strict";

let gridArray = [];

let cells = 64;

let counter = 0;

let row;

for (let i = 0; i < cells + 1; i++) {

    if (counter % 8 == 0) {

        if (row != undefined) {

            gridArray.push(row);
        }

        row = [];

    }

    counter++;

    let tempVariable = counter;

    row.push(tempVariable);

}

console.table(gridArray);

