// Define a custom function named myFilter which emulates the filter method
Array.prototype.myFilter = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.myFilter called on null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    // Create a new array to store filtered elements
    const filteredArray = [];

    // Iterate over each element of the array
    for (let i = 0; i < this.length; i++) {
        // Check if the current element satisfies the condition defined by the callback function
        if (callback.call(thisArg, this[i], i, this)) {
            // If the condition is true, add the element to the filtered array
            filteredArray.push(this[i]);
        }
    }

    // Return the filtered array
    return filteredArray;
};

// Example usage of myFilter method
const numbers = [1, 2, 3, 4, 5];

// Filter out even numbers
const evenNumbers = numbers.myFilter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

// Sample array of objects
const cars = [
  { brand: 'Toyota', model: 'Camry', year: 2018 },
  { brand: 'Honda', model: 'Accord', year: 2019 },
  { brand: 'Ford', model: 'Mustang', year: 2020 },
  { brand: 'Chevrolet', model: 'Camaro', year: 2017 },
  { brand: 'Tesla', model: 'Model S', year: 2021 }
];

// Function to filter cars based on a condition
function filterCarsByYear(carsArray, targetYear) {
  // Use the filter method on the cars array
  const filteredCars = carsArray.filter(car => {
    // Return true if the car's year matches the targetYear
    return car.year === targetYear;
  });

  // Return the filtered array of cars
  return filteredCars;
}

// Call the function to filter cars by year
const filteredCarsByYear = filterCarsByYear(cars, 2019);

// Output the filtered cars
console.log(filteredCarsByYear);

