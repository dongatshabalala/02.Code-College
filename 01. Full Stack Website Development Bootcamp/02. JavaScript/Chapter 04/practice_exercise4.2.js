let userAge = prompt("Please give me your age.");

let numberAge = Number(userAge);

let message;

// if(numberAge >= 21) {
//     message = "Enter the venue and purchase alcohol.";
// } 

// if(numberAge >= 19) {
//     message = "Enter the venue, but purchasing alcohol is not allowed.";
// } 

if (numberAge >= 21) {
    message = "Enter the venue and buy alcohol.";
} else if (numberAge >= 19) {
    message = "Enter the venue, but buying alcohol is not allowed.";
} else {
    message = "Sorry, you are denied entry.";
}

console.log(message);
