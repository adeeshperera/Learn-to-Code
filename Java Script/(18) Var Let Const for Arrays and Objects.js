// Using var for Arrays
var arrayVar = [1, 2, 3];
arrayVar.push(4); // Modifying the array is allowed
console.log(arrayVar); // Output: [1, 2, 3, 4]

// Using var for Objects
var objectVar = { key: 'value' };
objectVar.key = 'new value'; // Modifying the object is allowed
console.log(objectVar); // Output: { key: 'new value' }

// Using let for Arrays
let arrayLet = [1, 2, 3];
arrayLet.push(4); // Modifying the array is allowed
console.log(arrayLet); // Output: [1, 2, 3, 4]

// Using let for Objects
let objectLet = { key: 'value' };
objectLet.key = 'new value'; // Modifying the object is allowed
console.log(objectLet); // Output: { key: 'new value' }

// Using const for Arrays
const arrayConst = [1, 2, 3];
// arrayConst.push(4); // Trying to modify the array will throw an error
console.log(arrayConst); // Output: [1, 2, 3]

// Using const for Objects
const objectConst = { key: 'value' };
// objectConst.key = 'new value'; // Trying to modify the object will throw an error
console.log(objectConst); // Output: { key: 'value' }

