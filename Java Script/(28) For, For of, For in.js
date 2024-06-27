// for Loop
let arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// for...of Loop
let NewArr = [1, 2, 3, 4];
for (let num of NewArr) {
	console.log(num);
}

// for...in Loop
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
	console.log(key + ": " + obj[key]);
}
