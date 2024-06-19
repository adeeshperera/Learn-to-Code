// Step 1: Fetch data from another site
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data from another site (e.g., using AJAX or Fetch API)
    setTimeout(() => {
      const data = "Data from another site";
      resolve(data);
    }, 1000); // Simulating 1 second delay
  });
}

// Step 2: Process the fetched data
function processData(data) {
  return new Promise((resolve, reject) => {
    // Simulate processing the data
    setTimeout(() => {
      const processedData = data.toUpperCase(); // Convert data to uppercase
      resolve(processedData);
    }, 1000); // Simulating 1 second delay
  });
}

// Step 3: Display the processed data
function displayData(processedData) {
  console.log("Processed data:", processedData);
}

// Step 4: Using async/await to handle asynchronous operations sequentially
async function fetchDataAndProcessAndDisplay() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    displayData(processedData);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the function to start the asynchronous operations
fetchDataAndProcessAndDisplay();

