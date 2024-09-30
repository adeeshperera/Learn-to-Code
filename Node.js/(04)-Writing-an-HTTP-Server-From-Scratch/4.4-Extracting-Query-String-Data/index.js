import { createServer } from "http";
import guitars from "./data.js";

const server = createServer((request, response) => {
	response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

	const url = new URL(request.url, "http://localhost"); // request.url - Extract the ID from the URL (/?id=1)
	// This creates a new URL object using the request.url and the base URL "http://localhost"
	console.log(url);

	const id = url.searchParams.get("id"); // Extracts the value of the id query parameter from the URL (1/2/3)

	const content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Guitars</title>
    </head>
    <body style="font-size: 2rem">
        ${id ? getGuitarContent(id) : createList()}
    </body>
    </html>`;
	// True - If there is an id, it shows details about the specific guitar with that id, False - If there is no id, it shows a list of all guitars (Conditional (ternary) operator)

	response.end(content);
});

const createList = () => `<h2>My Guitars</h2>
<ul>
    ${guitars.map(createListItem).join("\n")}
</ul>`; // Return the content

const createListItem = ({ id, make, model }) =>
	`<li><a href="?id=${id}">${make} ${model}</a></li>`; // Add id to url as parameter

function getGuitarContent(id) {
	const guitar = guitars.find((g) => g.id == id);
	// Find the guitar with that given ID

	if (guitar) {
		// Return the information for that guitar
		return `<h2>${guitar.make} ${guitar.model}</h2>`;
	} else {
		return "<p>Guitar does not exist</p>";
	}
}

server.listen(80, () => {
	console.log(
		`Server is listening at http://localhost:${server.address().port}`
	);
});
