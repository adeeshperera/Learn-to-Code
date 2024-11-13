// Data processing
import { getAll, getById, getByMake } from "./model.js";

export async function listGuitars(req, res) {
	const guitars = await getAll(); // ./model.js
	res.send(guitars);
}

export async function showGuitar(req, res) {
	const id = parseInt(req.params.id, 10);

	if (id) {
		const guitar = await getById(id); // ./model.js

		if (!guitar) {
			res.send(404);
		} else {
			res.send(guitar);
		}
	} else {
		const found = await getByMake(req.params.id); // ./model.js

		if (found.length === 0) {
			res.send(404);
		} else {
			res.send(found);
		}
	}
}
