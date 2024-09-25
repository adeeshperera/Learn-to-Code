import { getLinks, saveLinks } from "./feed-manager.mjs";
import { question, close } from "./rl.mjs"; // ReadLine Module

const feeds = await getLinks();

let input = await question("Enter command (list, add, del, read, quit): ");

while (input != "quit") {
	let cmdParts = input.trim().split(" ");
	// split(" ") - "Hello world!" => ["Hello", "world!"]
	let cmd = cmdParts[0]; // To use only the 1st word from the input. Because we use split

	// list
	if (cmd === "list") {
		feeds.forEach((url, index) => console.log(`${index}\t${url}`)); // \t - Use a tab
	}

	// add
	if (cmd === "add") {
		if (cmdParts.length < 2) {
			// input - add *blank*
			console.log("Please include the URL with the add command.");
		} else {
			// input - add ***
			feeds.push(cmdParts[1]);
			// push - add
		}
	}

	// del index
	if (cmd === "del") {
		if (cmdParts.length < 2) {
			// input - del *blank*
			console.log("Please include the index of the URL to delete.");
		} else {
			// Parse string to int, Because index is an integer
			let index = parseInt(cmdParts[1], 10);

			if (index > -1 && index < feeds.length) {
				// feeds.length - The number of urls in the array
				feeds.splice(index, 1);
				// splice - remove
			} else {
				console.log("The provided index is out of range.");
			}
		}
	}

	// read index - Making HTTP Requests (3.4)

	input = await question("Enter command (list, add, del, read, quit): "); // Loop
}

await saveLinks(feeds);

close(); // ReadLine Module
