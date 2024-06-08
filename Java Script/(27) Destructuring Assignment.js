// Destructuring assignment with arrays
const numbers = [1, 2, 3, 4, 5];

// Extracting values from arrays into variables
const [first, second, , fourth] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4

// Destructuring assignment with objects
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Extracting object properties into variables
const { name, age, city } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

// Destructuring assignment in function arguments
function printInfo({ name, age, city }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

printInfo(person); // Output: Name: John, Age: 30, City: New York

