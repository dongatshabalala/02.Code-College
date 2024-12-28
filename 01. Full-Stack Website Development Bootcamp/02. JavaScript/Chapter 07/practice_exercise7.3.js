"use strict";

/* Create a class that contains properties
   for different animal species
   and the sound that each species makes,
   and create two (or more) animals:
*/

/* 1. Create a method that prints a given animal and its sound. */

class Animal {

    #species;

    #soundmade;

    #hours;

    constructor(species, soundmade, hours) {

        this.species = species;

        this.soundmade = soundmade;

        this.hours = hours;

    };

    soundAnimal(species, soundmade) {

        return `The species is ${this.species} and the sound it makes is ${this.soundmade}.`;

    };

};

/* 2. Add a prototype with another action for the animal. */

Animal.prototype.sleep = function () {

    return `The ${this.species} sleeps for ${this.hours} hours.`;

};

/* 3. Output an entire animal object into the console. */

let elephant = new Animal("elephant", "trumpets", 6);
let jaguar = new Animal("jaguar", "growls", 11);

console.log(elephant.soundAnimal());
console.log(elephant.sleep());
console.log(jaguar.soundAnimal());
console.log(jaguar.sleep());
