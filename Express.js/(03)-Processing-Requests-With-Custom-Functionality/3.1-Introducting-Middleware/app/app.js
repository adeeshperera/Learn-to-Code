import express from "express";
import { routes as guitarRoutes } from "./guitars/routes.js";

const app = express();

// Application-level middleware
function logRequest(req, res, next) {
	// Middleware: Functions that run during the request-response cycle (Helps you manage and process requests in a structured way before sending a response)
	console.log(req.url); // /, /guitars, /guitars/1

	next();
	// A function that tells the server to move on to the next piece of middleware or route handler in the sequence. If we don’t use next(), the server will stop and won’t proceed further
}
app.use(logRequest);

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));

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
