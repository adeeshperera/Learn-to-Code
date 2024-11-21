import { Router } from "express";
import {
	createGuitar,
	deleteGuitar,
	editGuitar,
	listGuitars,
	showGuitar,
	storeGuitar,
	updateGuitar,
} from "./controller.js";
export const routes = new Router();

// Router-level middleware (This middleware was only applied at the router level)
function logRequest(req, res, next) {
	// console.log("/guitars" + req.url); // /guitars/, /guitars/1, ...
	console.log(`${req.method} \t /guitars ${req.url}`);
	next();
}
routes.use(logRequest);

// Authentication Middleware at the route level (In this case, Apply it to Every POST request and every GET requvest that involves displaying a from)
function checkAuth(req, res, next) {
	let isAuthenticated = false; // True or false

	if (isAuthenticated) {
		// isAuthenticated is true
		next();
	} else {
		res.redirect("/login");
	}
} // http://127.0.0.1/guitars/1/edit => http://127.0.0.1/login (false)

// /guitars

routes.get("/", listGuitars);
routes.post("/", checkAuth, storeGuitar);
routes.get("/create", checkAuth, createGuitar);
routes.get("/:id/edit", checkAuth, editGuitar);
routes.get("/:id/delete", checkAuth, deleteGuitar);
// URL, Middleware, Controller Function - Logging Middleware on individual routes

routes.get("/:id", showGuitar);
routes.post("/:id", checkAuth, updateGuitar);
