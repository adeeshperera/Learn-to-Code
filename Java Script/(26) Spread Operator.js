// Joining arrays using spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2]; // Spread operator used to concatenate arrays
console.log("Merged Array:", mergedArray); // Output: Merged Array: [1, 2, 3, 4, 5, 6]

// Using array elements as function arguments
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum(...numbers); // Spread operator used to pass array elements as arguments
console.log("Sum:", result); // Output: Sum: 6

// Joining objects using spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 }; // Spread operator used to merge objects
console.log("Merged Object:", mergedObject); // Output: Merged Object: {a: 1, b: 2, c: 3, d: 4}

