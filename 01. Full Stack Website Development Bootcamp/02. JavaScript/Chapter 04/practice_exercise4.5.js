"use strict";

let prize = prompt("Give me a number between 0 and 10");

let prizeNumber = Number(prize);

let output = "My selection: ";

switch (prizeNumber) {
    case 0:
        output += "bag of tea";
        output += " and ";
        output += "rusks";
        break;
    case 1:
    case 2:
        output += "cheese";
        output += " and ";
        output += "cake";
        break;
    case 3:
    case 4:
        output += "paper";
        output += " and ";
        output += "carrots";
        break;
    case 5:
    case 6:
        output += "bananas";
        output += " and ";
        output += "chutney";
        break;
    case 7:
    case 8:
        output += "toothpaste";
        output += " and ";
        output += "soap";
        break;
    case 9:
    case 10:
        output += "cereal";
        break;
    default:
        output += "you got nothing";
}

alert(output);

console.log(output);

