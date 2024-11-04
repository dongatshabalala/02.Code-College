"use strict";

// Chapter 4 Project: 4.2 - Friend Checker Game

/* Ask the user to enter a name using the switch statement
to return a confirmation that the user is a friend if the name selected
is known in the case statements.

You can add a default response that you do not know the person if it is
an unknown name.

Output the result into the console. */

let inputName = prompt("Enter in your name please.");

let output = "The name is: ";

switch (inputName) {
    case "Donga":
    case "Thato":
    case "Vusi":
    case "Sizwe":
    case "James":
        output += (`${inputName}. This is a friend.`);
        break;
    default:
        output += (`${inputName}. You are unknown. You do not belong to the group.`);
        break;
}

alert(output);

console.log(output);
