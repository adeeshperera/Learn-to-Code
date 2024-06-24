// Arrow Function
// Traditional function expression
const traditionalFunc = function (x, y) {
	return x + y;
};

// Arrow function
const arrowFunc = (x, y) => x + y;

// Anonymous Function
var add = function (a, b) {		//var
	return a + b;
};

// Self-Invoked Anonymous Function
(function () {
	console.log("Self-invoked function");
})();

// Arrow Function with THIS Keyword
function Counter() {
	this.count = 0;

	setInterval(() => {
		this.count++;
		console.log(this.count);
	}, 1000);
}

const counter = new Counter();

// Arrow Function with Anonymous Function
const greet = (name) => {
	console.log(`Hello, ${name}!`);
};
