// MANIPULATING AN ARRAY

const theList = [
    'Laurence',
    'Svekis',
    true,
    35,
    null,
    undefined,
    { test: 'one', score: 55 },
    ['one', 'two']
];

theList.shift();

console.log(theList);

theList.pop();

console.log(theList);

theList.splice(0, 0, "FIRST");

console.log(theList);

/* AT THIS STAGE, THE CODE LOOKS AS FOLLOWS:

["FIRST", "Svekis", true, 35, null, undefined, { test: 'one', score: 55}, ['one', 'two']]

*/

theList.splice(3, 4, "hello World");

console.log(theList);

theList.splice(2, 1, "MIDDLE");

console.log(theList);

theList.splice((theList.length), 0, "LAST");

console.log(theList);

// COMPANY PRODUCT CATALOG

let inventory = [

];

let item1 = {
    name: "laptop",
    model: "Lenovo",
    cost: 10000,
    quantity: 1
};

let item2 = {
    name: "cellphone",
    model: "Samsung",
    cost: 3000,
    quantity: 1
};

let item3 = {
    name: "kettle",
    model: "Pineware",
    cost: 200,
    quantity: 1
};

console.log(inventory.push(item1, item2, item3));

console.log(inventory);

console.log(inventory[2].quantity);

