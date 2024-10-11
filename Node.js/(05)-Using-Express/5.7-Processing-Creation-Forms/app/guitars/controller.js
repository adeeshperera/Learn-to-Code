import { addGuitar, getAll, getById, getByMake } from "./model.js";
import { view } from "./view.js";

// Calling the form function - Show the from
export async function createGuitar(req, res) {
	res.send(view("form"));
}

export async function listGuitars(req, res) {
	const guitars = await getAll();
	res.send(
		view("list", {
			guitars,
			title: "My Guitars",
		})
	);
}

export async function showGuitar(req, res) {
	const id = parseInt(req.params.id, 10);

	if (id) {
		const guitar = await getById(id);

		if (!guitar) {
			res.send(404);
		} else {
			res.send(view("show", { guitar }));
		}
	} else {
		const found = await getByMake(req.params.id);

		if (found.length === 0) {
			res.send(404);
		} else {
			res.send(
				view("list", {
					guitars: found,
					title: `Guitars Made By ${found[0].make}`,
				})
			);
		}
	}
}

// Handle the POST request
export async function storeGuitar(req, res) {
	const { guitar_make, guitar_model } = req.body; // Extract Data from the Request

	if (guitar_make && guitar_model) {
		// Checks if both guitar_make and guitar_model have values
		await addGuitar(guitar_make, guitar_model); // addGuitar(make, model) - ./model.js
		res.redirect("/guitars");
	} else {
		res.redirect("/guitars/create");
	}
}
