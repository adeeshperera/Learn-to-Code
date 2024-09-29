import { createServer } from "http";
import guitars from "./data.js"; // Exporting the default, so we can call it whatever we want

const server = createServer((request, response) => {
	response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

	const content = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test</title>
    </head>
    <body style="font-size: 2rem">
        <h2>Test Text</h2>
        <ul>
            ${guitars.map(createListItem).join("\n")}
        </ul>
    </body>
    </html>`; // Template string (Content)
	// map - Map method, createListItem - Creates an array of HTML list items, .join("\n") - Combines these list items into a single string, with each list item on a new line

	response.end(content);
});

const createListItem = ({ make, model }) => `<li>${make} ${model}</li>`;
// createListItem - is a function that creates an HTML <li> element for a guitar, { make, model } - Destructuring (guitars)

server.listen(80, () => {
	console.log(
		`Server is listening at http://localhost:${server.address().port}`
	);
});
