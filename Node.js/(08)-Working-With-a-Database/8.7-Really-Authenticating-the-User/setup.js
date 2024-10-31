import mongoose from "mongoose"; // Import Mongoose library for MongoDB interactions
import dotenv from "dotenv"; // Import dotenv to load environment variables from a .env file
import readline from "readline"; // Import readline for reading input from the command line
import { stdin as input, stdout as output } from "process"; // Import standard input and output streams
import { hash } from "./app/auth/crypt.js"; // Import hash function for encrypting passwords
import { User } from "./app/auth/model.js"; // Import User model for interacting with the users collection

// Load environment variables from the .env file
dotenv.config();

// Create a readline interface for user input
const rl = readline.createInterface({ input, output }); // Sets up an interface for reading data from a readable stream (input) and writing data to a writable stream (output)

// Connect to MongoDB using Mongoose and credentials from environment variables
await mongoose.connect(
	`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.ysnks7r.mongodb.net/?retryWrites=true&w=majority`
);

// Prompt the user to enter their email address
rl.question("Please enter your email address: ", (email) => {
	// email: The email entered by the user is saved in the email variable
	// Prompt the user to enter a password
	rl.question("Please enter a password: ", async (plainText) => {
		// plainText: The password entered by the user is saved in the plainText variable
		// Hash the entered password
		const hashText = await hash(plainText);

		// Create a new user document in the database with the entered email and hashed password
		await User.create({
			email: email.toLowerCase(), // Convert email to lowercase
			password: hashText, // Store the hashed password
		});

		// Close the readline interface
		rl.close();
	});
});
