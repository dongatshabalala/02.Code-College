"use strict";

/* This is a game between a player and the computer,
where both will make a random selection
of either Rock, Paper, or Scissors.

Alternatively, you could create a version
using real player input.

Rock will beat out Scissors, Paper will beat out Rock,
and Scissors will beat out Paper.

Use JavaScript to create your own version of the game
applying the logic with an if statement.*/

/* Steps */

/* 1. Create an array that contains the variables
Rock, Paper, and Scissors. */

let selection = [
    "Rock",
    "Paper",
    "Scissors"
];

/* 2. Set up a variable that generates a random number, 0-2, for the player
and then do the same for the selection of the computer.
The number represents the index values in the array of the 3 items. */

/* This requires a randomisation
of both computer and player responses. */

let randomComputer = Math.floor(Math.random() * selection.length);

let randomPlayer = Math.floor(Math.random() * selection.length);

/* 3. Create a variable to hold a response message to the user.
This can show the random results for the player and then also the result
for the computer of the matching item from the array. */

let response;

response = (`The Computer Chose: ${selection[randomComputer]}. The Player Chose: ${selection[randomPlayer]}.`);

/* 4. Create a condition to handle the player
and computer selections.

If both are the same, this results in a tie. */

/* 5. Use conditions to apply the game logic
and return the correct results.

Check which index value from which player is bigger
and assign the victory accordingly,
with the exception of Rock beating Scissors. */

/* Rock, Paper, Scissors can only be won
under the following conditions: */

/* I. Scissors Wins Over Paper

II. Paper Wins Over Rock

III. Rock Wins Over Scissors */

if (randomPlayer === randomComputer) {

    response += "This Is a Tie.";

} else if (randomPlayer > randomComputer) {

    if (randomComputer == 0 && randomPlayer == 2) {

        response += " The Computer Wins.";

    } else {

    } response += " The Player Wins.";

} else {

    if (randomComputer == 2 && randomPlayer == 0) {

        response += " The Player Wins.";

    } else {

    } response += " The Computer Wins.";

};

/* 6. Add a new output message that shows the player selection
versus the computer slection and the result of the game. */

console.log(response);
