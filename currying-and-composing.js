// Currying: When you create a function that can later be called multiple times with different arguments
// Composing: When you tack two functions and combine them essentially 

// Closure: A function inside a function.
const myAlert = () => {
    const x = 'Help! I think I found a clue!';
    const alerter = () => {
        alert(x);
    };

    setTimeout(alerter, 1000);
    console.log('what happens first? this log or the alert?');
}

myAlert();

const myAlert2 = () => {
    const x = 'Help! I think I found a clue!';
    let counter = 0;
    const alerter = () => {
        alert(`${x} ${++counter}`);
    };

    return alerter;
}

// This will create one context start with counter 0
const funcAlert = myAlert2();

// This will create another context start with counter 0
const funcAlert2 = myAlert2();
funcAlert();// will only mutate the scope of the first myAlert2 context scope
funcAlert2(); // will only mutate the scope of the second myAlert2 context scope
// funcAlert()(); This will make undefinied() which throw a error

// a closure happens when you put two functions inside of a function, and you can take advantage of that by returning a function
// that retains access to it's parent function even after it has been executed.
// Closure Recipe
// 1. Create your parent function
// 2. define some variables in the parent's local scope
// 3. define a function inside the parent function, we call this a child
// 4. return the function from inside the parent function

// Creat _.curry by ourselves
const _ = {};
_.curry = (callback) => {
    let args = [];
    let add = function(params){
        if(args.length == callback.length){
            args = [];
        }
        args.push(...[...arguments]);
        console.log(args);
        if(args.length != callback.length){
            console.log(`Return another add`);
            return add;
        }else{
            console.log(`Call the callback`)
            return callback(...args)
        }
    }

    let callResult = (params) => {
        
    }

    return add;
}

let abcd = (a, b, c, d) => {
    return [a, b, c, d];
};

// Create _.compose by ourselves
_.compose = function(...callback){
    const funcs = Array.from(arguments);
    let result;
    const finalFunc = (args) => {
        for(let i = funcs.length - 1; i >= 0; i--){
            if(i === funcs.length - 1){
                result = funcs[i](args);
            }else{
                result = funcs[i](result);
            }
        }
        return result;
    }
    return finalFunc;
}