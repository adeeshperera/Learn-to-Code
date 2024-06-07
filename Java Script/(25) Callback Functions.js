// Define a function that takes two numbers and a callback function as parameters
function calculate(num1, num2, callback) {
    // Perform some operation with the two numbers
    let result = num1 + num2;
    
    // Call the callback function with the result as an argument
    callback(result);
}

// Define a callback function that logs the result to the console
function logResult(result) {
    console.log("The result is: " + result);
}

// Define another callback function that multiplies the result by 2 and logs it
function multiplyByTwo(result) {
    let multipliedResult = result * 2;
    console.log("The result multiplied by two is: " + multipliedResult);
}

// Call the calculate function with numbers 5 and 10, and the logResult callback
calculate(5, 10, logResult); // Output: "The result is: 15"

// Call the calculate function with numbers 3 and 7, and the multiplyByTwo callback
calculate(3, 7, multiplyByTwo); // Output: "The result multiplied by two is: 20"

