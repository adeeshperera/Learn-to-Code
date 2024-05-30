// var:
// - Function-scoped
// - Can be reassigned and redeclared within its scope
// - Hoisted to the top of the function or global scope
// - Not recommended for modern JavaScript due to its quirks

function exampleVar() {
    var x = 10;
    if (true) {
        var x = 20; // This reassigns the value of x declared outside the block
        console.log(x); // Outputs 20
    }
    console.log(x); // Outputs 20, not 10 due to variable hoisting
}

// let:
// - Block-scoped (inside {} brackets)
// - Can be reassigned but not redeclared within its scope
// - Not hoisted
// - Preferred over var in modern JavaScript

function exampleLet() {
    let x = 10;
    if (true) {
        let x = 20; // This declares a new x variable scoped to this block
        console.log(x); // Outputs 20
    }
    console.log(x); // Outputs 10, not affected by the inner block's x
}

// const:
// - Block-scoped (inside {} brackets)
// - Cannot be reassigned or redeclared within its scope
// - Not hoisted
// - Once assigned, its value cannot be changed (though it's important to note that for objects and arrays, the contents can be mutated)

function exampleConst() {
    const x = 10;
    // x = 20; // This would throw an error, since you cannot reassign a const variable
    if (true) {
        const x = 20; // This declares a new x variable scoped to this block
        console.log(x); // Outputs 20
    }
    console.log(x); // Outputs 10, not affected by the inner block's x
}

