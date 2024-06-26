// Destructuring Arrays
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Destructuring Objects
let person = { name: "John", age: 30, city: "New York" };
let { name, age } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30

// Destructuring assignment in function arguments
// Define the newPerson object
let newPerson = {
	name: "John Doe",
	age: 30,
	city: "New York",
};

// Define the function using destructuring in parameters
function printPersonInfo({ name, age, city }) {
	console.log(`${name} is ${age} years old and lives in ${city}.`);
}

// Call the function with the newPerson object as argument
printPersonInfo(newPerson); // Output: "John Doe is 30 years old and lives in New York."
