try {
	// Code that may throw an exception
} catch (error) {
	// Code to handle the exception
}

try {
	// Code that may throw an exception
} catch (error) {
	// Code to handle the exception
	console.error("An error occurred:", error.message);
} finally {
	// Code that always executes, regardless of whether there was an exception
	console.log("Cleanup or final operations here");
}

// Example 01: Handling division by zero
let a = 10;
let b = 0;

try {
	let result = a / b; // Attempt division
	console.log(`Result of ${a} divided by ${b} is:`, result);
} catch (error) {
	console.error("Error:", error.message); // Handle division by zero or other errors
} finally {
	console.log("Division operation completed"); // Cleanup or final actions
}

// Example 02: Error handling not caught by try...catch

// Function to greet a user with a name
function greetUser(name) {
	// Check if name is provided
	if (!name) {
		throw new Error("Name is required for greeting.");
	}

	return `Hello, ${name}!`;
}

// Example usage with try...catch
try {
	let greeting1 = greetUser("Alice");
	console.log(greeting1); // Output: Hello, Alice!

	let greeting2 = greetUser(); // This will throw an error
	console.log(greeting2); // This line will not execute
} catch (error) {
	console.error("Error:", error.message);
}
//Output: Hello, Alice! Error: Name is required for greeting.
