// Define a function called myMap which takes two arguments:
// 1. array: The array to iterate over
// 2. callback: The function to apply to each element of the array
function myMap(array, callback) {
    // Create an empty array to store the results
    var newArray = [];
    
    // Iterate over each element of the input array
    for (var i = 0; i < array.length; i++) {
        // Call the callback function with the current element of the array
        // and store the result in the new array
        newArray.push(callback(array[i], i, array));
    }
    
    // Return the new array containing the results
    return newArray;
}

// Example usage of myMap:
var numbers = [1, 2, 3, 4, 5];

// Define a function to be used as a callback
function double(num) {
    return num * 2;
}

// Use myMap to double each element in the numbers array
var doubledNumbers = myMap(numbers, double);

// Print the result
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

