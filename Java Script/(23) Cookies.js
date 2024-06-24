// Creating (Setting) Cookies
document.cookie = "name=value; expires=date; path=path; domain=domain; secure";

// Function to read a cookie
function getCookie(name) {
	const cookieString = document.cookie;
	const cookies = cookieString.split("; ");

	for (let cookie of cookies) {
		const [cookieName, cookieValue] = cookie.split("=");
		if (cookieName === name) {
			return cookieValue;
		}
	}
	return null;
}

const getUsername = getCookie("username");
console.log(getUsername); // Outputs: John Doe

// Function to delete a cookie
function deleteCookie(name) {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

deleteCookie("username");

// Example usage
// Set a cookie with name "username" and value "John Doe" that expires in 7 days
setCookie("username", "John Doe", 7);

// Get the value of the "username" cookie
const username = getCookie("username");
console.log("Username:", username); // Outputs: "John Doe"

// Delete the "username" cookie
deleteCookie("username");

// After deletion, attempt to get the "username" cookie again
const deletedUsername = getCookie("username");
console.log("Deleted Username:", deletedUsername); // Outputs: null
