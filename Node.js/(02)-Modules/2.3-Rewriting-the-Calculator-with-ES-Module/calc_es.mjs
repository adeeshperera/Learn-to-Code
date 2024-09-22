import * as readline from "readline";
import { stdin as input, stdout as output } from "process";
// process.stdin, process.stdout
// ECMAScript module syntax

const rl = readline.createInterface({ input, output });
// input: process.stdin, output: process.stdout

function questions(query) {
	return new Promise((resolve) => {
		rl.question(query, resolve); // query - Output, resolve - Input (Callback function)
	});
}

let answer = await questions("Enter your simple equation: "); // await the questions function

while (answer != "quit") {
	try {
		const value = eval(answer);
		console.log(`${value}`);
	} catch (exception) {
		console.log("I don't know how to do that.");
	}

	answer = await questions("Enter your simple equation: "); // Loop
}

rl.close();
