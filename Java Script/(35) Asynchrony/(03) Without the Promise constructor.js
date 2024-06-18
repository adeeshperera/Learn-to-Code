//Using JavaScript functions without the Promise constructor, but rather manually handling the resolution and rejection of promises:

// Function to fetch data from a remote site
function fetchDataFromRemoteSite(url) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation such as fetching data using AJAX
        setTimeout(() => {
            // Assuming successful data retrieval
            const data = { message: "Data fetched successfully" };
            resolve(data); // Resolve the promise with data
        }, 1000);
    });
}

// Function to process data
function processData(data) {
    return new Promise((resolve, reject) => {
        // Simulating data processing
        setTimeout(() => {
            // Assuming data processing is successful
            const processedData = data.message.toUpperCase();
            resolve(processedData); // Resolve the promise with processed data
        }, 1000);
    });
}

// Function to display data
function displayData(result) {
    return new Promise((resolve, reject) => {
        // Simulating displaying data
        setTimeout(() => {
            console.log(result); // Log the result
            resolve(); // Resolve the promise to indicate completion
        }, 1000);
    });
}

// Example usage using functions to avoid Callback Hell
function fetchDataAndDisplay() {
    fetchDataFromRemoteSite('https://example.com')
        .then(data => {
            return processData(data);
        })
        .then(processedData => {
            return displayData(processedData);
        })
        .then(() => {
            console.log('Data displayed successfully.');
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the function
fetchDataAndDisplay();
