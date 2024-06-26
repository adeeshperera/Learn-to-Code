//Arrays
//Copying an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

//Concatenating Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];

//Adding Elements to an Array
const array = [1, 2, 3];
const newArray = [...array, 4, 5, 6];

//Passing Arrays as Arguments
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
const result = sum(...numbers);

//Objects
//Copying Objects (Shallow Copy)
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

//Merging Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
