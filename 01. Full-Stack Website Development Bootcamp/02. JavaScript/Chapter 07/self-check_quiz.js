//1. What is the keyword used to create a class?

// The keyword used to create a class is called class.

/*2. How would you set up a class for a person's first and last names that could
include first and last as initial properties?*/

/*class Name {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}*/

/*3. What is the concept of one thing gaining the properties and behaviors of
another thing called?*/

// The concept of one thing gaining the properties and behaviors of another thing is called inheritance.

/*4. Which of the following are true about the constructor method?
• It gets executed automatically when a new object is created.
• It should only be added afterward.
• It has to include the constructor keyword.
• It is used to initialize object properties.
• It can be used when you have multiple values.*/

/*It gets executed automatically when a new object is created.*/

/*True. Constructors are automatically called on when an object is created to initialize the object.*/

/*Itshould only be added afterward.*/

/*False. The constructor method is usually defined within a class or a prototype
before creating variants of that class or prototype. Adding it afterward could result in unexpected behavior or errors.*/

/*It has to include the constructor keyword.*/

/*True. The constructor method is identified by a specific keyword.*/

/*It is used to initialize the object properties.*/

/*True. The constructor method initializes the state of an object, which typically involves setting initial values to its properties.*/

/*It can be used when you have multiple values.*/

/*Constructors are usually used to initialize object properties which could involve setting multiple values.*/

/*5. Troubleshoot the following code so that the prototype outputs the first and
last name of the Person into the console.Which is the correct syntax for the Person prototype?*/

/*function Person(first, last) {
    this.first = first;
    this.last = last;
}*/

// What should go here: A, B, or C?

// const friend1 = new Person("Laurence", "Svekis");
// console.log(friend1.getName());

/*A)
Person.prototype.getName = (first, last) {
    return this.first + " " + this.last;
};

B)
Person.prototype.getName = function getName() {
    return this.first + " " + this.last;
};

C)
Person.prototype = function getName() {
    return this.first + " " + this.last;
};*/

// What should go into the Person function is B.
