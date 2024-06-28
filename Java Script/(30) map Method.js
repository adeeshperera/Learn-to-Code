// Example 1: Squaring each number in an array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example 2: Converting Fahrenheit to Celsius
const fahrenheitTemps = [32, 68, 104, 140];
const celsiusTemps = fahrenheitTemps.map((f) => Math.round(((f - 32) * 5) / 9));
console.log(celsiusTemps); // Output: [0, 20, 40, 60]

//Extracting values from objects in an array
const people = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 35 },
];
const names = people.map((person) => person.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
