"use strict";

/* Take the following steps to create a person class,
   and print instances of friends' names:
*/

/* 1. Create a class for Person including the constructor
      for firstname and lastname.
*/

class Person {

    constructor(firstname, lastname) {

        this.firstname = firstname;

        this.lastname = lastname;

    };

};

/* 2. Create a variable and assign a value of the new Person object
      using your friend's first and last names.
*/

let friendName = new Person("Michael", "Jackson");

console.log("Hello", friendName.firstname, friendName.lastname);

/* 3. Now add a second variable with another friend's name
      using their first name and last name.
*/

let anotherFriend = new Person("George", "Michael");

console.log("Hello", anotherFriend.firstname, anotherFriend.lastname);

/* 4. Output both friends into the console with a greeting of hello. */
