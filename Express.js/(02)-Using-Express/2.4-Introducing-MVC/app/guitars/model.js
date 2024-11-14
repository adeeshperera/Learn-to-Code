// Data & How can it be used
const guitars = [
	{ id: 1, make: "Fender", model: "Strat" },
	{ id: 2, make: "PRS", model: "Starla" },
	{ id: 3, make: "Gibson", model: "Les Paul" },
	{ id: 4, make: "PRS", model: "Vela" },
]; // Data

export function getAll() {
	// All guitars
	return Promise.resolve(guitars);
}

export function getById(id) {
	// Guitar related to ID
	const guitar = guitars.find((g) => g.id === id);

	return Promise.resolve(guitar);
}

export function getByMake(make) {
	// Guitar related to make of guitar
	const found = guitars.filter(
		(g) => g.make.toLowerCase() === make.toLowerCase()
	);

	return Promise.resolve(found);
}
