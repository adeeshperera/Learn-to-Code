import express from "express";

const app = express();

// Define a route for the root URL
app.get("/", (req, res) => {
	// '/' - The URL that we want to handle, (request, response) - Callback function
	res.send("Hello, Express!"); // send - A lot like the end method
});

// greet endpoint
app.get("/greet", (req, res) => {
	res.send("Greetings, Earthling!");
});

app.listen(80, () => {
	console.log("Listening at http://localhost");
});
