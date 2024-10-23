import express from "express";
import { routes as guitarRoutes } from "./guitars/routes.js";
import { routes as authRoutes } from "./auth/routes.js";
import session from "express-session";
import { create as createHandlebars } from "express-handlebars";

const app = express();
const hbs = createHandlebars();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./app/views");

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(
	session({
		secret: "birds fly high asdlkfjlksajdfsdafZXCV234asdf",
		saveUninitialized: false,
		resave: false,
	})
);

// Middleware function to attach user information to response locals if authenticated
app.use((req, res, next) => {
	if (req.session.user && req.session.user.isAuthenticated) {
		// Check if there is a user in the session and if the user is authenticated
		res.locals.user = req.session.user; // Attach the user object to `res.locals` so it can be accessed in views
		// .locals - Which is a special object that holds data available to the views (like templates) used to generate the web pages
		// .user - This is an object stored in the session that represents the logged-in user
	}

	next();
});

app.use("/guitars", guitarRoutes);
app.use("/", authRoutes);

app.get("/", (req, res) => {
	res.render("home");
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
