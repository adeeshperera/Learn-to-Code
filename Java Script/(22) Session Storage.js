// Set data in session storage
function setSessionData(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
    console.log(`Data with key '${key}' set in session storage.`);
}

// Get data from session storage
function getSessionData(key) {
    const data = sessionStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        console.log(`No data found with key '${key}' in session storage.`);
        return null;
    }
}

// Remove data from session storage
function removeSessionData(key) {
    sessionStorage.removeItem(key);
    console.log(`Data with key '${key}' removed from session storage.`);
}

// Clear all data from session storage
function clearSessionStorage() {
    sessionStorage.clear();
    console.log("Session storage cleared.");
}

// Example usage
setSessionData('username', 'JohnDoe');
const username = getSessionData('username');
console.log(`Username retrieved from session storage: ${username}`);

// Removing data example
removeSessionData('username');
const deletedUsername = getSessionData('username');
console.log(`Attempted to retrieve deleted username: ${deletedUsername}`);

// Clear session storage example
clearSessionStorage();
const clearedUsername = getSessionData('username');
console.log(`Attempted to retrieve data after clearing session storage: ${clearedUsername}`);

