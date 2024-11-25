"use strict";

/* Basic Functions */

/* Functions are a group of statements, variable declarations,
   loops, et cetera that are bundled together.

   Calling a function means an entire group of statements
   will get executed.
*/

/* Invoking Functions */

/* nameOfTheFunction();

   functionThatTakesInput("the input", 5, true);

*/

/* This is invoking a function called nameOfTheFunction
   with no arguments,
   and a function called functionThatTakesInput
   with three required arguments.
*/

/* Writing Functions */

/* Writing a function can be done using the function keyword. */

/* function nameOfTheFunction() {

    // content of the function

};

*/

/* The above function can be called like this: */

/* nameOfTheFunction(); */

// function sayHello() {

//    let you = prompt("What's your name?");

//    console.log(`Hello, ${you}!`);

// };

// sayHello();

/* Functions can contain variables, which shape how they operate.
   The opposite is true as well, variables can contain functions.
*/

/* An example of a variable containing a function (varContainingFunction)
   and a varaible inside a function (varInFunction):
*/

// let varContainingFunction = function () {

//    let varInFunction = "I'm in a function.";
//    console.log("Hi there!", varInFunction);

// };

// varContainingFunction();

/* Variables contain a certain value and are something;
   they do not do anything.

   Functions are actions.
   They are a bundle of statements that can be executed
   when they get called.

   JavaScript will not run the statements when the functions
   do not get invoked.
*/

/* Naming Functions */

/* 1. Use camelCase for your functions.

      This means that the first word starts with a lowercase letter
      and new words start with a capital.

      That makes it a lot easier to read and keeps your code consistent.

   2. Make sure that the name describes what the function is doing.
      It is better to call a number addition function addNumbers
      than myFunc.

   3. Use a verb to describe what the function is doing.
      Make the function an action of some kind.

      Example: Call the function hiThere instead of sayHi.
*/

/* Parameters and Arguments */

/* function tester(para1, para2) {

    return para1 + " " + para2;

};

*/

/*

const arg1 = "argument 1";

const arg2 = "argument 2";

tester(arg1, arg2);

*/

/* A parameter is defined as the variable
   listed inside the parentheses of the function definition.

   The variable listed inside the parentheses
   of the function definition defines the scope of the function.
*/

/* Declaration */

/* function myFunc(param1, param2) {

    // code of the function;

};

*/

/* A practical example could be the following,
   which takes x and y as parameters:
*/

// function addTwoNumbers(x, y) {

//    console.log(x + y);

// };

/* When called, this function will add the parameters
   and log the result.

   This can be achieved by calling the function with arguments.
*/

/* myFunc("arg1", "arg2"); */

/* Examples of Arguments */

/* console.log("this is an argument");
   prompt("argument here too");
*/

/* let arr = [];
   arr.push("argument");
*/

/* Depending on the arguments you are calling with the function,
   the outcome of the function can change,
   which makes the function a very powerful
   and flexible building block.
*/

/* Example using the addTwoNumbers() function: */

// addTwoNumbers(3, 4);

// addTwoNumbers(12, -90);

/* Default or Unsuitable Parameters */

/* What happens if we call a function without any arguments?

   JavaScript gives the variables a default type.
*/

/* Special Functions and Operators */

/* Arrow fuctions and spread and rest operators. */

/* Arrow functions are ideal
   for sending functions around as parameters
   and using shorter notations.

   The spread and rest operators make it easier
   to send arguments and work with arrays.
*/

/* Arrow Functions */

/* Arrow functions are a special way of writing functions. */

/* (param1, param2) => body of the function; */

/* Or for no parameters: */

/* () => body of the function; */

/* Or for one parameter (no parentheses are needed here): */

/* param => body of the function; */

/* Or for a multi-line function with two parameters: */

/* (param1, param2) => {

   line 1;
   any number of lines;

   };
*/

/* Arrow functions are useful whenever you want
   to write an implementation on the spot,
   such as inside anther function as an argument.

   Arrow functions are a shorthand notation
   for writing functions.

   Arrow functions are most often used for functions
   that consist of only one statement.
*/

// function doingStuff(x) {

//    console.log(x);

// };

/* To rewrite the above as an arrow function,
   you will have to store it in a variable
   or send it in as an argument if you want to be able to use it.

   We use the name of the variable to execute the arrow function.
*/

// let doingArrowStuff = x => console.log(x);

// doingArrowStuff("Great!"); /* This invokes the function. */

/* If there is more than one argument in the arrow function,
   we will have to use parentheses.
*/

// let addTwoNumbers = (x, y) => console.log(x + y);

// addTwoNumbers(5, 3);

/* If there are no arguments, you must use the parentheses. */

// let sayHi = () => console.log("hi");

/* We can combine the arrow function
   with certain built-in methods.

   We can use the forEach() method on an array.
   This method executes a certain function
   for every element of the array.
*/

// const arr = [

//    "squirrel",
//    "alpaca",
//    "buddy"

// ];

// arr.forEach(e => console.log(e));

/* For every element in the array, it takes the element as input
   and executing the arrow function for it.

   In the above case, the function is to log the element.
   So the output is every single element in the array.
*/

/* Using arrow functions combined with built-in functions
   is very powerful.

   We can do something for every element in the array,
   without counting or writing a complicated loop.
*/

/* Spread Operator */

/* The spread operator is a special operator.

   The spread operator consists of three dots
   used before a referenced expression or string,
   and it spreads out the arguments or elements of an array.
*/

// let spread = [

//    "so",
//    "much",
//    "fun"

// ];

// let message = [

//    "JavaScript",
//    "is",
//    ...spread,
//    "and",
//    "very",
//    "powerful"

// ];

/* The elements of the spread operator become individual elements
   in the array.

   The spread operator spreads the array to individual elements
   in the new array.
*/

/* Spread operators can also be used to send multiple arguments
   to a function.
*/

// function addTwoNumbers(x, y) {

//    console.log(x + y);

// };

// let arr = [

//    5,
//    9

// ];

// addTwoNumbers(...arr);

/* This will log 14 to the console since it is the same
   as calling the function as follows:

   addTwoNumbers(5, 9);
*/

/* This operator avoids having to copy a long array or string
   into a function.

   This saves time and reduces code complexity.

   You can call a function with multiple spread operators.
   It will use all the elements of the arrays as input.
*/

// function addFourNumbers(x, y, z, a) {

//    console.log(x + y + z + a);

// };

// let arr = [

//    5,
//    9

// ];

// let arr2 = [

//    6,
//    7

// ];

// addFourNumbers(...arr, ...arr2);

/* The above is similar to the following: */

// addFourNumbers(5, 9, 6, 7);

/* Rest Parameter */

/* It has the same symbol as the spread operator,
   but it is used inside the function parameter list.
*/

/* What would happen if we were to send an argument too many times? */

/* function someFunction(param1, param2) {

   console.log(param1, param2);

};

someFunction("hi", "there!", "How are you?");

*/

/* Answer to the above: Nothing would happen.

   The code would pretend we only sent in two arguments
   and log hi there!

   If we use the rest parameter, it allows us
   to send in any number of arguments and translate them
   into a parameter array.
*/

/* function someFunction(param1, ...param2) {

   console.log(param1, param2);

};

someFunction("hi", "there!", "How are you?");

*/

/* In the output, the second parameter will have changed
   into an array, containing the second and third arguments.

   This is useful whenever you are not sure
   what number of arguments you will get.

   Using the rest parameter allows you
   to process this variable number of arguments,
   for example, using a loop.
*/

/* Returning Function Values */

/* Functions can give back a result when we specify a return value.

   The return value can be stored in a variable.
*/

// let favouriteSubject = prompt("What is your favourite subject?");

/* We are storing the result of the prompt() function
   in the variable favouriteSubject,
   which, in this case, would be whatever the user specified.
*/

/* What happens if we store the result of the addTwoNumbers() function
   and log that variable?
*/

// let result = addTwoNumbers(4, 5);

// console.log(result);

// function addTwoNumbers(x, y) {

//    return x + y;

// };

/* return ends the function and sends back
   whatever value comes after return.

   If it is an expression, it will evaluate the expression
   to one result and tnen return that to where it was called.
*/

/* What do you think this code does? */

// let resultsArr = [];

// for (let i = 0; i < 10; i++) {

//    let result = addTwoNumbers(i, 2 * i);

//    resultsArr.push(result);

// };

// console.log(resultsArr);

/* It logs an array of all the results to the screen.

   The function is being called in a loop.

   The first iteration, i, equals 0. Therefore, the result is 0.

   The last iteration, i equals 9. As such, the last value
   of the array equals 27.
*/

/* Returning with Arrow Functions */

/* If we have a one-line arrow function,
   we can return without using the keyword return.

   If we want to rewrite the function,
   we can write it like as follows to make an arrow function out of it:
*/

// let addTwoNumbers = (x, y) => x + y;

/* The above arrow function can be called
   and the result can be stored as follows:
*/

// let result = addTwoNumbers(12, 15);

// console.log(result);

/* The above logs 27 to the console.

   If a multi-line function is used,
   you will have to use the keyword return.
*/

/* Multi-Line Arrow Function */

// let addTwoNumbers = (x, y) => {

//    console.log("Adding...");

//    return x + y;

// };

/* Variable Scope in Functions */

/* Scope defines where you can access a certain variable.

   When a variable is in scope, you can access it.

   When a variable is out of scope, you cannot access the variable.
*/

/* Local Variables in Functions */

/* Local variables are only in scope
   within the function they are defined.

   This is true for let variables and var variables.

   The function parameters (they do not use let or var)
   are also local variables.
*/

/* Example */

// function testAvailability(x) {

//    console.log("Available here:", x);

// };

// testAvailability("Hi");

// console.log("Not available here:", x);

/* In the above, when called inside the function,
   x will be logged.

   The statement outside of the function fails,
   because x is a local variable to the function testAvailability().

   This is showing that the function parameters are not accessible
   outside of the function.

   They are out of scope outside the function
   and in scope inside the function.
*/

/* Example */

// function testAvailability() {

//    let y = "Local variable!";

//    console.log("Available here:", y);

// };

// testAvailability();

// console.log("Not available here:", y);

/* Variables defined inside the function
   are not available outside the function either.

   The local variables declared inside a function
   are not available outside of the function,
   but with return, you can make their values available
   outside the function.

   So if you need their values outside a function,
   you can return the values.

   The keyword here is values.

   You cannot return the variable itself.

   Instead, a value can be caught and stored in a different variable.
*/

// function testAvailability() {

//    let y = "I'll return";

//    console.log("Available here:", y);

//    return y;

// };

// let z = testAvailability();

// console.log("Outside the function:", z);

// console.log("Not available here:", y);

/* So the returned value I will return that was assigned
   to local variable y
   gets returned and stored in variable z.
*/

/* Let Versus Var Variables */

/* The difference between let and var is that var is function-scoped.

   A block is defined by two curly braces { }.

   The code within those braces is where let is still available.
*/

// function doingStuff() {

//    if (true) {

//       var x = "local";

//    };

//    console.log(x);

// };

// doingStuff();

/* If we use var, the variable becomes function-scoped
   and is available anywhere in the function block,
   even before defining with the value undefined.

   Therefore, after the if block has ended, x can still be accessed.
*/

// function doingStuff() {

//    if (true) {

//       let x = "local";

//    };

//    console.log(x);

// };

// doingStuff();

/* Above, we get the error that x is not defined.

   Since let is only block-scoped,
   x goes out of scope when the if block ends
   and can no longer be accessed after that.
*/

/* A final difference between let and var
   relates to the order of declaration in a script.
*/

// function doingStuff() {

//    if (true) {

//       console.log(x);

//       let x = "local";

//    };

// };

// doingStuff();

/* The above will give a ReferenceError that x is not initialised.

   This is because variables declared with let
   cannot be accessed before being defined,
   even within the same block.
*/

/* Take a look at the following: */

// function doingStuff() {

//    if (true) {

//       console.log(x);

//       var x = "local";

//    };

// };

// doingStuff();

/* In the above, we will not get an error.

   When we use a var variable before the define statement,
   we simply get undefined.

   This is due to a phenomenon called hoisting,
   which means using a var variable before it has been declared results
   in the variable being undefined
   rather than giving a ReferenceError.
*/

/* Const Scope */

/* Constants are block-scoped, just like let.

   Scope rules are similar to those for let.
*/

// function doingStuff() {

//    if (true) {

//       const x = "local";

//    };

//    console.log(x);

// };

/* Using a const variable before having defined it
   will also give a ReferenceError,
   just as it does for a let variable.
*/

/* Global Variables */

/* Global variables are variables declared outside a function
   and not in some other code block.

   Variables are accessible in the scope,
   either function or block, when they are defined,
   plus any "lower" scopes.

   A variable defined outside of a function
   is available within the function
   as well as inside any functions
   or other code blocks inside that function.

   A variable defined at the top level of your program
   is available everywhere in your program.
*/

// let globalVar = "Accessible everywhere!";

// console.log("Outside function:", globalVar);

// function creatingNewScope(x) {

//    console.log("Access to global vars inside function.", globalVar);

// };

// creatingNewScope("some parameter");

// console.log("Still available:", globalVar);

/* As you can see in the above,
   global variables are accessible from everywhere
   because they are not declared in a block.

   They are always in scope after they have been defined,
   it does not matter where you use them.

   You can hide their accessibility inside a function
   by specifying a new variable with the same name
   inside that scope;
   this can be done for let let, var, and const.
*/

// let x = "global";

// function doingStuff() {

//    let x = "local";

//    console.log(x);

// };

// doingStuff();

// console.log(x);

/* From the above, what you can see is that the value of x
   inside the doingStuff() function is local.

   Outside the function, the value is still global.

   This means that you will have to be mindful of mixing up names
   in local and global scopes.

   It is better if mixing up names
   in local and global scopes is avoided.
*/

/* If you have the same parameter name as a global variable,
   the value of the parameter will be used.
*/

// let x = "global";

// function doingStuff(x) {

//    console.log(x);

// };

// doingStuff("param");

/* The above logs param. */

/* Local variables override the value of global variables.

   It is best to work with local variables in functions;
   in so doing, you have more control
   over what you are working with.
*/

// function confuseReader() {

//    x = "Guess my scope...";

//    console.log("Inside the function:", x);

// };

// confuseReader();

// console.log("Outside of function:", x);

/* The x in the function gets defined
   without the keyword let or var.

   There is no declaration of x above the code;
   this is all the code of the program.

   Even though a variable gets defined inside the function,
   the declaration of x within the function gets global scope
   and can still be accessed outside of the function.

   If you need a global variable, declare it at the top of your file.
*/

/* Immediately Invoked Function Expression */

/* The immediately invoked function expression (IIFE)
   is a way of expressing a function
   so that it gets invoked immediately.

   It is anonymous, it does not have a name, and it is self-executing.

   This has to do with where functions and variables are accessible from.

   If you have an IIFE in the top-level scope,
   whatever is in there is not accessible from outside
   even though it is top level.
*/

// (function () {

//    console.log("IIFE!");

// })();

/* The function itself is surrounded by parentheses,
   which makes it create a function instance.

   Without these parentheses around it, it would throw an error
   because the function does not have a name.

   This is worked around by assigning the function to a variable
   where the output can be returned to the variable.

   (); executes the unnamed function; this must be done
   immediately following a function declaration.

   If your function were to require a parameter,
   you would pass it within the final brackets in the code shown above.

   You could also combine IIFE with other function patterns.

   An example of combining IIFE with other function patterns
   would be to use an arrow function to make a piece of code
   even more concise.
*/

/* Example of Combining IIFE with Other Function Patterns */

// (() => {
//    console.log("run right away");
// })();

/* (); is used to invoke the function that was created. */

/* Recursive Functions */

/* You may want to call the same function from inside the function.

   This may be an ideal solution to complex problems.
*/

// function getRecursive(nr) {

//    console.log(nr);

//    getRecursive(--nr);

// };

// getRecursive(3);

/* The above piece of code prints 3 and then counts down and never stops.

   The reason this piece of code does not stop
   is because nothing was said as to where the code should stop.
*/

// function getRecursive(nr) {

//    console.log(nr);

//    if (nr > 0) {

//       getRecursive(--nr);

//    };

// };

// getRecursive(3);

/* The above function is going to call itself
   until the value of the parameter
   is no longer bigger than 0, after which it will stop.
*/

/* What happens when we call a function recursively
   is that it goes one function deeper every time.

   The first function call is done last.

   For the function from lines 947 to 959, it goes like this:
*/

/*

1. getRecursive(3)

 2. getRecursive(2)

  3. getRecursive(1)

   4. getRecursive(0)

   5. done with getRecursive(0) execution

  6. done with getRecursive(1) execution

 7. done with getRecursive(2) execution

8. done with getRecursive(3) execution

*/

// function logRecursive(nr) {

//    console.log("Started function:", nr);

//    if (nr > 0) {

//       logRecursive(nr - 1);

//    } else {

//       console.log("done with recursion");

//    };

//    console.log("Ended function:", nr);

// };

// logRecursive(3);

/* When you feel the need to call the same function
   over and over again in a loop, you should consider recursion.

   An example could be searching for something.

   Instead of looping over everything inside the same function,
   you can split up inside the function
   and call the function repeatedly from the inside.

   The performance of recursion is slightly worse
   than the performance of regular iteration using a loop.

   If this causes a bottleneck situation
   that would slow down your application,
   then you might want to consider another approach.
*/

/* Nested Functions */

/* We can have functions inside functions,
   that is all a nested function really is.
*/

// function doOuterFunctionStuff(nr) {

//    console.log("Outer function");

//    doInnerFunctionStuff(nr);

//    function doInnerFunctionStuff(x) {

//       console.log(x + 7);

//       console.log("I can access outer variables:", nr);

//    };

// };

// doOuterFunctionStuff(2);

/* The outer function is calling its nested function.

   This nested function has access to the variables of the parent.

   The other way around, this is not the case.

   Variables defined inside the inner function have function scope.

   This means they are accessible inside the function
   where they are defined, which is in this case the inner function.

   Thus, this will throw a ReferenceError:
*/

// function doOuterFunctionStuff(nr) {

//    doInnerFunctionStuff(nr);

//    function doInnerFunctionStuff(x) {

//       let z = 10;

//    };

//    console.log("Not accessible:", z);

// };

// doOuterFunctionStuff(2);

/* This will throw a ReferenceError. */

// function doOuterFunctionStuff(nr) {

//    doInnerFunctionStuff(nr);

//    function doInnerFunctionStuff(x) {

//       let z = 10;

//    };

// };

// doInnerFunctionStuff(3);

/* This will throw a ReferenceError.

   doInnerFunctionStuff() is defined inside the outer function,
   which means that it is only in scope
   inside doOuterFunctionStuff().

   Outside this function, it is out of scope.
*/

/* Anonymous Functions */

/* We can create functions without names
   if we store them inside variables.

   We call these functions anonymous.
*/

/* Example of a Non-Anonymous Function: */

// function doingStuffAnonymously() {

//    console.log("Not so secret though.");

// };

/* Here is how to turn the function from lines 1120 to 1124
   into an anonymous function:
*/

// function () {

//    console.log("Not so secret though.");

// };

/* The function has no name. It is anonymous. */

/* An anonymous function can be called using the variable name, like this: */

// functionVariable();

/* It will output "Not so secret though." */

/* Storing functions inside variables enables us to do things
   like passing in functions as parameters.

   This concept is called callbacks.
*/

/* Function Callbacks */

/* An Example of Passing a Function as an Argument to Another Function: */

// function doFlexibleStuff(executeStuff) {

//    executeStuff();

//    console.log("Inside doFlexibleStuffFunction.");

// };

/* If we call this new function with a previously-made anonymous function,
   functionVariable.
*/

// doFlexibleStuff(functionVariable);

/* A function can also be called with another function,
   and then the doFlexibleStuff function
   will execute the other function.
*/

// let anotherFunctionVariable = function() {

//    console.log("Another anonymous function implementation.");

// };

// doFlexibleStuff(anotherFunctionVariable);

/* In the above, we created a function
   and stored it in the anotherFunctionVariable variable.

   We then sent that in as a function parameter
   to our doFlexibleStuff() function.

   The function executes whatever function gets sent in.
*/

// let youGotThis = function () {

//    console.log("You're doing really well, keep coding!");

// };

// setTimeout(youGotThis, 1000);

// setInterval(youGotThis, 1000);

/* The code is going to wait for 1000ms (one second), and then print. */

/* setInterval() function keeps executing the function
   with the specified interval.
*/

/* In the case of line 1198, it will print out the message every second
   until you kill the program.
*/