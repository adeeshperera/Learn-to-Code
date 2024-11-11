// Main file for guitars
import { Router } from "express";

export const routes = new Router();

const guitars = [
	{ id: 1, make: "Fender", model: "Strat" },
	{ id: 2, make: "PRS", model: "Starla" },
	{ id: 3, make: "Gibson", model: "Les Paul" },
];

// /guitars

routes.get("/", (req, res) => {
	// Index page for guitars (Output as JSON)
	res.send(guitars);
});

routes.get("/1", (req, res) => {
	// ID 1 individual guitar (Output as JSON)
	res.send(guitars[0]);
});
