import express from "express";
import { routes as guitarRoutes } from "./guitars/index.js";

const app = express();

app.use("/guitars", guitarRoutes);

// Home Route
app.get("/", (req, res) => {
	res.send("Home Page");
});

// Sum Route - http://127.0.0.1/sum/2-3
app.get("/sum/:a-:b", (req, res) => {
	res.send(`${parseInt(req.params.a) + parseInt(req.params.b)}`); // Converts 'a' and 'b' strings to integers and Returns the sum of these two numbers
});
// Output = 5 ('a' is 2, 'b' is 3)

// / -- Home Page
// /guitars -- index page/list
// /guitars/id -- individual guitar by id

export function start() {
	app.listen(80, () => {
		console.log("Listening at http://localhost");
	});
}
