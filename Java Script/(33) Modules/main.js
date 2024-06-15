// File: main.js
// This is the main module that imports functions and constants from mathUtils.js.

// Importing the default export as a named import
import customAdd from './mathUtils.js';

// Importing named exports
import { multiply, PI } from './mathUtils.js';

// Using the imported functions and constants
console.log(customAdd(2, 3)); // Output: 5
console.log(multiply(2, 3));   // Output: 6
console.log(PI);               // Output: 3.14159
