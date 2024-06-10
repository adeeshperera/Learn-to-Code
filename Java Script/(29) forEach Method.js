// Define a function called myForEach which takes an array and a callback function as arguments
function myForEach(array, callback) {
    // Loop through each element of the array
    for (let i = 0; i < array.length; i++) {
        // Call the callback function for each element passing the current element and its index
        callback(array[i], i, array);
    }
}

// Example usage of myForEach function
const numbers = [1, 2, 3, 4, 5];

// Call myForEach function passing the numbers array and a callback function
myForEach(numbers, function(element, index, array) {
    // Print each element along with its index
    console.log(`Element ${element} at index ${index}`);
});

