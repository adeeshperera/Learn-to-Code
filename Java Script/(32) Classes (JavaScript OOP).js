// Define a class named Person
class Person {
  // Constructor method to initialize object properties
  constructor(name, age) {
    this.name = name; // Set the 'name' property of the object to the provided name
    this.age = age;   // Set the 'age' property of the object to the provided age
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating a class instance (object) using the constructor
const person1 = new Person('Alice', 30);

// Accessing object properties
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30

// Calling the greet method of the object
person1.greet(); // Output: Hello, my name is Alice and I'm 30 years old.

// Parent class
class Animal {
    // Private property
    #name;

    constructor(name) {
        this.#name = name;
    }

    // Getter for private property
    getName() {
        return this.#name;
    }

    // Private method
    #makeSound(sound) {
        console.log(`${this.#name} says ${sound}`);
    }

    // Method to be overridden by subclasses
    makeSound() {
        console.log(`${this.#name} makes a sound`);
    }

    // Static method
    static getType() {
        return "Animal";
    }
}

// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name) {
        // Call super constructor to initialize parent's properties
        super(name);
    }

    // Override method
    makeSound() {
        // Call private method of parent class
        this.#makeSound("Woof");
    }

    // Static method overriding
    static getType() {
        return "Dog";
    }
}

// Static property
Animal.origin = "Earth";

// Creating objects
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy");

// Accessing private property using getter
console.log(animal.getName()); // Output: Generic Animal

// Accessing private property indirectly
dog.makeSound(); // Output: Buddy says Woof

// Accessing static property
console.log(Animal.origin); // Output: Earth

// Accessing static method
console.log(Animal.getType()); // Output: Animal
console.log(Dog.getType());    // Output: Dog

