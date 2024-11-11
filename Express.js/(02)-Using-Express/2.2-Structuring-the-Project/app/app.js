import express from "express";
import { routes as guitarRoutes } from "./guitars/index.js";

const app = express();

app.use("/guitars", guitarRoutes);
// /guitars -- index page/list (All guitars)
// /guitars/id -- individual guitar by id

app.get("/", (req, res) => {
	res.send("Home Page");
});
// / -- Home Page

export function start() {
	app.listen(80, () => {
		console.log("Listening at http://localhost");
	});
}
