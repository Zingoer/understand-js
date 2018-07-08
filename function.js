// parameters are variables, they have no value until called.
// The real value pass in the function when function is invoked is called argument. arguments are the actual value.
// JQuery $ sign with argument is a function!

// The main difference between function and arrow function is that the arrow function will bind the context,
// where context is the value that 'this' has to its parent context.
// arrow functions do not have their own value for 'this' and they inherit, they reach up into the parent scope
// and grab that value of 'this' in that parent scope. This replace any time of .bind or replaces a need `var this = that; that.whatever;`
// For example???
const createTuple = (a, b, c, d) => {
    console.log(`createTuple this keyword: ${this}`);
    return [[a, c],[ b, d]];
  }
createTuple('It', 'be', 'could', 'anyone', 'no one'); //Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
// The this keyword reference the window context;


// !!!Important!!! Arrow functions also has no arguments object. So the arguments keyword, at call time,
// gets bound to all the arguments that are being passed into the function.
// For example
// const createTuple3 = (a, b, c, d) => {
//     console.log(arguments);
//     return [[a, c],[ b, d]];
//   }
// createTuple('It', 'be', 'could', 'anyone', 'no one'); //Uncaught ReferenceError: arguments is not defined at createTuple
// This is because we are using arrow function

// This will work!
const createTuple4 = function(a, b, c, d){
    console.log(`createTuple4 arguments keyword: ${arguments}`);
    return [[a, c],[ b, d]];
  }
  
createTuple4('It', 'be', 'could', 'anyone', 'no one'); //Arguments(5) ["It", "be", "could", "anyone", "no one", callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Projecting Exercise
const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false }
    ]
  }
];

let _ = {};
_.filter = function(list, callback) {
  const storage = [];
  for (let i = 0, length = list.length; i < length; i++) {
    // Make this explicit to equal to true
    if (callback(list[i], i, list) === true) {
      storage.push(list[i]);
    }
  }
  return storage;
};

_.map = function(list, callback) {
  const storage = [];
  for (let i = 0, length = list.length; i < length; i++) {
    storage.push(callback(list[i], i, list));
  }
  return storage;
};

const finalSuspects = _.map(
  _.filter(videoData, suspect => suspect.present),
  suspect => suspect.name
);

// Before the spread, we have to use 'arguments' keyword and it's a object. It could be use to figure out how many arguments are in. 
// You can also debug function arguments by using console.log(arguments)


// When you don't pass the arguments that has the default parameters, the arguments object will only have the explicit values being passed into the function
// The default value and spread operator, it's not going to include.
// For example
const add = function(a, b=2){
  console.log(arguments); //logs [3]
  return a+b;
}
add(3); //5

// ES5 version
var add2 = function(a, b){
  b = b || 2;
  console.log(arguments);
  return a + b;
}

add2(4); // 6
