import mongoose from "mongoose"; // Import mongoose library for working with MongoDB

// Define a schema for the User model
const userSchema = new mongoose.Schema({
	email: String, // Field for user email
	password: String, // Field for user password
});

// Create and export a model named 'User' based on the userSchema
// This model will interact with the 'users' collection in MongoDB
export const User = mongoose.model("User", userSchema);
