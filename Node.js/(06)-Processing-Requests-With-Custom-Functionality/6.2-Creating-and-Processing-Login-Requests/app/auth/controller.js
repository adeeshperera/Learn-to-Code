import { view } from "./view.js";

export const showLogin = (req, res) => res.send(view("loginForm"));

export function authenticate(req, res) {
	const { email, password } = req.body; // Extracts the email and password values from the req.body object

	if (!email || !password) {
		// Checks if either email or password is missing
		res.redirect("/login");
		return;
	}

	if (email.toLowerCase() === "admin@admin.com" && password === "password") {
		// Checks if the provided email (converted to lowercase) is 'admin@admin.com' and the password is 'password'
		// TODO: allow user

		res.redirect("/guitars");
	} else {
		res.redirect("/login");
	}
}
