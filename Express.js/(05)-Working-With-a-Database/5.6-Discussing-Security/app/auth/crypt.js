// Import functions from the 'bcrypt' library
import {
	genSalt, // Function to generate a salt (random value) for hashing
	hash as genHash, // Function to hash a plain text value using a salt
	compare as compareValue, // Function to compare a plain text value with a hashed value
} from "bcrypt";

// Function to hash a plain text password
export const hash = async (plainText) => {
	// Generate a salt with 12 rounds of processing
	const salt = await genSalt(12);
	// Generate a salt with a complexity factor of 12 rounds
	// Higher values make the hashing process more secure but slower

	// Hash the plain text password with the generated salt and return the hash
	return await genHash(plainText, salt);
};

// Function to compare a plain text password with a hashed password
export const compare = async (plainText, hash) => {
	// Check if the plain text password matches the hashed password
	return await compareValue(plainText, hash);
};
