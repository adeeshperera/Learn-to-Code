import {
	addGuitar,
	getAll,
	getById,
	getByMake,
	removeGuitar,
	saveGuitar,
} from "./model.js";
import { view } from "./view.js";

export async function createGuitar(req, res) {
	res.send(view("form"));
}

export async function deleteGuitar(req, res) {
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

	await removeGuitar(guitar);
	res.redirect("/guitars");
}

export async function editGuitar(req, res) {
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

	res.send(view("form", guitar));
}

export async function listGuitars(req, res) {
	const guitars = await getAll();
	// Render the 'guitars/list' view template, passing the guitars data and a title
	res.render("guitars/list", {
		// Pass the fetched guitars data to the view
		guitars,
		title: "My Guitars",
	});
}

export async function showGuitar(req, res) {
	const id = parseInt(req.params.id, 10);

	if (id) {
		const guitar = await getById(id);

		if (!guitar) {
			res.send(404);
		} else {
			res.render("guitars/show", {
				guitar,
				title: `Guitar: ${guitar.make} ${guitar.model}`,
			});
		}
	} else {
		const found = await getByMake(req.params.id);

		if (found.length === 0) {
			res.send(404);
		} else {
			res.render("guitars/list", {
				// Pass the found guitars to the view
				guitars: found,
				// Set the title dynamically based on the make of the guitars
				title: `Guitars Made By ${found[0].make}`,
			});
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

	const { guitar_make, guitar_model } = req.body;

	if (guitar_make && guitar_model) {
		guitar.make = guitar_make;
		guitar.model = guitar_model;

		await saveGuitar(guitar);
		res.redirect(`/guitars/${id}`);
	} else {
		res.redirect(`/guitars/${id}/edit`);
	}
}
