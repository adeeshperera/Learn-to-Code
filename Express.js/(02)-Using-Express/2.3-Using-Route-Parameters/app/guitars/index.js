import { Router } from "express";

export const routes = new Router();

const guitars = [
	{ id: 1, make: "Fender", model: "Strat" },
	{ id: 2, make: "PRS", model: "Starla" },
	{ id: 3, make: "Gibson", model: "Les Paul" },
	{ id: 4, make: "PRS", model: "Vela" },
];

// /guitars

routes.get("/", (req, res) => {
	res.send(guitars);
});

routes.get("/:id", (req, res) => {
	// :id - Placeholder (ID or make of the guitar from URL)
	const id = parseInt(req.params.id, 10);
	// parseInt - Converts a string to an integer, req.params.id - hold the value of the id (http://localhost:3000/guitars/3, then req.params.id would be "3" (a string))
	// 10 - Base 10 is the normal way we count (parseInt('0123', 10); // Returns 123)

	if (id) {
		// (http://127.0.0.1/guitars/2)
		const guitar = guitars.find((g) => g.id === id); // Finding the guitar using ID

		if (!guitar) {
			// Guitar is null
			res.send(404); // 404 - Not found
		} else {
			// Return the guitar
			res.send(guitar);
		}
	} else {
		// When the id is not a number (http://127.0.0.1/guitars/fender - Guitar make)

		const found = guitars.filter((g) => g.make.toLowerCase() === req.params.id);
		// guitars.filter - searches through the guitars array
		// g - guitars array, g.make.toLowerCase() - Converts the make of the guitar to lowercase, === req.params.id - Checks if this make matches the make specified in the URL

		if (found.length === 0) {
			res.send(404);
		} else {
			res.send(found);
		}
	}
});
