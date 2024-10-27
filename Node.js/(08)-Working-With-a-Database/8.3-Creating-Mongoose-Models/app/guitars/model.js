import mongoose from "mongoose";

// Defines a schema for the guitar data. A schema is like a blueprint that specifies the structure of documents in a MongoDB collection
const guitarSchema = new mongoose.Schema({
	make: String,
	model: String,
	make_lower: String, // The manufacturer in lowercase format, which might be used for easier searching
});

// Creates a Mongoose model called Guitar based on the guitarSchema. A model is a class that represents a collection in the database and provides methods to interact with it
const Guitar = mongoose.model("Guitar", guitarSchema);

// Creates and saves a new guitar record in the MongoDB database
// const guitar = new Guitar({
// 	make: "Fender",
// 	model: "Strat",
// 	make_lower: "fender",
// }); // We dan't have to specify id because the database is going to automatically take care of that
// guitar.save();

let id = 1;
const getId = () => id++;

const guitars = [
	{ id: getId(), make: "Fender", model: "Strat" },
	{ id: getId(), make: "PRS", model: "Starla" },
	{ id: getId(), make: "Gibson", model: "Les Paul" },
	{ id: getId(), make: "PRS", model: "Vela" },
];

export function addGuitar(make, model) {
	const guitar = {
		id: getId(),
		make,
		model,
	};

	guitars.push(guitar);

	return Promise.resolve(guitar);
}

export async function getAll() {
	return await Guitar.find();
}

export function getById(id) {
	const guitar = guitars.find((g) => g.id === id);

	return Promise.resolve(guitar);
}

export function getByMake(make) {
	const found = guitars.filter(
		(g) => g.make.toLowerCase() === make.toLowerCase()
	);

	return Promise.resolve(found);
}

export function removeGuitar(guitar) {
	const index = guitars.indexOf(guitar);

	guitars.splice(index, 1);

	return Promise.resolve(true);
}

export function saveGuitar(guitar) {
	return Promise.resolve(true);
}
