import express from "express";
import { routes as guitarRoutes } from "./guitars/routes.js";

const app = express();

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: false }));
// Process form data that comes in as URL-encoded, and to handle it in a straightforward way (with simple key-value pairs)
// false - Using the querystring library (Work with simple key-value pairs), true - Using the qs library (Allows for more complex objects and arrays)

app.use("/guitars", guitarRoutes);

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
