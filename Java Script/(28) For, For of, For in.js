// Create an array of fruits
const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// Using a for loop to iterate over the array
console.log('Using for loop:');
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
console.log('\n');

// Using a for...of loop to iterate over the array
console.log('Using for...of loop:');
for (const fruit of fruits) {
    console.log(fruit);
}
console.log('\n');

// Creating an object with some properties
const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

// Using a for...in loop to iterate over the object properties
console.log('Using for...in loop:');
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

