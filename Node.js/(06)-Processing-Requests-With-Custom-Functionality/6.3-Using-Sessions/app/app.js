import express from "express";
import { routes as guitarRoutes } from "./guitars/routes.js";
import { routes as authRoutes } from "./auth/routes.js";
import session from "express-session"; // Sessions

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

// Session middleware
app.use(
	session({
		secret: "birds fly high asdlkfjlksajdfsdafZXCV234asdf",
		saveUninitialized: false, // Only sessions that have been changed or used (like after a user logs in) will be saved (Only going to set up a session for users who are authenticated)
		resave: false, // The session will only be saved back to the session store if it has been modified
	})
	// secret: A string used to sign the session ID cookie
	// saveUninitialized: true - A user just visits the site but doesn’t interact (like logging in), their session will still be saved (Don't need to store sessions for unauthenticated users)
	// resave: true - The session will be saved back to the session store on every request, regardless of whether the session data has changed or not
);

app.use("/guitars", guitarRoutes);

app.use("/", authRoutes); // Log in

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.get("/sum/:a-:b", (req, res) => {
	res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`);
});

// / -- Home Page
// /guitars -- index page/list
// /guitars/id -- individual guitar by id

export function start() {
	app.listen(80, () => {
		console.log("Listening at http://localhost");
	});
}
