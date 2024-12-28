"use strict";

/* Create a class to track the employees of a company: */

/* 1. Use first names, last names,
      and the number of years worked
      as values in the constructor.
*/

class Employees {

    constructor(firstname, lastname, numberofyears) {

        this.firstname = firstname;

        this.lastname = lastname;

        this.numberofyears = numberofyears;

    };

};

/* 2. Create two or more people with values for their first names,
      last names, and the number of years they have worked
      at the company.

      Add the people into an array.
*/

var employee1 = new Employees("Michael", "Jackson", 30);

var employee2 = new Employees("George", "Michael", 36);

var staff = [

    employee1,

    employee2

];

/* 3. Set up a prototype to return the details
      of the first and last names of the person
      and how long they have worked at the company.
*/

Employees.prototype.details = function () {

    return `This employee, ${this.firstname} ${this.lastname}, has worked for ${this.numberofyears} years.`;

};

/* 4. Iterate the contents of the array
      to output the results into the console,
      adding some text to make the output a full sentence.
*/

for (var i = 0; i < staff.length; i++) {

    console.log(staff[i].details());

};