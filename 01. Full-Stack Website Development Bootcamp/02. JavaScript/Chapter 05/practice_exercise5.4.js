"use strict";

let myTable = [];

let rows = 6;

let columns = 5;

let counter = 0;

for (let i = 0; i < rows; i++) {

    let tempTable = [];

    for (let j = 0; j < columns; j++) {

        counter++;

        tempTable.push(counter);

    }

    myTable.push(tempTable);

}

console.table(myTable);

