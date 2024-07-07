// Function that returns a Promise
const checkNumber = () => {
	return new Promise((resolve, reject) => {
		// Generate a random number between 1 and 10
		const randomNumber = Math.floor(Math.random() * 10) + 1;

		// Check if the number meets the condition
		if (randomNumber >= 5) {
			resolve(randomNumber); // Resolve with the random number
		} else {
			reject(new Error(`Generated number ${randomNumber} is less than 5`)); // Reject with an error
		}
	});
};

// Using the Promise
checkNumber()
	.then((result) => {
		console.log(`Generated number ${result} is greater than or equal to 5`);
	})
	.catch((error) => {
		console.error(error.message);
	});
