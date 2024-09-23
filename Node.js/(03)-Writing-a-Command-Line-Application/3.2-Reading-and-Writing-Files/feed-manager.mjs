import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { access, constants, readFile, writeFile } from "fs/promises"; // Promises API for fs module
// access - Check to see if file exists, constants - To specify the mode that we want to use
// writeFile - Create a file, readFile - Read the file

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const jsonFile = join(__dirname, "feeds.json");

// getLinks() (The process)
export async function getLinks() {
	try {
		// Finding the file
		await access(jsonFile, constants.F_OK); // (File, Mode)
		// F_OK - Checking the existence of a file, X_OK - If the file is executable by the current process, W_OK - If the given file is writable by the calling process, R_OK - if the given file is readable
		// Returns a Boolean value
	} catch (error) {
		// If not, the file should be created
		await writeFile(jsonFile, JSON.stringify([])); // utf8
		// JSON.stringify([]) - Specify the data that we want to write to this file (In this scenario, initialize the data inside of it as a JSON array)
	}

	// Read the file
	const contents = await readFile(jsonFile, { encoding: "utf8" }); // (File, The encoding type for reading)

	// Transforming raw file data (stored as a JSON string) into a usable JavaScript object. This object can then be easily manipulated, iterated over, or displayed as needed in your application.
	return JSON.parse(contents);
}

// saveLinks(feeds) (Write data to file)
export async function saveLinks(links) {
	await writeFile(jsonFile, JSON.stringify(links));
}
