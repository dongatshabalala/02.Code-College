"use strict";

/* Classes are a blueprint or template for object creation.

   Classes enable object-oriented programming.

   Object-oriented programming reduced the complexity of applications
   and increased maintainability.
*/

/* Object-Oriented Programming */

/* Object-oriented programming involves structuring code in objects,
   leading to more maintainable and resuable code.

   Working with object-oriented programming teaches you
   to really try to think of all sorts of topics in objects,
   by bundling properties in such a way that they can be wrapped
   in a blueprint called a class.

   This in turn might be inheriting properties from a parent class.
*/

/* Classes and Objects */

/* Objects are a collection of properties and methods. */

/* Example of an Object */

/*let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua"
};*/

/* Classes in JavaScript encapsulate data and functions
   that are part of that class.

   If you create a class, you can later create objects
   using that class using the following syntax:
*/

/*class ClassName {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}*/

//IT IS COMMON CONVENTION FOR CLASS NAMES TO START WITH A CAPITAL LETTER.

//let obj = new ClassName("arg1", "arg2");

/* This code defines a class with ClassName as a name,
   declares an obj variable, and initialises this with a new instance
   of the object.

   Two arguments are provided:

   These arguments will be used by the constructor
   to initialise the properties.

   The parameters of the constructor and the properties
   of the class (prop1 and prop2) have the same name.

   The properties of the class can be recognised by the this keyword
   in front of them.

   The this keyword refers to the object it belongs to,
   so it is the first property of the instance of ClassName.
*/

/* Classes are just some special function beneath the surface.

   An object with a special function can be created as follows:
*/

/*  function Dog(dogName, weight, color, breed) {

    this.dogName = dogName;

    this.weight = weight;

    this.color = color;

    this.breed = breed;

    };

    let dog = new Dog("Jacky", 30, "brown", "labrador");

*/

/* The dog example could have been made using a class syntax as well.

   It would have looked like this:
*/

/*class Dog {

    constructor(dogName, weight, color, breed) {

        this.dogName = dogName;

        this.weight = weight;

        this.color = color;

        this.breed = breed;

    };

};

let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

*/

/* The above results in an object with the same properties.

   If we do some logging, we will be able to see it:
*/

/* console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg."); */

/* Classes */

/* Classes are blueprints for object creation.

   We do much less typing if we need to create 20 dogs
   when we have a dog class.

   If we have to create the objects, we will have to specify
   all the properties' names each time.

   Classes reduce coding errors.
*/

/* Constructors */

/* The constructor method is a special method
   that is used to initialise objects with the class blueprint.

   There can only be one constructor in a class.

   This constructor contains properties that will be set
   when initiating the class.
*/

/* An example of a constructor in a Person class: */

/*class Person {

    constructor(firstname, lastname) {

        this.firstname = firstname;

        this.lastname = lastname;

    };

};

*/

/* JavaScript creates a special function based on the constructor.

   This function gets the class name, and it will create an object
   with the given properties.

   With this special function, you can create instances (objects) of the class.
*/

/* Here is how you can create a new object
   from the Person class:
*/

/* let p = new Person("Maaike", "van Putten"); */

/* The new word is what tells JavaScript to look
   for the special constructor function in the Person class
   and create a new object.

   The constructor gets called and returns an instance of the person object
   with the specified properties.

   This object gets stored in the p variable.
*/

/* If we use our new p variable in a logging statement,
   you can see that the properties are really set:
*/

/* console.log("Hi", p.firstname); */

/* What do you think will happen when we create a class
   without all the properties?
*/

/* let p = new Person("Maaike"); */

/* Many languages would crash, but not JavaScript.

   JavaScript just sets the remaining properties to undefined.

   You can see what happens by logging it.
*/

/* console.log("Hi", p.firstname, p.lastname); */

/* You can specify default values in constructor.

   You would do it as follows:
*/

/*class Person {

    constructor(firstname, lastname = "Doe") {

        this.firstname = firstname;

        this.lastname = lastname;

    };

};

*/

/* This way, it would not have printed Hi Maaike undefined,
   but Hi Maaike Doe.
*/

/* Methods */

/* In a class, we can specify functions.

   This means that our object can start doing things
   using the object's own properties.

   An example of the above would be printing a name.

   Functions on a class are called methods.

   When defining these methods, we do not use the function keyword.

   We start directly with the name:
*/

/*class Person {

    constructor(firstname, lastname) {

        this.firstname = firstname;

        this.lastname = lastname;

    };

    greet() {

        console.log("Hi there! I'm", this.firstname, this.lastname);

    };

};

*/

/* We can call the greet method on a Person object like this: */

/* let p = new Person("Maaike", "van Putten");

   p.greet();
*/

/* You can specify as many methods on a class as you want.

   In the example below, we are using the firstname property.

   We do so by saying this.property.
   If we had a person with a different value
   for the firstname property, for example, Rob,
   it would have printed the following:
*/

/* class Person {

    constructor(firstname, lastname) {

        this.firstname = firstname;

        this.lastname = lastname;

    };

    greet() {

        console.log("Hi there!");

    };

    compliment(name, object) {

        return "That's a wonderful " + object + ", " + name;

    };

};

*/

/* The compliment function does not output anything itself,
   so we are logging it.
*/

/* let compliment = p.compliment("Harry", "hat"); */

/* console.log(compliment); */

/* In the above case, we are sending parameters into our method,
   because you do not usually compliment your own properties.

   However, whenever the method does not require external input
   but only the properties of the object,
   no parameters will work and the method can use the properties
   of its object.
*/

/* Properties */

/* Properties, sometimes also called fields,
   hold the data of the class.

   One kind of property, as an example, is shown below:
*/

/* class Person {

    constructor(firstname, lastname) {

        this.firstname = firstname;

        this.lastname = lastname;

    };

   };

*/

/* The Person class gets two properties
   from the constructor: firstname and lastname.

   Properties can be added or removed just like we did for objects.

   These properties can be accessed from outside the class.

   This was seen when we logged properties outside the class
   by accessing them on the instance that follows:
*/

/* let p = new Person("Maaike", "van Putten");

   console.log("Hi", p.firstname);
*/

/* Often, it is not desirable to provide direct access to our properties.

   We want our class to be in control of the values of properties
   for several reasons.

   Maybe we want to do validation on a property
   to assure it has a certain value.

   For example, imagine wanting to validate an age
   as not being lower than 18.

   We can achieve this by making direct access to the property
   from outside the class impossible.

   This is how to add properties that are not accessible from outside.

   We prefix them with a # symbol:
*/

/* class Person {

    #firstname;

    #lastname;

    constructor(firstname, lastname) {

        this.#firstname = firstname;

        this.#lastname = lastname;

    };

  };

*/

/* Right now, the firstname and lastname properties
   cannot be accessed from outside the class.

   This is done by adding # in front of the property.

   If we try it:
*/

/* let p = new Person("Maria", "Saga");

   console.log(p.firstname);
*/

/* The above gives you undefined. */

/* If we wanted to make sure we could only create objects
   with names starting with an "M," 
   we could modify our constructor a bit:
*/

/* constructor(firstname, lastname) {

    if (firstname.startsWith("M")) {

        this.#firstname = firstname;

    } else {

        this.#firstname = "M" + firstname;

    }

    this.#lastname = lastname;

  };

*/

/* Now, when you try to create a person that has a firstname value
   that does not start with an "M,"
   it will add an M in front.

   So for example, 
   the value of the following first name is Mkay: 
*/

/* let p = new Person("kay", "Moon"); */

/* The above is a very silly example of validation.

   At this point, 
   we cannot access it from outside the class at all 
   after the constructor.

   We can only access it from inside the class.
*/

/* Getters and Setters */

/* Getters and setters are special properties that we can use
   to get data from a class
   and to set data fields on the class.

   Getters and setters are computed properties.

   So they are more like properties than they are like functions.

   We call them accessors.

   They do look a bit like functions
   because they have () behind them, but they are not.

   These accessors start with the get and set keywords.

   It is considered good practice to make fields private
   as much as possible
   and provide access to them using getters and setters.

   This way, the properties cannot be set from outside
   without the object itself being in control.

   This principle is called encapsulation.

   The class encapsulates the data, and the object is in control
   of its own fields.

   Here is how to do it:
*/

/* class Person {

    #firstname;

    #lastname;

    constructor(firstname, lastname) {

        this.#firstname = firstname;

        this.#lastname = lastname;

    };

    get firstname() {

        return this.#firstname;

    };

    set firstname(firstname) {

        this.#firstname = firstname;

    };

    get lastname() {

        return this.#lastname;

    };

    set lastname(lastname) {

        this.#lastname = lastname;

    };

   };
    
*/

/* The getter is used to get the property.

   The getter does not take any parameters,
   but simply returns the property.

   The setter is the other way around: it takes a parameter,
   assigns this new value to the property,
   and returns nothing.

   The setter can contain more logic,
   for example, some validation.

   The getter can be used outside the object
   as if it were a property.

   The properties are no longer directly accessible 
   from outside the class,
   but can be accessed via the getter to get the value
   and via the setter to update the value.

   Here is how to use it outside the class instance:
*/

/* let p = new Person("Maria", "Saga");

   console.log(p.firstname);
*/

/* We have created a new Person object
   with a first name of Maria and a last name of Saga.

   The output is showing the first name,
   which is only possible because we have a getter accessor.

   We can also set the value to something else,
   because there is a setter.

   Here is how to update the first name,
   so the name is no longer Maria, but Adnane.
*/

/* p.firstname = "Adnane"; */

/* At this point, nothing special is happening in the setter.

   We could do a similar validation 
   as in the constructor before, like this:
*/

/* set firstname(firstname) {

    if (firstname.startsWith("M")) {

        this.#firstname = firstname;

    } else {

        this.#firstname = "M" + firstname;

    };

   };
    
*/

/* The above will check whether firstname starts with an M,
   and if it does, it will update the value
   to whatever the firstname parameter is.

   If it does not, it will concatenate an M
   in front of the parameter.

   We do not access firstname as if it was a function.

   If you put two parentheses () after it.
   you would actually get an error
   telling you that it is not a function.
*/

/* Inheritance */

/* Inheritance is one of the key concepts of OOP,
   object-oriented programming.

   It is the concept that classes can have child classes
   that inherit the properties and methods
   from the parent class.

   For example, if you needed all sorts of vehicle objects
   in your application,
   you could speciy a class named Vehicle
   in which you specify some shared properties and methods of vehicles.

   You would then go ahead and create the specific child classes
   based on this Vehicle class,
   for example, boat, car, bicycle, and motorcycle.

   This could be a very simple version of the Vehicle class:
*/

/* class Vehicle {

    constructor(color, currentSpeed, maxSpeed) {

        this.color = color;

        this.currentSpeed = currentSpeed;

        this.maxSpeed = maxSpeed;

    };

    move() {

        console.log("moving at", this.currentSpeed);

    };

    accelerate(amount) {

        this.currentSpeed += amount;

    };

   };
*/

/* Here we have two methods in our Vehicle class:
   move and accelerate.

   And this could be a Motorcycle class
   inheriting from this class using the extends keyword:
*/

/* class Motorcycle extends Vehicle {

    constructor(color, currentSpeed, maxSpeed, fuel) {

        super(color, currentSpeed, maxSpeed);

        this.fuel = fuel;

    };

    doWheelie() {

        console.log("Driving on one wheel!");

    };

   };
*/

/* With the extends keyword, we specify that a certain class
   is the child of another class.

   In this case, Motorcycle is a child class of Vehicle.

   This means that we will have access to properties and methods
   from Vehicle in our Motorcycle class.

   We have added a special doWheelie() method.

   This is not something that makes sense
   to add to the Vehicle class,
   because this is an action that is specific to certain vehicles.

   The super word in the constructor
   is calling the constructor from the parent,
   the Vehicle constructor in this case.

   This makes sure that the fields from the parent
   are set as well and that the methods are available
   without having to do anything else:
   they are automatically inherited.

   Calling super() is not optional,
   you must do it when you are in a class that is inheriting
   from another class,
   else you will get a ReferenceError.

   Because we have access to the fields of Vehicle in Motorcycle,
   this will work:
*/

/* let motor = new Motorcycle("Black", 0, 250, "gasoline");

   console.log(motor.color);

   motor.accelerate(50);

   motor.move();
*/

/* We cannot access any Motorcycle specific properties
   or methods in our Vehicle class.

   This is because not all vehicles are motorcycles,
   so we cannot be sure
   that we would have the properties or methods from a child.

   Right now, we do not use any getters and setters here,
   but we clearly could.

   If there are getters and setters in the parent class,
   they are inherited by the child class as well.

   This way, we could influence which properties
   could be fetched and changed (and how) outside our class.

   This is a generally good practice.
*/

/* Prototypes */

/* A prototype is the mechanism in JavaScript
   that makes it possible to have objects.

   When nothing is specified when creating a class,
   the objects inherit from the Object.prototype prototype.

   This is a complex built-in JavaScript class that we can use.

   We do not need to look at how this is implemented in JavaScript,
   as we can consider it the base object
   that is always on top of the inheritance tree
   and therefore always present in our objects.

   There is a prototype property available on all classes,
   and it is always named "prototype."

   We can access it like this:
*/

/* ClassName.prototype */

/* Here is an example of how to add a function to a class
   using the prototype property.

   In order to do so, we will be using this Person class:
*/

/* class Person {

    constructor(firstname, lastname) {

        this.firstname = firstname;

        this.lastname = lastname;

    };

    greet() {

        console.log("Hi there!");

    };

   };
*/

/* And here is how to add a function to this class
   using prototype:
*/

/* Person.prototype.introduce = function () {

    console.log("Hi, I'm", this.firstname);

   };
*/

/* Prototype is a property 
   holding all the properties and methods of an object.

   So adding a function to prototype is adding a function to the class.

   You can use prototype to add properties or methods to an object.

   The above can also be done for properties:
*/

/* Person.prototype.favoriteColor = "green"; */

/* And then you can call them from instances of Person: */

/* let p = new Person("Maria", "Saga");

   console.log(p.favoriteColor);

   p.introduce();
*/

/* And it will be as if you had defined the class
   with a favourite colour holding a default value,
   and function, introduce.

   They have been added to the class and are available
   for all instances and future instances.

   So the methods and properties defined via prototype
   are really as if they were defined in the class.

   This means that overwriting them for a certain instance
   does not overwrite them for all instances.

   For example, if we were to have a second Person object,
   this person could overwrite the favoriteColor value
   and this would not change the value for our object
   with firstname as Maria.

   This is something that should not be used
   when you have control over the class code
   and you want to change it permanently.

   In that case, just change the class.

   However, you can expand existing objects like this
   and even expand existing objects conditionally.

   It is also important to know that the JavaScript
   built-in objects have prototypes and inherit from Object.prototype.

   However, be sure not to modify this prototype
   since it will affect how our JavaScript works.
*/

