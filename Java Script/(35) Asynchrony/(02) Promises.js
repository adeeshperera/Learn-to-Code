// Using the new Promise constructor
let randomNumberPromise = new Promise((resolve, reject) => {
	let randomNumber = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
	console.log(`Generated number: ${randomNumber}`);

	if (randomNumber >= 5) {
		resolve(`${randomNumber} is greater than or equal to 5`);
	} else {
		reject(`${randomNumber} is less than 5`);
	}
});

randomNumberPromise
	.then((message) => {
		console.log(message); // This will be printed if randomNumber >= 5
	})
	.catch((error) => {
		console.error(error); // This will be printed if randomNumber < 5
	});
