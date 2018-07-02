// Old school
var obj = {first: 'Xiaoxi', last: 'Pang'};
var first = obj.first;
var last = obj.last;

// ES6 Destructuring
// Array
// Variable declaration
let [firstName, lastName] = ['Yiyi', 'Dai'];

// Assignment
[firstName, lastName] = ['Xiaoxi', 'Pang'];


// Object

// Declaration
let {fore, back} = {fore: 'hello', back: 'world'};

// Assignment
// {fore, back} = {fore: 'woo', back: 'ha'}; // No babel so this will not support if directly load

// Omit certain values
var[a, , b] = [1, 2, 3];

// Combine with spread/rest operator, assign rest of the values to a variable
var[c, ...d] = [1, 2, 3];

// Swap a value
var x = 1, y = 2;
[x, y] = [y, x];

// Advance deep arrays, though don't do this when possible, too deep and hard to understand
var [e, [f, [g, h]]] = [1, [2, [[[3, 4], 5], 6]]];

