import { createServer } from "http"; // Create an HTTTP sever or HTTPS

const server = createServer((request, response) => {
	// const server - Store this in a variable, because once the server is created, the server needs to start listening for requests

	// response.write("Hello, );    // response.write("Hello, World); - The end of the response should be specified
	// response.end("World!");

	let content = "Hello, World!";
	response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
	// 200 - Status code, { "Content-Type": "text/html; charset=utf-8" } - Header
	response.end(content);
});

server.listen(80, () => {
	// 80 - Port (Defaults - 80/443), The port number 80 is a privileged (sudo) port on Unix-based systems
	console.log(
		`Server is listening at http://localhost:${server.address().port}`
		// server.address().port - There is an address method that uses the sever object and returns a port property
	);
});
