// Load html in browser and open the developer tool, all of the value will be available in global scope
var person = [];
person.name = 'Mrs. White';
var who = person.name;

who;
typeof person === 'array';
typeof person === 'object';

person[0] = 'I was not in the room';
// Directly use person[plea] = "I would never!"; will give error.
// Either use
person.plea = 'New value';
// Or
person['plea'] = 'Another value';

// Object
var box = {};
box; //{}
box['material'] = 'cardboard';
box[0] = 'meow';
box; //{0: "meow", material: "cardboard"}0: "meow"material: "cardboard"__proto__: Object
box.length; //undefined, because this is a object!

// Array
x = [];
x[0] = "meow";
x[1] = "hello";

// We can add property in array object
x['^&*'] = 'test';
x['material'] = 'cardboard';
x; //(2) ["meow", "hello", ^&*: "test", material: "cardboard"]0: "meow"1: "hello"^&*: "test"material: "cardboard"length: 2__proto__: Array(0)
x.length; // 2, array only counts the values indexed by numerical indices

// We can't initialize array like this, we can only initialize object with box={"material":"cardboard"}
// var y = [0: "a", 1: "b", "char": "c"]; //VM1142:1 Uncaught SyntaxError: Unexpected token 

// But we can give multiple values one time
var y = ["a", "b", "c"];
y;//(3) ["a", "b", "c"]

// If we jump through some index and insert value to the later index
x[5] = "some";
// Array will assign location until to this new index
x; //(6) ["meow", "hello", empty × 3, "some", ^&*: "test", material: "cardboard"]0: "meow"1: "hello"5: "some"^&*: "test"material: "cardboard"length: 6__proto__: Array(0)
// Though the value in the un-inserted index is undefined, notice the empty * 3 above?
x[4]; // undefined

// When you want to verify if the object is array
Array.isArray(x); //true

// If you use typeof, then it will alwasy give you back object
typeof x;//object
typeof y;//object
typeof box;//object
