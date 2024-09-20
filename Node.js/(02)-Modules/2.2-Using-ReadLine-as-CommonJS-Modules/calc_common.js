const readline = require("readline"); // Uses the readline module
const rl = readline.createInterface({
	// Interface
	input: process.stdin, // Property
	output: process.stdout, // Property
});

function questions() {
	// questions function
	rl.question("Enter your simple equation: ", (input) => {
		// question method, input - callback function
		if (input === "quit") {
			rl.close(); // It releases the resources that it is currently using (input & output)
		} else {
			try {
				const value = eval(input);
				console.log(`${value}`);
			} catch (exception) {
				console.log("I don't know how to do that.");
			}

			questions(); // Loop (Recursion)
		}
	});
}

questions(); // Calling the function
