import { addGuitar, getAll, getById, getByMake, saveGuitar } from "./model.js";
import { view } from "./view.js";

export async function createGuitar(req, res) {
	res.send(view("form"));
}

export async function editGuitar(req, res) {
	const id = parseInt(req.params.id, 10); // Saving the ID as an integer

	if (!id) {
		// If don't have as ID
		res.send(404);
		return;
	}

	const guitar = await getById(id); // Save the guitar using ID

	if (!guitar) {
		// If don't have a guitar
		res.send(404);
		return;
	}

	res.send(view("form", guitar));
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

export async function storeGuitar(req, res) {
	const { guitar_make, guitar_model } = req.body;

	if (guitar_make && guitar_model) {
		await addGuitar(guitar_make, guitar_model);
		res.redirect("/guitars");
	} else {
		res.redirect("/guitars/create");
	}
}

// Handling POST request for guitar editing
export async function updateGuitar(req, res) {
	const id = parseInt(req.params.id, 10);

	if (!id) {
		res.send(404);
		return;
	}

	const guitar = await getById(id);

	if (!guitar) {
		res.send(404);
		return;
	}
	// Validating information

	const { guitar_make, guitar_model } = req.body;

	if (guitar_make && guitar_model) {
		guitar.make = guitar_make;
		guitar.model = guitar_model;
		// Updating

		await saveGuitar(guitar); // ./model.js
		res.redirect(`/guitars/${id}`);
	} else {
		res.redirect(`/guitars/${id}/edit`);
	}
}
