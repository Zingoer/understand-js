// Functional programming in javascript is data. That's not true in other languages.
// Function is data means we can pass functions around. We can return them without invoking them and things like that.

// Callbacks and higher-order functions are core concept of functional programming!

// Higher-order function
// 1. can take a function as an input (argument)
console.log(document.getElementById("textField"));
document.getElementById("textField").addEventListener("change", () => {
  console.log("Our evidence is updated");
});

// 2. can return a function as the output
const newClue = name => {
  const length = name.length;

  return weapon => {
    let clue = length + weapon.length;
    console.log(clue % 1);
    console.log(!(clue % 1));
    return !!(clue % 1);
  };
};

// Callbacks are just functions that we pass to functions
const ifElse = (condition, isTrue, isFalse) => {
  return condition ? isTrue : isFalse;
};

// This will return a whole function because the function didn't be invoked!
ifElse(
  true,
  () => {
    console.log(true);
  },
  () => {
    console.log(false);
  }
);

const cl = console.log;

const increment = n => {
  return n + 1;
};
const square = n => {
  return n * n;
};

const doMathSoIDontHaveTo = (n, func) => {
  return func(n);
};
cl(doMathSoIDontHaveTo(5, square));
cl(doMathSoIDontHaveTo(4, increment));

// Passing args ES6
const ifElse2 = (condition, isTrue, isFalse, parameters) => {
  return condition ? isTrue(parameters) : isFalse(parameters);
};
// or
const ifElse3 = (condition, isTrue, isFalse, ...args) => {
  return condition ? isTrue(args) : isFalse(argsargs);
};

// ES5 ??
const ifElse4 = function(condition, isTrue, isFalse) {
  const args = [].slice.call(arguments, 3);
  return condition ? isTrue.apply(null, args) : isFalse.apply(null, args);
};

const logTrue = msgs => {
  console.log(msgs);
};
const logFalse = msgs => {
  console.log(msgs);
};
