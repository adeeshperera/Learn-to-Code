try {
  // Code block that may throw an error
  // Put the code that might cause an error inside this block
  // For example:
  let result = someFunction();
  console.log(result);
} catch (error) {
  // Code to handle errors
  // This block is executed if any error occurs in the try block
  // 'error' is the variable that holds the error object
  console.error("An error occurred:", error.message);
} finally {
  // Optional block that always executes regardless of whether there was an error or not
  // This block is useful for cleanup tasks like closing resources
  // It executes whether an exception was thrown or not
  console.log("This block always executes, regardless of errors.");
}

