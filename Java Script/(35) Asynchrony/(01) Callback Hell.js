// Example of Callback Hell
function fetchData(callback) {
	setTimeout(function () {
		const data = "Data from fetchData";
		callback(data);
	}, 1000); // Simulating asynchronous operation with setTimeout
}

function processData(data, callback) {
	setTimeout(function () {
		const processedData = data.toUpperCase();
		callback(processedData);
	}, 1000); // Simulating another asynchronous operation
}

function outputResult(result) {
	console.log("Processed Result:", result);
}

// Nested callbacks
fetchData(function (data1) {
	processData(data1, function (processedData1) {
		outputResult(processedData1);
	});
});
//Callback Hell (Pyramid of Doom): Line 21 to 25
