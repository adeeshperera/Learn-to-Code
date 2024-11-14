// UI (Displaying the data to the user)
// views object
const views = {
	list({ guitars, title }) {
		// Renders a list of guitars
		const liElements = guitars.map(
			({ id, make, model }) =>
				`<li><a href="/guitars/${id}">${make} ${model}</a></li>`
			// Creates a link to the guitar’s detail page using its id, Shows the guitar's make and model as the link text
		);

		return this._layout(`
            <h2>${title}</h2>
            <ul>
                ${liElements.join("")}
            </ul>
        `); // Return content
	},

	show({ guitar }) {
		// Renders detailed information for a single guitar
		return this._layout(`
            <h2>
                ${guitar.make} ${guitar.model}
            </h2>
        `);
	},

	_layout(content) {
		// Provides a common HTML layout structure
		return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Guitars</title>
            <link rel="stylesheet" href="/assets/css/style.css" />
        </head>
        <body>
            ${content}
        </body>
        </html>`;
	},
};

// view function - A function to render a view based on its name
export const view = (name, data) => views[name](data);
// view("list", { guitars, title: "My Guitars",}) - name (list), data (guitars, title: "My Guitars")
