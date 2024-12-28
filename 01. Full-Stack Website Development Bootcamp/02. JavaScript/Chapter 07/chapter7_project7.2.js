"use strict";

/* Create a class which will allow you
   to work out the combined price of a number of items,
   and interact with it 
   to work out the total cost of different orders.
*/

/* 1. Create a class that contains the prices of two menu items
      as private field declarations.
*/

class itemPrice {

    #item1 = 55;

    #item2 = 47;

/* 2. Use the constructor in the class
      to get the argument values (how many of each item
      are being bought).
*/

    constructor(value1, value2) {

        this.value1 = value1;

        this.value2 = value2;

    };

/* 3. Create a method to calculate and return the total cost
      depending on how many of each item the user selects.
*/

    total() {

        return (this.value1 * this.#item1) + (this.value2 * this.#item2);

    };

/* 4. Use a getter property to grab the value output
      by the calculation method.
*/

    get totalAmount() {

        return this.total();

    };

};

/* 5. Create two or three objects with different combinations
      of menu selections,
      and input the total cost in the console.
*/

var selection1 = new itemPrice(5,0);

var selection2 = new itemPrice(4,1);

console.log(selection1.totalAmount);

console.log(selection2.totalAmount);
