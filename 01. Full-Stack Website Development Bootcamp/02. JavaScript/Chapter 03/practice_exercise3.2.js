let shoppingList = [

];

shoppingList.push("Milk", "Bread", "Apples");

console.log(shoppingList);

shoppingList.splice(1, 1, "Bananas", "Eggs");

console.log(shoppingList);

console.log(shoppingList.pop());

console.log(shoppingList);

shoppingList.sort();

console.log(shoppingList.indexOf("Milk"));

console.log(shoppingList);

// /* AT THIS STAGE, THE CONSOLE DISPLAYS
// ['Bananas', 'Eggs', 'Milk'] */

shoppingList.splice(1, 0, "Carrots", "Lettuce");

console.log(shoppingList);

let newShoppingList = [
    "Juice",
    "Pop"
];

// let shoppingList2 = shoppingList.concat(newShoppingList).concat(newShoppingList);

let shoppingList2 = shoppingList.concat(newShoppingList, newShoppingList);

console.log(shoppingList2.lastIndexOf("Pop"));

console.log(shoppingList2);



