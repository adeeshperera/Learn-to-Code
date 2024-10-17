import { view } from "./view.js";

export const showLogin = (req, res) => res.send(view("loginForm"));

export function authenticate(req, res) {
	const { email, password } = req.body;

	if (!email || !password) {
		res.redirect("/login");
		return;
	}

	// Session
	if (email.toLowerCase() === "admin@admin.com" && password === "password") {
		req.session.user = {
			email,
			isAuthenticated: true,
		}; // Creating a user entry in the session storage that includes: The user's email address, A note that says the user is currently logged in

		res.redirect("/guitars");
	} else {
		res.redirect("/login");
	}
}

// Check if a user is logged in
export function checkAuth(req, res, next) {
	let isAuthenticated = req.session.user && req.session.user.isAuthenticated;
	// Checks if the user is logged in by evaluating two conditions (The user exists and they are logged in)

	if (isAuthenticated) {
		next();
	} else {
		res.redirect("/login");
	}
}

// Logout
export function logout(req, res) {
	req.session.destroy(); // Deletes the entire session from the server

	res.redirect("/");
}
