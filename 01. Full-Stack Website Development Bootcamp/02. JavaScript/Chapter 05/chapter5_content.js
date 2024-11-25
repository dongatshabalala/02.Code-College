"use script";

/* WHILE LOOPS */

/* while (condition) {

    code that gets executed as long as the condition is true

} */

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// };

// let someArray = [
//     "Mike",
//     "Antal",
//     "Marc",
//     "Emir",
//     "Louiza",
//     "Jacky"
// ];

// let notFound = true;

// while (notFound && someArray.length > 0) {

//     if (someArray[0] === "Louiza") {
//         console.log("Found her!");
//         notFound = false;
//     } else {
//         someArray.shift();
//     };

// };

// let nr1 = 0;

// let nr2 = 1;

// let temp;

// let fibonacciArray;

// fibonacciArray = [];

// while (fibonacciArray.length < 25) {

//     fibonacciArray.push(nr1);
//     temp = nr1 + nr2;
//     nr1 = nr2;
//     nr2 = temp;

// };

// console.log(fibonacciArray);

/* DO WHILE LOOPS */

/* do {

    // code to be executed if the condition is true

} while (condition); */

// let number;

// let promptInput = "Please enter a number between 0 and 100: ";

// do {

//     number = prompt("Please enter a number between 0 and 100: ");

//     promptInput += number;

//     // break;

// } while (!(number >= 0 && number < 100));

// console.log(promptInput);

/* FOR LOOPS */

/* for (initialise variable; condition; statement) {

    // code to be executed

}; */

// for (let i = 0; i < 10; i++) {

//     console.log(i);

// };

// let arr = [];

// for (let i = 0; i < 100; i++) {

//     arr.push(i);

// };

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 100; i += 2) {

//     arr.push(i);

// };

// console.log(arr);

/* NESTED LOOPS */

/* while (condition 1) {

    code that gets executed as long as condition 1 is true
    this loop depends on condition 1 being true

    while (condition 2) {

        code that gets executed as long as condition 2 is true

    }

}; */

// let arrOfArrays = [];

// for (let i = 0; i < 3; i++) {

//     arrOfArrays.push([]);

//     for (let j = 0; j < 7; j++) {

//         arrOfArrays[i].push(j);

//     };

// };

// console.log(arrOfArrays);

// console.table(arrOfArrays);

/* LOOPS AND ARRAYS */

/* let arr = [some array];

for (initialise variable; variable smaller than arr.length; statement) {

    // code to be executed

}; */

// let names;

// names = [

//     "Chantal",
//     "John",
//     "Maxime",
//     "Bobbi",
//     "Jair"

// ];

// for (let i = 0; i < names.length; i++) {

//     console.log(name[i]);

// };

// let names = [

//     "Chantal",
//     "John",
//     "Maxime",
//     "Bobbi",
//     "Jair"

// ];

// for (let i = 0; i < names.length; i++) {

//     names[i] = "hello " + names[i];

// };

// let names = [

//     "Chantal",
//     "John",
//     "Maxime",
//     "Bobbi",
//     "Jair"

// ];

// for (let i = 0; i < names.length; i++) {

//     if (names[i].startsWith("M")) {

//         delete names[i];

//         continue;
//     }

//     names[i] = "hello " + names[i];

// };

// console.log(names);

// let names = [

//     "Chantal",
//     "John",
//     "Maxime",
//     "Bobbi",
//     "Jair"

// ];

// for (let i = 0; i < names.length; i++) {

//     names.push("...");

// };

// console.log(names);

/* The program gets stuck in an infinite loop.
Since a value gets added every iteration, the length of the loop
grows with every iteration and i will never be bigger than 
or equal to length. */

/* FOR OF LOOP */

/* let arr = [

    some array

];

for (let variableName of arr) {

    // code to be executed
    // value of variableName gets updated every iteration
    // all values of the array will be variableName once

}; */

/* let names = [

    "Chantal",
    "John",
    "Maxime",
    "Bobbi",
    "Jair"

];

for (let name of names) {

    console.log(name);

}; */

/* Loops and Objects */

/* for in loop */

/* let car = {

    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    colour: black

}; */

/* for (let prop in car) {

    console.log(car[prop]);

}; */

/* Looping Over Objects by Converting an Array */

let car = {

    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    colour: "black"

};

/* let arrKeys = Object.keys(car);

console.log(arrKeys);

*/

for (let key of Object.keys(car)) {

    console.log(key);

};

for (let key of Object.values(car)) {

    console.log(key);

};

let arrKeys = Object.keys(car);

for (let i = 0; i < arrKeys.length; i++) {

    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);

};

let arrEntries = Object.entries(car);

console.log(arrEntries);

for (const [key, value] of Object.entries(car)) {

    console.log(key, ":", value);

};

/* Break and Continue */

let cars = [

    {

        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        colour: "black"

    },

    {

        model: "Picanto",
        make: "Kia",
        year: 2020,
        colour: "black"

    },

    {

        model: "Peugeot",
        make: "208",
        year: 2021,
        colour: "black"

    },

    {

        model: "Fiat",
        make: "Punto",
        year: 2020,
        colour: "black"

    }

];

/* Break */

for (let i = 0; i < 10; i++) {

    console.log(i);

    if (i === 4) {

        break;

    };

};

for (let i = 0; i < cars.length; i++) {

    if (cars[i].year >= 2020) {

        if (cars[i].colour === "black") {

            console.log("I have found my new car:", cars[i]);
            break;

        };

    };

};

let superLongArray;

superLongArray = [

];

while (true) {

    if (superLongArray[0] != 42 && superLongArray.length > 0) {

        superLongArray.shift();

    } else {

        console.log("Found 42!");
        break;

    };

};

while (superLongArray.length > 0 && notFound) {

    if (superLongArray[0] != 42) {

        superLongArray.shift();

    } else {

        console.log("Found 42!");
        notFound = false;

    };

};

/* Continue */

/* break can be used to quit the loop,
   and continue can be used to move on
   to the next iteration of the loop.

   It quits the current iteration and moves back up
   to check the condition and start a new iteration.
*/

/* Example of Continue */

for (let car of cars) {

    if (car.colour !== "black") {

        continue;

    };

    if (car.year >= 2020) {

        console.log("We could get this one:", car);

    };

};

/* Be careful with continue in a while loop. */

/* Let us only log the odd numbers to the console. */

// let i = 1;

// while (i < 50) {

//     if (i % 2 === 0) {

//         continue;

//     };

//     console.log(i);
//     i++;

// };

/* The above piece of code logs 1
   and then gets you stuck in an infinite loop
   because continue gets hit
   before the value of i changes,
   so it will run into continue again, and again, and so on.
   This can be fixed by moving the i++ up and subtracting 1 from i.
   An example of this is as follows:
*/

let i = 1;

while (i < 50) {

    i++;

    if ((i - 1) % 2 === 0) {

        continue;

    };

    console.log(i - 1);

};

/* There is a better way without continue.
   The chance of error is a lot smaller:
*/

for (let i = 1; i < 50; i = i + 2) {

    console.log(i);

};

/* The value of break and continue comes in
   when you are looping over large data sets,
   possibly coming from outside your application.
*/

/* Break, Continue, and Nested Loops */

/* Break and continue can be used in nested loops as well.
   It is important to know that when break or continue
   is used in a nested loop, the outer loop will not break.
*/

let groups = [

    [
        "Martin",
        "Daniel",
        "Keith"
    ],

    [
        "Margot",
        "Marina",
        "Ali"
    ],

    [
        "Helen",
        "Jonah",
        "Sambikos"
    ]

];

/* In the above array of arrays, we are looking for all the groups
   that have two names starting with an M.
   If we find such a group, we will log it.
*/

for (let i = 0; i < groups.length; i++) {

    let matches = 0;

    for (let j = 0; j < groups[i].length; j++) {

        if (groups[i][j].startsWith("M")) {

            matches++;

        } else {

            continue;

        };

        if (matches === 2) {

            console.log("Found a group with two names starting with an M.");

            console.log(groups[i]);

            break;

        };

    };

};

/* We first loop over the top-level arrays
   and set a counter, matches, with a start value of 0.

   For each of the top-level arrays,
   we are going to loop over the values.

   When a value starts with an M, we increase matches by one
   and check whether we have found two matches already.

   If we find two Ms, we break out of the inner loop
   and continue in our outer loop.
   This one will move on to the next top-level array,
   since nothing is happening after the inner loop.

   If the name does not start with an M,
   we do not need to check for matches being 2,
   and we can continue to the next value in the inner array.
*/

for (let group of groups) {

    for (let member of group) {

        if (member.startsWith("M")) {

            console.log("Found one starting with M:", member);

            break;

        };

    };

};

/* The above piece of code loops over the arrays.
   For every array, it checks the value to see if it starts with an M.
   If it does start with an M, the inner loop will break.

   If one of the arrays in the array contains multiple values
   starting with M, only the first one will be found,
   since the iteration over that array breaks
   and we continue to the next array.
*/

/* The loop finds Margot, the first one from the second array,
   but it skips Marina, because it is the second one in the array.
   It breaks after having found one group, so it will not loop
   over the other elements in the inner array.
   It will continue with the next array, which does not contain names
   starting with an M.
*/

/* If we wanted to find groups that have a member with a name
   that starts with an M, the previous code snippet
   would have been the way to go,
   because we are breaking the inner loop as soon as we find a hit.
   This can be useful whenever you want to make sure
   that an array in a dataset contains at least one of something.
   
   Because of the nature of the nature of the for of loop.
   it will not give the index or place where we found it.
   It will break, and you will have the value
   of the element of the array to use.
   If you need to know more, you can work with counters,
   which are updated every iteration.

   If we want to see whether only one of all the names in the array of arrays
   starts with an M, we would have to break out of the outer loop.
   This is something that can be done with labeled loops.
*/

/* Break and Continue and Labeled Blocks */

/* We can break out of the outer loop from inside the inner loop,
   but only if we give a label to our loop.
*/

outer:

for (let group of groups) {

    inner:

    for (let member of group) {

        if (member.startsWith("M")) {

            console.log("Found one starting with M:", member);

            break outer;

        };

    };

};

/* We are giving our block a label by putting a word and a colon
   in front of a code block.
   These words can be pretty much anything, but not JavaScript reserved words
   such as for, if, break, else, and others.
*/

/* The code logs one output from the array
   because it is breaking out of the outer loop
   and all the loops end as soon as they find one.

   In a similar fashion, you can continue the outer loop as well.

   Whenever you want to be done as soon as you find one hit,
   this is the option to use.
   If you want to check for errors and quit
   if there are none, this would be the way to go.
*/
