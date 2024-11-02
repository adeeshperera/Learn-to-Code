import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // File path, import.meta.url - It gives us just meta information about the current module, and also has a URL property
const __dirname = dirname(__filename); // Directory name - Path of the directory that contains this module

console.log(import.meta.url); // It's a URL that represents the path (file URL - It uses the file protocol)
console.log(__filename); // File path
console.log(__dirname);

const jsonFile = join(__dirname, "test.json"); // If we need a path to a file that does not exist, join - Use this function to essentially build a path

console.log(jsonFile); // The path is just string, which is why it shows the path to a file that does not exist.
