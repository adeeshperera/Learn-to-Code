// Importing variables and functions from modules.js
import Car, { moduleName as newVar, test, testfunction } from "./modules.js";
import NewName from "./class.js";
//import Vehicle, { moduleName as newVar, test, testfunction } from "./modules.js"; - Rename (default)

// Using the imported variables and functions
console.log(newVar); // Output: MyModule

test();

testfunction();

const honda = new Car("Honda");
console.log(honda.brand);

const toyota = new NewName("Toyota");
console.log(toyota.brand);
