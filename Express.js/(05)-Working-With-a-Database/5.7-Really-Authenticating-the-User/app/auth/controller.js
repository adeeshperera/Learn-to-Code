import { compare } from "./crypt.js"; // Import the password comparison function
import { User } from "./model.js"; // Import the User model for database operations

// Render the login page
export const showLogin = (req, res) =>
	res.render("auth/login", { title: "Login", layout: "plain" });

// Authenticate user credentials
export async function authenticate(req, res) {
	const { email, password } = req.body; // Extract email and password from the request body

	// Redirect to login page if email or password is missing
	if (!email || !password) {
		res.redirect("/login");
		return;
	}

	// Find the user by email in the database (convert to lowercase for case-insensitive match)
	const user = await User.findOne({ email: email.toLowerCase() });

	// Redirect to login page if no user is found
	if (!user) {
		res.redirect("/login");
		return;
	}

	// Compare the provided password with the stored hashed password
	if (await compare(password, user.password)) {
		// If passwords match, set user session
		req.session.user = {
			email,
			isAuthenticated: true,
		};

		// Redirect to the guitars page
		res.redirect("/guitars");
	} else {
		// If passwords don't match, redirect to login page
		res.redirect("/login");
	}
}

// Middleware to check if the user is authenticated
export function checkAuth(req, res, next) {
	// Check if user is authenticated
	let isAuthenticated = req.session.user && req.session.user.isAuthenticated;

	if (isAuthenticated) {
		// If authenticated, proceed to the next middleware or route
		next();
	} else {
		// If not authenticated, redirect to login page
		res.redirect("/login");
	}
}

// Log out the user by destroying the session
export function logout(req, res) {
	req.session.destroy(); // Clear the session data

	// Redirect to the home page
	res.redirect("/");
}
