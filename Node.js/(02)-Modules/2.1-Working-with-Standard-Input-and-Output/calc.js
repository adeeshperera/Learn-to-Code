process.stdin.on("data", (chunk) => {
	// Standard Input
	// Listen for an event called data (data), supply to callback function (chunk)

	const input = chunk.toString().trim(); //Convert chunk of data into a string, because the data is read as a stream

	if (input === "quit") {
		// If the user types quit, it will exit.
		process.exit(0);
	}

	try {
		// Perform the arithmetic operation
		const value = eval(input); // Evaluates JavaScript code and executes it (Execute JavaScript code as a string)
		console.log(`${value}`);
	} catch (exception) {
		// Error
		console.log("I don't know how to do that.");
	}

	process.stdout.write("Enter your simple equation: "); // Loop
});

process.stdout.write("Enter your simple equation: "); // Standard Output. console.log adds a new line (Not on the same line)
