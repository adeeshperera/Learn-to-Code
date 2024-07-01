// Exporting a variable
const moduleName = "MyModule";

// Exporting a function
function intro() {
	console.log("Test Log");
}

function testfunction() {
	console.log("Test Log");
}

class Car {
	constructor(brand) {
		this.brand = brand;
	}
}

export default Car;
export { moduleName, intro as test, testfunction };
