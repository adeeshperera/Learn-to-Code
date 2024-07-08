function generateRandomNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const randomNumber = Math.floor(Math.random() * 10); // Generates a random number between 0 and 9
			if (randomNumber >= 5) {
				resolve(randomNumber); // Resolve with the random number if it's >= 5
			} else {
				reject(new Error("Number is less than 5. Rejecting.")); // Reject with an error if it's < 5
			}
		}, 1000); // Simulating some asynchronous operation
	});
}

async function handleRandomNumber() {
	try {
		const randomNumber = await generateRandomNumber();
		console.log("Generated random number:", randomNumber);
	} catch (error) {
		console.error(error.message);
	}
}

// Call the async function to handle the random number
handleRandomNumber();
