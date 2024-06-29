const numbers = [5, 12, 8, 130, 44];

const filteredNumbers = numbers.filter(function (number) {
	return number >= 10;
});

console.log(filteredNumbers); // Output: [12, 130, 44]
