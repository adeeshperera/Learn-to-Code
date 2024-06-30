//constructor() Method
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

//this Keyword
class Person {
	constructor(name) {
		this.name = name; // 'this' refers to the current instance of Person
		//It helps to identify which is property of class and which is function parameter
	}
}

//Creating a Class Instance
const person1 = new Person("Alice");

//Create a Class Method
class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log(`Hello, my name is ${this.name}.`);
	}
}

person1.greet(); // Output: Hello, my name is Alice.  //Executes the greet() method on person1 instance

//Inheritance (extend keyword)
class Student extends Person {
	constructor(name, grade) {
		super(name); // Calls the superclass constructor with 'super'
		this.grade = grade;
	}

	study() {
		console.log(`${this.name} is studying.`);
	}
}

const student1 = new Student("Bob", 10);
student1.greet(); // Inherited from Person class
student1.study(); // Output: Bob is studying.

//Method overriding
class Student extends Person {
	greet() {
		console.log(`Hi, I'm ${this.name}, a student.`);
	}
}

//Encapsulation
//Private Properties (# key)
class Example {
	#privateField;

	constructor() {
		this.#privateField = 10;
	}
}
//Private Methods (# key)
class Example {
	#privateMethod() {
		console.log("This is a private method.");
	}

	publicMethod() {
		this.#privateMethod(); // Private method called within the class
	}
}

//Getters (get Keyword)
class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	get area() {
		return Math.PI * this.radius * this.radius;
	}
}

const circle = new Circle(5);
console.log(circle.area); // Output: 78.53981633974483

//Static Properties (static keyword)
class Point {
	static origin = new Point(0, 0);

	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

console.log(Point.origin); // Output: Point { x: 0, y: 0 }

//Static Methods
class MathUtils {
	static add(x, y) {
		return x + y;
	}
}

console.log(MathUtils.add(5, 3)); // Output: 8
