// Setting a value
localStorage.setItem("key", "value");

// Getting a value
let value = localStorage.getItem("key");

// Removing a single item
localStorage.removeItem("key");

// Clearing all items
localStorage.clear();

// Example usage:
// Setting a value
localStorage.setItem("username", "JohnDoe");

// Getting a value
let username = localStorage.getItem("username");
console.log(username); // Output: JohnDoe

// Removing a value
localStorage.removeItem("username");

// Clearing all data
localStorage.clear();
