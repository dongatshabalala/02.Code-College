"use strict";

/* Built-In JavaScript Methods */

/* Introduction to Built-In JavaScript Methods */

/* The difference between a method and a function
   is that a function is defined anywhere in the script,
   and a method is defined inside a class.

   Methods are like functions on classes.

   Methods can often be chained as well. This is only true
   for methods returning a result. 
   The next method will then be performed on the result.
*/

let s = "Hello";

console.log(

   s.concat(" there!")

      .toUpperCase()

      .replace("THERE", "you")

      .concat(" You're amazing!")

);

/* The variable s is created 
   and Hello is stored in there on the first line.

   After this, something has to be logged.

   First, a concat() method is performed on the s variable,
   which appends a string to our string.

   After the first operation, the value is Hello there!

   Then, this is transformed to uppercase
   with the next method.

   After that, the value is HELLO THERE!

   Then we proceed to replace THERE with you.

   After that, the value becomes HELLO you!

   After that, a string is appended to it again.

   The value logged is as follows:

   HELLO you! You're amazing!
*/

/* In the above piece of code, we need to log
   or store the output, 
   because the original string value
   will not be updated by just calling methods on a string.
*/

/* Global Methods */

/* Global JavaScript methods can be used
   without referring to the built-in object
   that they are a part of.

   This means that the method name can be used
   as if it is a function that has been defined
   inside the scope that we are in,
   without the "object" in front of it.
*/

/* Example of Global Methods in Action */

// let x = 7;

// console.log(Number.isNaN(x));

/* You can also write: */

// console.log(isNaN(x));

/* In the above, the Number can be left out,
   because isNaN is made globally available
   without referring to the class it belongs to,
   the Number class in this case.

   In this case, both of the console.log statements above
   will log false.

   These statements are doing the exact same thing
   because isNaN returns true when it is not a number.

   Since 7 is a number, it will log false.
*/

/* Decoding and Encoding URIs */

/* Encoding means converting from one shape to another. */

/* URI - Uniform Resource Identifier */

/* A URI is an identifier of a certain resource. */

/* URL - Uniform Resource Locator */

/* A URL is a subcategory of URI that is not only an identifier,
   but also holds the information
   on how to access it - LOCATION.
*/

/* Example of Encoding and Decoding URIs */

/* Encoding and decoding URIs would be necessary
   when you are sending variables over the URL
   using the get method in a form.

   The variables being sent via the URL are called query parameters.

   If something contains a space, this will be decoded,
   because you cannot use spaces in your URL.

   The spaces in a URL will be converted to show %20.

   All characters can be converted to some %-starting format.

   Converting characters to %-starting formats
   may not be necessary in most cases.

   URIs can contain a certain number
   of alphanumeric characters - these special characters
   need to be encoded.
*/

/* There are two pairs of encode and decode methods. */

/* You cannot have a URI with spaces,
   so working with these methods is crucial
   in order to work with variables containing spaces.
*/

/* decodeUri() and encodeUri() */

/* decodeUri() and encodeUri() are not actually encoding and decoding,
   they are basically fixing broken URIs.
*/

/* Example */

// let uri = "https://www.example.com/submit?name=maaike van putten";

// let encoded_uri = encodeURI(uri);

// console.log("Encoded:", encoded_uri);

// let decoded_uri = decodeURI(encoded_uri);

// console.log("Decoded:", decoded_uri);

/* In the above piece of code, the following is observed:

   The method has replaced the spaces in the encoded version
   and removed them again in the decoded version.

   All the other characters get to stay the same.

   This encode and decode do not take special characters into account,
   and therefore leave them in the URI.

   Colons, question marks, equal signs, slashes,
   and ampersands can be expected.
*/

/* decodeUriComponent() and encodeUriComponent() */

/* The methods, decodeURI() and encodeURI() can be useful
   to fix a broken URI,
   but they are useless when you only want to encode or decode
   a string that contains a character
   with a special meaning, such as = or &.
*/

/* Example */

let uri = "https://www.example.com/submit?name=maiike van putten";

let encoded_uri = encodeURIComponent(uri);

console.log("Encoded:", encoded_uri);

let decoded_uri = decodeURIComponent(encoded_uri);

console.log("Decoded:", decoded_uri);

/* If the URL variable were to contain a special character,
   lie = and &, this would change the meaning
   and break the URI if these characters
   do not get encoded.
*/

/* Encoding with escape() and unescape() */

/* These JavaScript methods are discouraged to use. */

/* Parsing Numbers */

/* Making Integers with parseInt() */

/* With the method parseInt(), a string will be changed to an integer.

   This method is part of the Number class,
   but it is global and you cna use it without the Number
   in front of it.
*/

/* Example */

// let str_int = "6";

// let int_int = parseInt(str_int);

// console.log("Type of", int_int, "is", typeof int_int);


/* We start off with a string containing a 6.

   Then we convert this string to an integer
   using the parseInt method, and then we log the result.
*/

/* In the above, the type has changed from string to number. */

/* What will happen if parseInt() tries
   to parse other types of numbers, like string versions of floats
   or binary numbers?
*/

// let str_float = "7.6";

// let int_float = parseInt(str_float);

// console.log("Type of", int_float, "is", typeof int_float);

// let str_binary = "0b101";

// let int_binary = parseInt(str_binary);

// console.log("Type of", int_binary, "is", typeof int_binary);

/* The parseInt() method stops parsing
   when it runs into a non-numeric character.

   In the first case, it stops parsing
   as soon as it finds the dot,
   so the result is 7.

   In the binary number case, it stops parsing
   as soon as it hits the b,
   and the result is 0.
*/

// let str_nan = "hello!";

// let int_nan = parseInt(str_nan);

// console.log("Type of", int_nan, "is", typeof int_nan);

/* Since the first character is non-numeric,
   JavaScript will convert this string to NaN.
*/

/* Making Floats with parseFloat() */

/* parseFloat() can be used to parse a string to a float. 

   parseFloat() wors like parseInt(),
   except it can also understand decimal numbers
   and it does not quit parsing
   as soon as it runs into the first dot.
*/

// let str_float = "7.6";

// let float_float = parseFloat(str_float);

// console.log("Type of", float_float, "is", typeof float_float);

/* With the parseInt(), the value became 7,
   because it would stop parsing as soon as it finds
   a non-numeric character.

   parseFloat() can deal with one dot in the number,
   and the numbers after that are interpreted as decimals.
*/

let str_version_nr = "2.3.4";

let float_version_nr = parseFloat(str_version_nr);

console.log("Type of", float_version_nr, "is", typeof float_version_nr);

/* The above strategy is similar to the parseInt() function.

   As soon as it finds a character it cannot interpret,
   a second dot in this case,
   it will stop parsing and just return the result so far.
*/

let str_int = "6";

let float_int = parseFloat(str_int);

console.log("Type of", float_int, "is", typeof float_int);

/* The behaviour for binary numbers and strings is the same.

   It is going to stop parsing
   as soon as it runs into a character
   it cannot interpret.
*/

let str_binary = "0b101";

let float_binary = parseFloat(str_binary);

console.log("Type of", float_binary, "is", typeof float_binary);

let str_nan = "hello!";

let float_nan = parseFloat(str_nan);

console.log("Type of", float_nan, "is", typeof float_nan);

/* You will use the parseFloat()
   whenever you need a decimal number.

   parseFloat() will not work with binary,
   hexadecimal, and octal values.

   Whenever you really need to work
   with binary, hexadecimal, and octal values or integers,
   you will have to use parseInt().
*/

/* Executing JavaScript with eval() */

/* This method executes the argument as a JavaScript statement.

   This means that it will just do
   whatever JavaScript is inserted in there,
   as if that JavaScript were written directly on the spot
   instead of eval().

   This can be convenient for working with injected JavaScript.
*/

/* Basic HTML Web Page with an Input Box on it */

<html>
   <body>
      <input onchange = "go(this)"></input>
      <script>
         function go(e) {
            eval(e.value)
         }
      </script>
   </body>
</html>

/* Whatever you insert in the input box will get executed. */

/* Array Methods */

/* Performing a Certain Action for Every Item */

/* The forEach() method is a method
   that takes the function that needs to be executed
   for every element as input.
*/

/* Example */

// let arr = [

//    "grapefruit",
//    4,
//    "hello",
//    5.6,
//    true

// ];

// function printStuff(element, index) {

//    console.log("Printing stuff:", element, "on array position:", index);
   
// };

// arr.forEach(printStuff);

/* Filtering an Array */

/* The built-in filter() method can be used on an array
   to alter which values are in the array.

   The filter method takes a function as an argument,
   and this function should return a Boolean.

   If the Boolean has the value true,
   the element will end up in the filtered array.

   If the Boolean has the value false,
   the element will be left out.
*/

// let arr = [

//    "squirrel",
//    5,
//    "Tjed",
//    new Date(),
//    true

// ];

// function checkString(element, index) {

//    return typeof element === "string";

// };

// let filterArr = arr.filter(checkString);

// console.log(filterArr);

/* The original array has not changed,
   the filter() method returns a new array
   with the elements that made it through the filter.

   This can be captured in the filterArr variable.
*/

/* Checking a Condition for All Elements */

/* Use the every() method 
   to see whether something is true for all elements in the array.

   If that is the case, the every() method will return true,
   else it will return false.
*/

/* Replacing Part of an Array with Another Part of the Array */

/* The copyWithin() method can be used
   to replace a part of the array with another part of the array.
*/

// let arr = [

//    "grapefruit",
//    4,
//    "hello",
//    5.6,
//    true

// ];

// arr.copyWithin(0, 3, 4);

/* In the above example, three arguments are specified.

   The first one is the target position,
   to which the values get copied.

   The second one is the start of what to copy to the target position.

   The last one is the end of the sequence
   that will be copied to the target postion - the last index here
   is not included.

   Position 0 is overridden with whatever is in position three.
*/

/* Mapping the Values of an Array */

/* The array map() method allows you
   to change all the values in an array.

   This method will return a new array
   with all the new values.

   You will have to say how to create these new values. 

   This can be done with the arrow function.

   It is going to execute the arrow function
   for every element in the array.
*/

// let arr = [

//    1,
//    2,
//    3,
//    4

// ];

// let mapped_arr = arr.map(x => x + 1);

// console.log(mapped_arr);

/* Using the arrow function, the map() method
   has created a new array,
   in which each of the original array values
   have been increased by 1.
*/

/* Finding the Last Occurrence in an Array */

/* We can find the last occurrences with indexOf(). */

// let bb = [

//    "so",
//    "bye",
//    "bye",
//    "love"

// ];

// console.log(bb.lastIndexOf("bye"));

/* The above logs 2 because the index 2 holds the last bye variable. */

/* When you ask for the last index of something
   that is not there, the answer will be -1.
*/

/* String Methods */

/* Combining Strings */

/* When you want to concatenate strings,
   you can use the concat() method.

   This does not change the original string(s);
   it returns the combined result as a string.

   You will have to capture the result in a new variable,
   else it will get lost.
*/

// let s1 = "Hello";

// let s2 = "JavaScript";

// let result = s1.concat(s2);

// console.log(result);

/* The above logs "Hello JavaScript" into the console. */

/* Converting a String to an Array */

/* With the split() method, we can convert a string to an array.

   We will have to capture the result;
   it is not changing the original string.
*/

// let s1 = "Hello";

// let s2 = "JavaScript";

// let result = s1.concat(s2);

// console.log(result);

/* Take a look at the above piece of code,
   we will have to tell the split method
   on what string it should split
   if the objective is to convert a string to an array.

   Every time it encounters that string,
   it will create a new array item.
*/

// let result = "Hello JavaScript";

// let array_result = result.split(" ");

// console.log(array_result);

/* This will log: */

// [ 'Hello', 'JavaScript' ]

/* In the above, an array is created of all the elements
   separated by a space.
*/

/* Strings can be split by any character. */

// let favouriteFruits = "strawberry,watermelon,grapefruit";

// let array_fruits = favouriteFruits.split(",");

// console.log(array_fruits);

/* The above creates an array with three items.

   You can split on anything,
   and the string you are splitting on
   is left out of the result.
*/

/* Converting an Array to a String */

/* With the join() method, you can convert an array to a string. */

// let letters = [

//    "a",
//    "b",
//    "c"

// ];

// let x = letters.join();

// console.log(x);

/* The above logs a,b,c. */

let letters= [

   "a",
   "b",
   "c"

];

let x = letters.join('-');

console.log(x);

/* The above logs a-b-c. */

/* join() can be combined with split(),
   which does the reverse
   and converts a string into an array.
*/

/* Working with Index and Positions */

/* There is value in being able to find out
   what index a certain substring is at within your string.
*/

// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";

// let index_re = poem.indexOf("re");

// console.log(index_re);

/* The above piece of code is logging 7 to the console,
   because the first occurrence of re is in are,
   and the re begins at index 7.

   When indexOf() cannot find the index, it will return -1.
*/

/* An alternative way of searching for a particular substring
   within a string is to use the search() method:
*/

// let searchStr = "When I see my fellow, I say hello.";
// let pos = searchStr.search("lo");
// console.log(pos);

/* This will log 17 because that is the index of lo in fellow.
   
   Much like indexOf(), if it cannot find it, it will return -1.
*/

// let notFound = searchStr.search("JavaScript");
// console.log(notFound);

/* search() will accept a regex format as input,
   whereas indexOf() just takes a string.

   indexOf() is faster than the search() method,
   so if you just need to look for a string, use indexOf().

   If you need to look for a string pattern, you will have
   to use the search() method.
*/

/* The indexOf() method is returning the index
   of the first occurrence, but similarly,
   there is a lastIndexOf() method.

   lastIndexOf() returns the index
   where the argument string occurs last.

   If it cannot find it, it returns -1.
*/

// let lastIndex_re = postMessage.lastIndexOf("re");
// console.log(lastIndex_re);

/* This returns 24; this is the last time re appears in the poem. */

/* Sometimes, you will have to do the reverse.
   
   Instead of looking for what index a string occurs at,
   you will want to know what character
   is at a certain index position.

   This is where the charAt(index) method comes in handy,
   where the specified index position is taken as an argument.
*/

// let pos1 = poem.charAt(10);
// console.log(pos1);

/* This is logging r, because the character at index 10
   is the r of red.

   If you are asking for the position of an index that is
   out of the range of the string,
   it will return an empty string.
*/

// let pos2 = poem.charAt(1000);
// console.log(pos2);

/* This will log an empty line to the screen,
   and if you ask for the type of pos2,
   it will return string.
*/

/* Creating Substrings */

/* With the slice(start, end) method,
   we can create substrings.

   This does not alter the original string,
   but returns a new string with the substring.

   It takes two parameters, the first is the index
   at which it starts and the second is the end index.

   If you leave out the second index,
   it will just continue until the end of the string
   from the start.

   The end index is not included in the substring.
*/

// let str = "Create a substring";

// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

/* The first one only has one argument,
   so it starts at index 5 (which holds and e)
   and grabs the rest of the string from there.

   The second one has two arguments, 0 and 3.

   C is at index 0 and a is at index 3.

   Since the last index is not included in the substring,
   it will only return Cre.
*/

/* Replacing Parts of the String */

/* If you need to replace a part of the string,
   you can use the replace(old, new) method.

   It takes two arguments, one string to look for in the string
   and one new value to replace the old value with.
*/

// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

/* This will log to the console Hi Pascal.

   If you do not capture the result, it is gone,
   because the original string will not get changed.

   If the string you are targeting
   does not appear in the original string,
   the replacement does not take place
   and the original string will be returned.
*/

// let new_hi2 = history.replace("not there", "never there");
// console.log(new_hi2);

/* This logs Hi buddy. */

/* The method is only changing the first occurrence by default. */

// let s3 = "hello hello";

// let new_s3 = s3.replace("hello", "oh");

// console.log(new_s3);

/* This logs oh hello.

   If we wanted to replace all the occurrences,
   we could use the replaceAll() method.

   This will replace all occurrences
   with the specified new string.
*/

// let s3 = "hello hello";

// let new_s3 = s3.replaceAll("hello", "oh");

// console.log(new_s3);

/* This logs oh oh. */

/* Uppercase and Lowercase */

/* We can change the letters of a string
   toUpperCase() and toLowerCase() built-in methods on string.

   This is not changing the original string,
   so the result will still have to be captured.
*/

// let low_bye = "bye!";

// let up_bye = low_bye.toUpperCase();

// console.log(up_bye);

/* This logs BYE! */

/* It converts all the letters to uppercase.

   The same can be done for the opposite with toLowerCase().
*/

// let caps = "HI, HOW ARE YOU?";

// let fixed_caps = caps.toLowerCase();

// console.log(fixed_caps);

/* This will log "hi how are you?" */

/* Let's make it more complicated and say that we would like
   the first letter of the sentence to be capitalised.

   We can do this by combining some of the methods
   that we have seen:
*/

// let caps = "HI HOW ARE YOU?";

// let fixed_caps = caps.toLocaleLowerCase();

// let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1));

// console.log(first_capital);

/* The methods are being chained.

   First, we grab the first character of fixed_caps with charAt(0)
   and then make it uppercase by calling toUpperCase() on it.

   We then need the rest of the string
   and we get it by concatenating slice(1).
*/

/* The Start and End of a String */

/* Sometimes you would want to check what a string
   starts or ends with, there are built-in methods
   for this on string.
*/

// let encouragement = "You are doing great, keep up the good work!";

// let bool_start = encouragement.startsWith("You");

// console.log(bool_start);

/* This will log true to the console,
   because the sentence starts with You.

   Be mindful that this is case sensitive.
   Should capitalisation change, the answer logged
   will be false.
*/

// let bool_start2 = encouragement.startsWith("you");

// console.log(bool_start2);

/* The same thing can be done by checking whether a string
   ends with a certain string.
*/

// let bool_end = encouragement.endsWith("Something else");

// console.log(bool_end);

/* Since the string does not Something else, it will return false. */

/* Number Methods */

/* Checking If Something Is (Not) A Number */

/* This can be done with isNaN(). */

// let x = 34;

// console.log(isNaN(x)); // This will log false to the console.

// console.log(!isNaN(x)); // This will log true to the console.

// let str = "hi";

// console.log(isNaN(str)); // This will log true to the console.

/* Since x is a number, isNaN will be false.

   This result negated becomes true,
   since x is a number.

   The string hi is not a number,
   so it will become false.
*/

/* Checking If Something Is Finite */

/* isFinite() returns false for NaN, Infinity, and undefined,
   and true for all other values.
*/

// let x = 3;

// let str = "finite";

// console.log(isFinite(x)); // This will log true to the console.

// console.log(isFinite(str)); // This will log false to the console.

// console.log(isFinite(Infinity)); // This will log false to the console.

// console.log(isFinite(10 / 0)); // This will log false to the console.

/* The only finite number in this list is x.
   The other numbers are not finite.

   A string is not a number and is therefore not finite.

   Infinity is not finite and 10 divided by 0
   returns Infinity (not an error).
*/

/* Checking If Something Is An Integer */

/* The process is done with isInteger().

   Unlike isNaN() and isFinite(), 
   isInteger() has not been made global 
   and we will have to refer to the Number object to use it.

   isInteger() returns true if the value is an integer
   and false when it is not.
*/

// let x = 3;

// let str = "integer";

// console.log(Number.isInteger(x)); // This will log true to the console.

// console.log(Number.isInteger(str)); // This will log false to the console.

// console.log(Number.isInteger(Infinity)); // This will log false to the console.

// console.log(Number.isInteger(2.4)); // This will log false to the console.

/* x is the only piece of data returning true
   because it is the only piece of data that is an integer.
*/

/* Specifying a Number of Decimals */

/* We can tell JavaScript how many decimals
   to use with the toFixed() method.

   This is different from the rounding methods in Math,
   since we can specify the number of decimals.

   It does not change the orginal value,
   so we will have to store the result.
*/

// let x = 1.23456;

// let newX = x.toFixed(2);

/* This will only leave two decimals,
   so the value of newX will be 1.23.

   It rounds the number normally.
*/

// let x = 1.23456;

// let newX = x.toFixed(3);

// console.log(x, newX);

/* This logs 1.23456, 1.235 as the output. */

/* Math Methods */

/* Finding the Highest and Lowest Number */

/* There is a built-in method max()
   to find the highest number among the arguments.
*/

// let highest = Math.max(2, 56, 12, 1, 233, 4);

// console.log(highest);

/* It logs 233 because that is the highest number.

   In a similar way, we can find the lowest number:
*/

// let lowest = Math.min(2, 56, 12, 1, 233, 4);

// console.log(lowest);

/* This will log 1 because that is the lowest number.

   If you try to do this with non-numeric arguments,
   you will get NaN as a result:
*/

// let highestOfWords = Math.max("hi", 3, "bye");

// console.log(highestOfWords);

/* It is not giving 3 as output,
   because it is not ignoring the text
   but concluding that it cannot determine whether hi
   should be higher or lower than 3.

   So it returns NaN instead.
*/

/* Square Root and Raising to the Power of */

/* The method sqrt() is used to calculate the square root
   of a certain number.
*/

// let result = Math.sqrt(64);

// console.log(result);

/* This will log 8 because the square root of 64 is 8.

   In order to raise a number to a certain power,
   we can use the pow(base, exponent) function:
*/

// let result2 = Math.pow(5, 3);

// console.log(result2);

/* We are raising 5 to the power of 3,
   so the result will be 125.
*/

/* Turning Decimals Into Integers */

/* If you want to round a number,
   you can use the round() method:
*/

// let x = 6.78;
// let y = 5.34;

// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

/* The above pieces of code are using normal rounding.

   It is also possible that you do not want
   to round down, but up.

   This can be done using the ceil() method.
*/

// console.log("X:", x, "becomes", Math.ceil(x));

// console.log("Y:", y, "becomes", Math.ceil(y));

/* The ceil() method is always rounding up
   to the first integer it encounters.

   Be careful with negative numbers
   because -5 is higher than -6.
*/

// let negativeX = -x;
// let negativeY = -y;

// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

/* The floor() method is doing the exact opposite
   of the ceil() method.

   It rounds down to the nearest integer number.
*/

// console.log("X:", x, "becomes", Math.floor(x));
// console.log("Y:", y, "becomes", Math.floor(y));

/* Be careful with negative numbers
   because it can feel counterintuitive.
*/

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

/* trunc()

   This method gives the exact same result as floor()
   for positive numbers,
   but it gets to these results differently.

   The method is not rounding down,
   it is only returing the integer part - this means
   that it is removing the decimals.
*/

// console.log("X:", x, "becomes", Math.trunc(x));
// console.log("Y:", y, "becomes", Math.trunc(y));

/* Whenever you need to round down,
   you will have to use floor().

   If you need the integer part of the number,
   you will need trunc().
*/

/* Exponent and Logarithm */

/* exp() method

   It returns the number to which e must be raised
   to get the input.

   We can use the exp() built-in method of Math
   to calculate the exponent,
   and the log() method to calculate
   the natural logarithm.
*/

// let x = 2;

// let exp = Math.exp(x);

// console.log("Exp:", exp);

// let log = Math.log(exp);

// console.log("Log:", log);


/* Date Methods */

/* In order to work with dates in JavaScript,
   we use the built-in Date object.
*/

/* Creating Dates */

/* You can create dates by using a variety of constructors. */

// let currentDateTime = new Date();

// console.log(currentDateTime);

/* There is a built-in method, now(),
   that returns the current date and time,
   similar to what the no argument constructor does.
*/

// let now2 = Date.now();

// console.log(now2);

/* This will log the current time,
   represented in seconds since January 1st 1970.
*/

/* JavaScript can also convert many string formats
   to a date.

   Mind the order in which days and months of dates
   are presented in the date format
   and the interpreter of JavaScript.
*/

/* You can also specify a certain date using a constructor. */

/* Methods to Get and Set the Elements of a Date */

let d = new Date();

// console.log("Day of week:", d.getDay());

// console.log("Day of month:", d.getDate());

// console.log("Month:", d.getMonth());

// console.log("Year:", d.getFullYear);

// console.log("Seconds:", d.getSeconds());

// console.log("Milliseconds:", d.getMilliseconds());

// console.log("Time:", d.getTime());

/* Dates can be changed using the set method. */

// d.setFullYear(2010);

// console.log(d);

// d.setMonth(9);

// console.log(d);

/* In order to change the day,
   we have to call the setDate() method
   and not the setDay() method.

   There is no setDay() method, since the day of the week
   is deducted from the specific date.

   We cannot change that a date falls on a particular day,
   but we can change the number of days of the month.
*/ 

// d.setDate(10);

// console.log(d);

/* Changing hours is also possible. */

// d.setHours(10);

// console.log(d);

/* If you call setHours() with a number higher than 24,
   it will roll over to the next date
   (1 per 24 hours).

   After using the modulo operator, whatever is left over
   from hours % 24 will be the hours.

   The same process applies
   for minutes, seconds, and milliseconds.
*/

/* Parsing Dates */

/* With the built-in parse() method,
   we can parse epoch dates from strings.

   The method accepts many formats,
   but you must be careful
   with the order of days and months.
*/

// let d1 = Date.parse("June 5, 2021");

// console.log(d1);

// let d2 = Date.parse("6/5/2021");

// console.log(d2);

/* The input for the parse is ISO formats of dates.

   Ensure that you know what the format
   of the incoming string is
   so that you do not confuse months and days.

   Ensure that you know the behaviour of the implementations.
*/

/* Converting a Date to a String */

// console.log(d.toDateString());

// console.log(d.toLocaleDateString()); // The date is still converted, albeit differently.
