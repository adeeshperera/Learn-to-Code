// Function to fetch data from a remote site
function fetchDataFromRemoteSite(url, callback) {
    // Simulating an asynchronous operation such as fetching data using AJAX
    setTimeout(() => {
        // Assuming successful data retrieval
        const data = { message: "Data fetched successfully" };
        callback(null, data); // Callback with null error and data
    }, 1000);
}

// Function to process data
function processData(data, callback) {
    // Simulating data processing
    setTimeout(() => {
        // Assuming data processing is successful
        const processedData = data.message.toUpperCase();
        callback(null, processedData); // Callback with null error and processed data
    }, 1000);
}

// Function to display data
function displayData(result, callback) {
    // Simulating displaying data
    setTimeout(() => {
        console.log(result); // Log the result
        callback(); // Callback to indicate completion
    }, 1000);
}

// Example usage demonstrating Callback Hell
fetchDataFromRemoteSite('https://example.com', (err, data) => {
    if (err) {
        console.error('Error fetching data:', err);
    } else {
        processData(data, (err, processedData) => {
            if (err) {
                console.error('Error processing data:', err);
            } else {
                displayData(processedData, () => {
                    console.log('Data displayed successfully.');
                    // More operations can be nested here, leading to deeper callback nesting
                });
            }
        });
    }
});

