// Set data in session storage
// Store data
sessionStorage.setItem("key", "value");

// Get data from session storage
// Retrieve data
const storedValue = sessionStorage.getItem("key");
console.log(storedValue); // Outputs: 'value'

// Remove data from session storage
sessionStorage.removeItem("key");

// Clear all data from session storage
sessionStorage.clear();

// Example usage
// Store data
sessionStorage.setItem("username", "JohnDoe");

// Retrieve data
const username = sessionStorage.getItem("username");
console.log(username); // Outputs: 'JohnDoe'

// Remove data
sessionStorage.removeItem("username");

// Clear all data (for cleanup, optional)
sessionStorage.clear();
