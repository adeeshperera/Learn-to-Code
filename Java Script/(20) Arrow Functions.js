// Arrow Function
const arrowFunction = (a, b) => {
  return a + b;
};

// Anonymous Function
const anonymousFunction = function(a, b) {
  return a + b;
};

// Self-Invoked Anonymous Function
(function() {
  console.log("Self-invoked function");
})();

// Arrow Function with THIS Keyword
const obj = {
  name: "John",
  greet: function() {
    // Here, if we use a regular function, `this` would refer to the context of the caller,
    // but with an arrow function, `this` retains the context of the surrounding scope, which is `obj` in this case.
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

obj.greet();

// Arrow Function with Anonymous Function
const arrowWithAnonymous = (param) => {
  const anonymous = function(num) {
    return num * 2;
  };
  return anonymous(param);
};

console.log(arrowWithAnonymous(3));
obj.arrowWithThis(); // Output: 3
