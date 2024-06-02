// Function to set an item in local storage
function setItem(key, value) {
    // Check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Store the key-value pair in local storage
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Item "${key}" set successfully.`);
    } else {
        console.error("Local storage is not supported in this browser.");
    }
}

// Function to get an item from local storage
function getItem(key) {
    // Check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Retrieve the item from local storage
        const item = localStorage.getItem(key);
        // Parse JSON string to JavaScript object
        return JSON.parse(item);
    } else {
        console.error("Local storage is not supported in this browser.");
        return null;
    }
}

// Function to remove an item from local storage
function removeItem(key) {
    // Check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Remove the item from local storage
        localStorage.removeItem(key);
        console.log(`Item "${key}" removed successfully.`);
    } else {
        console.error("Local storage is not supported in this browser.");
    }
}

// Function to clear all items from local storage
function clearStorage() {
    // Check if local storage is supported by the browser
    if (typeof(Storage) !== "undefined") {
        // Clear all items from local storage
        localStorage.clear();
        console.log("Local storage cleared successfully.");
    } else {
        console.error("Local storage is not supported in this browser.");
    }
}

// Example usage:
setItem("username", "john_doe"); // Set an item
const username = getItem("username"); // Get an item
console.log("Username:", username);

// Remove an item
removeItem("username");

// Clear all items
clearStorage();

