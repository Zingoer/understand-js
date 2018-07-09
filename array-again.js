const constructArray = function(){
    // You can add a debug point with debugger;
    // We can see from debugger that arguments is an array like oboject
    console.log(Array.isArray(arguments)); //false
    console.log(arguments);
    // Turns array like object into an array
    const arr = Array.prototype.slice.call(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};

const question = constructArray('was', 'it', 'in');

// In ES6, we use Array.from to do the same thing as Array.prototype.slice.call
const constructArr = function(){
    console.log(arguments);
    // Turns array like object into an array
    const arr = Array.from(arguments);
    arr.push('the billiards room?');
    return arr.join(' ');
};

const sentence = constructArr('hello', 'world', '!');

// Implement our own from method
const from = arr => {
    return Array.prototype.slice.call(arr);
}

// Array-like object has length property
const hello = {};
hello.name = 'A';
hello.address = 'B';
hello[0] = 'C';
hello[1] = 'D';
hello[2] = 'E';
hello.length = 3;

// Functions are objects!
const combine = function(a, b){
    return a + b;
};

combine.example = 'testing 123!';
console.log(combine);
console.log(combine.example);