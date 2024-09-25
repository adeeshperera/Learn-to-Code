import { getLinks, saveLinks } from "./feed-manager.mjs";
import { question, close } from "./rl.mjs";
import axios from "axios";
import Parser from "rss-parser"; // A constructor function (A small library for turning RSS XML feeds into JavaScript objects)

const feeds = await getLinks();
const parser = new Parser(); // Can create a parser object

let input = await question("Enter command (list, add, del, read, quit): ");

while (input != "quit") {
	let cmdParts = input.trim().split(" ");
	let cmd = cmdParts[0];

	if (cmd === "list") {
		feeds.forEach((url, index) => console.log(`${index}\t${url}`));
	}

	if (cmd === "add") {
		if (cmdParts.length < 2) {
			console.log("Please include the URL with the add command.");
		} else {
			feeds.push(cmdParts[1]);
		}
	}

	if (cmd === "del") {
		if (cmdParts.length < 2) {
			console.log("Please include the index of the URL to delete.");
		} else {
			let index = parseInt(cmdParts[1], 10);

			if (index > -1 && index < feeds.length) {
				feeds.splice(index, 1);
			} else {
				console.log("The provided index is out of range.");
			}
		}
	}

	// Using the Axios HTTP client (Using the await syntax - Got the data before the loop finished that current iteration)
	// if (cmd === "read") {
	// 	let { data } = await axios.get("https://www.reddit.com/r/node.rss"); // let {data} - Destructuring response

	// 	console.log(data);
	// }

	// Need to take the data and parse it into a JS object (Get url or index with input where available, and display in console), Using the Axios
	if (cmd === "read") {
		if (cmdParts.length < 2) {
			// input
			console.log("Please include the index of the URL to read.");
		} else {
			let index = parseInt(cmdParts[1], 10);

			if (index > -1 && index < feeds.length) {
				let { data } = await axios.get("https://www.reddit.com/r/node.rss"); // Waiting for the response

				let feed = await parser.parseString(data); // Pass the data to parseString (RSS XML feeds into JS objects)

				feed.items.forEach((item) => console.log(item.title)); //Each item want to display the headline
			} else {
				console.log("The provided index is out of range.");
			}
		}
	}

	// Making an HTTP Request (Not using the await syntax - No waiting for response)

	// import https from https;

	// if (cmd === "read") {
	// 	https.get("https://www.reddit.com/r/node.rss", (response) => {
	// 		let content = "";

	// 		response.on("data", (chunk) => {    // Listen for the data event on the responce
	// 			content += chunk; // Concatenate the chunk with the content
	// 		});

	// 		response.on("end", () => {  // End of the responce
	// 			console.log(content);   // No waiting for response
	// 		});
	// 	});
	// }

	input = await question("Enter command (list, add, del, read, quit): ");
}

await saveLinks(feeds);
close();
