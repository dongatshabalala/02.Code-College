"use strict";

// let arr = [
//     "hi there",
//     5,
//     true
// ];

// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

// const arr = ["hi there"];
// arr[0] = "new value";
// console.log(arr[0]);

// arr = ["nope, now you are overwriting the array"];

/* THE ABOVE RESULTS IN AN ERROR MESSAGE APPEARING
IN THE BROWSER CONSOLE */

// ACCESSING ELEMENTS

// let cars;

// cars = [
//     "Toyota",
//     "Renault",
//     "Volkswagen"
// ];

// console.log(cars[0]);

// console.log(cars[1]);

// console.log(cars[2]);

// console.log(cars[3]);

/* THE ABOVE IS UNDEFINED,
THE ARRAY HAS THREE ELEMENTS, NOT FOUR. */

// console.log(cars[-1]);

/* THE ABOVE IS IMPOSSIBLE,
IT IS STILL LOGGED AS UNDEFINED HOWEVER. */

// cars[0] = "Tesla";

// console.log(cars[0]);

// console.log(cars);

// cars[3] = "Kia";

// cars[-1] = "Fiat";

// console.log(cars[3]);

// console.log(cars[-1]);

/* LINES 54 TO 60 DO DISPLAY RESULTS
IN THE CONSOLE THAT SHOW NO ERRORS.
THIS DOES NOT MEAN THAT THE CODE IS CORRECT.
THERE ARE MORE ACCURATE METHODS TO THIS PROCESS. */

// BUILT-IN LENGTH PROPERTY

// let colours;

// colours = [
//     "black",
//     "orange",
//     "pink"
// ];

// let booleans;

// booleans = [
//     true,
//     false,
//     false,
//     true
// ];

// let emptyArray = [

// ];

// console.log("Length of colours:", colours.length);
// console.log("Length of booleans:", booleans.length);
// console.log("Length of empty array:", emptyArray.length);

// let lastElement;

// lastElement = colours[colours.length - 1];

// let numbers;

// numbers = [
//     12,
//     24,
//     36
// ];

// numbers[5] = 48;

// console.log(numbers.length);

// console.log("numbers", numbers);

// ADDING AND REPLACING ELEMENTS

// let favouriteFruits = [
//     "grapefruit",
//     "orange",
//     "lemon"
// ];

// favouriteFruits.push("tangerine");

/* HOW YOU ADD ELEMENTS TO THE ARRAY. */

// let lengthOfFavouriteFruits = favouriteFruits.push("lime");

// console.log(favouriteFruits);

// let arrOfShapes = [
//     "circle",
//     "triangle",
//     "rectangle",
//     "pentagon"
// ];

// arrOfShapes.splice(2, 0, "square", "trapezoid");

// console.log(arrOfShapes);

// arrOfShapes.splice(2, 2, "square", "trapezoid");

// console.log(arrOfShapes);

/* IF YOU WERE TO INCREASE THE SECOND PARAMETER
TO A NUMBER HIGHER THAN THE ARRAY, IT WOULD NOT AFFECT
THE RESULT AS JAVASCRIPT WOULD SIMPLY STOP AS SOON
AS IT RUNS OUT OF VALUES TO DELETE */

// arrOfShapes.splice(2, 12, "square", "trapezoid");

// let arr5 = [
//     1,
//     2,
//     3
// ];

// let arr6 = [
//     4,
//     5,
//     6
// ];

// let arr7 = arr5.concat(arr6);

// console.log(arr7);

// let arr8 = arr7.concat(7, 8, 9);

// console.log(arr8);

// DELETING ELEMENTS

// arr8.pop(); // REMOVES THE LAST ELEMENT

// console.log(arr8);

// arr8.shift(); // REMOVES THE FIRST ELEMENT

// console.log(arr8);

// arr8.splice(1, 3); // SPLICE IS VERSATILE

// console.log(arr8);

// delete arr8[0];

// console.log(arr8);

// FINDING ELEMENTS

// arr8 = [
//     2,
//     6,
//     7,
//     8
// ];

// let findValue = arr8.find(function (e) {
//     return e === 6
// });

// let findValue2 = arr8.find(e => e === 10);

// console.log(findValue, findValue2);

// arr8 = [
//     2,
//     6,
//     7,
//     8
// ];

// let findIndex = arr8.indexOf(6);

// let findIndex2 = arr8.indexOf(10);

// console.log(findIndex, findIndex2);

// arr8 = [
//     2,
//     6,
//     7,
//     8
// ];

// let findIndex3 = arr8.indexOf(6, 2);

// let animals = [
//     "dog",
//     "horse",
//     "cat",
//     "platypus",
//     "dog"
// ];

// let lastDog = animals.lastIndexOf("dog");

// SORTING

// let names = [
//     "James",
//     "Alicia",
//     "Fatiha",
//     "Maria",
//     "Bert"
// ];

// names.sort();

// let ages = [
//     18,
//     72,
//     33,
//     56,
//     40
// ];

// ages.sort();

// names.reverse();

// MULTIDIMENSIONAL ARRAYS

// let someValues1 = [
//     1,
//     2,
//     3
// ];

// let someValues2 = [
//     4,
//     5,
//     6
// ];

// let someValues3 = [
//     7,
//     8,
//     9
// ];

// let arrOfArrays = [
//     someValues1,
//     someValues2,
//     someValues3
// ];

// let arrOfArrays2 = [
//     [
//         1,
//         2,
//         3
//     ],
//     [
//         4,
//         5,
//         6
//     ],
//     [
//         7,
//         8,
//         9
//     ]
// ];

// let value1 = arrOfArrays[0][1];

// let value2 = arrOfArrays[2][2];

// arrOfArraysOfArrays = [
//     arrOfArrays,
//     arrOfArrays,
//     arrOfArrays
// ];

// let middleValue = arrOfArraysOfArrays[1][1][1];

// OBJECTS IN JAVASCRIPT

// let arr = [
//     0,
//     1,
//     2
// ];

// console.log(typeof arr);

// let dog = {
//     dogName: "JavaScript",
//     weight: 2.4,
//     colour: "brown",
//     breed: "chihuahua",
//     age: 3,
//     burglarBiter: true
// };

// let dogColour1 = dog["colour"];

// let dogColour2 = dog.colour;

// UPDATING OBJECTS

// dog["colour"] = "blue",

// dog.weight = 2.3;

// console.log(dog);

// dog["age"] = "three";

// let variable = "age";

// console.log(dog[variable]);

// variable = "breed";

// console.log(dog[variable]);

// dog[variable] = "dachshund";

// console.log(dog["breed"]);

// WORKING WITH OBJECTS AND ARRAYS

// OBJECTS IN OBJECTS

let company = {
    // companyName: "Healthy Candy",
    // activity: "food manufacturing",
    // address: {
    //     street: "2nd street",
    //     number: "123",
    //     zipcode: "33116",
    //     city: "Miami",
    //     state: "Florida"
    // },
    // yearOfEstablishment: 2021
};

// company.address.zipcode = "33117";

// company["address"]["number"] = "100";

// ARRAYS IN OBJECTS

company = {
    companyName: "Healthy Candy",
    activities: [
        "food manufacturing",
        "improving kids' health",
        "manufacturing toys"
    ],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};

//let activity = company.activities[1];

let activity = company.activities[1];

// OBJECTS IN ARRAYS

let addresses = [
    {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1 West Avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }
];

let streetName = addresses[0].street;

// OBJECTS IN ARRAYS IN OBJECTS

company = {
    companyName: "Healthy Candy",
    activities: [
        "food manufacturing",
        "improving kids' health",
        "manufacturing toys"
    ],
    address: [
        {
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
        },
        {
            street: "1st West Avenue",
            number: "5",
            zipcode: "75001",
            city: "Addison",
            state: "Texas"
        }
    ],
    yearOfEstablishment: 2021
};

streetName = company.address[0].street;

