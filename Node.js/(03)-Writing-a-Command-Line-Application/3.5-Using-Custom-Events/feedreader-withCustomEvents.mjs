import { getLinks, saveLinks } from "./feed-manager.mjs";
import { rl, close } from "./rl.mjs"; // Importing the RedLine interface
import axios from "axios";
import Parser from "rss-parser";
import { EventEmitter } from "events";

const feeds = await getLinks();
const parser = new Parser();
const emitter = new EventEmitter(); // Create an object if type event emitter

function prompt() {
	rl.setPrompt("Enter command (list, add, del, read, quit): "); // setPrompt - Display a text
	rl.prompt(); // Loop
}

rl.on("line", (input) => {
	// Wait for input and provide input to the callback function
	let cmdParts = input.trim().split(" ");

	emitter.emit(cmdParts[0], cmdParts[1]); // The emitter.emit("add", "http://example.com/rss"); call triggers the "add" event, and passes "http://example.com/rss" to the corresponding event handler.
});

emitter.on("quit", async () => {
	await saveLinks(feeds);
	close();
});

emitter.on("list", async () => {
	feeds.forEach((url, index) => console.log(`${index}\t${url}`));

	prompt(); // calling prompt() will ultimately call rl.prompt() to handle user input
});

emitter.on("add", async (url) => {
	if (url === undefined) {
		console.log("Please include the URL with the add command.");
	} else {
		feeds.push(url);
	}

	prompt(); // rl.prompt()
});

emitter.on("del", async (index) => {
	if (index === undefined) {
		console.log("Please include the index of the URL to delete.");
	} else {
		index = parseInt(index, 10);

		if (index > -1 && index < feeds.length) {
			feeds.splice(index, 1);
		} else {
			console.log("The provided index is out of range.");
		}
	}

	prompt(); // rl.prompt()
});

emitter.on("read", async (index) => {
	if (index === undefined) {
		console.log("Please include the index of the URL to reads.");
	} else {
		index = parseInt(index, 10);

		if (index > -1 && index < feeds.length) {
			if (index > -1 && index < feeds.length) {
				let { data } = await axios.get(feeds[index]); // Read using index

				let feed = await parser.parseString(data);

				feed.items.forEach((item) => console.log(item.title));
			} else {
				console.log("The provided index is out of range.");
			}
		} else {
			console.log("The provided index is out of range.");
		}
	}

	prompt(); // rl.prompt()
});

prompt(); // Calling the function

// while (input != 'quit') {

//     let cmd = cmdParts[0];

//     if (cmd === 'list') {
//         feeds.forEach((url, index) => console.log(`${index}\t${url}`));
//     }

//     if (cmd === 'add') {
//         if (cmdParts.length < 2) {
//             console.log('Please include the URL with the add command.');
//         } else {
//             feeds.push(cmdParts[1]);
//         }
//     }

//     if (cmd === 'del') {
//         if (cmdParts.length < 2) {
//             console.log('Please include the index of the URL to delete.');
//         } else {
//             let index = parseInt(cmdParts[1], 10);

//             if (index > -1 && index < feeds.length) {
//                 feeds.splice(index, 1);
//             } else {
//                 console.log('The provided index is out of range.');
//             }
//         }
//     }

//     if (cmd === 'read') {
//         if (cmdParts.length < 2) {
//             console.log('Please include the index of the URL to read.');
//         } else {
//             let index = parseInt(cmdParts[1], 10);

//             if (index > -1 && index < feeds.length) {
//                 let {data} = await axios.get('https://www.reddit.com/r/node.rss');

//                 let feed = await parser.parseString(data);

//                 feed.items.forEach(item => console.log(item.title));
//             } else {
//                 console.log('The provided index is out of range.');
//             }
//         }
//     }

//     input = await question('Enter command (list, add, del, read, quit): ');
// }
