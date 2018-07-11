// A global variable is available throughout the entire code base
// To declare it, we don't even need to give 'var'.You can also attach the variable to window object, like window.hello

(function() {
  console.log("This is immediately invoked");
})(); //This way will immediately invoke the anonymous function

var beforeEachCallback;

var beforeEach = function(callback) {
  beforeEachCallback = callback;
};

var it = function(string, callback) {
  beforeEachCallback();
  console.log(string);
  callback();
};

var describe = function(string, callback) {
  console.log(string);
  callback();
};

console.log(typeof it === "function");

c = 7; //global
function scope() {
  a = 3; //global
  window.b = 5; //global

  var d = 4; //function scope
}

// Start the real test code
// inside the function, you can only access the values in the outer scopes or the current function scope
(function() {
  describe("Scope Exercises", function() {
    var ACTUAL;

    beforeEach(function() {
      console.log("-----------------------------");
      ACTUAL = null;
    });

    it("a function has access to its own local scope variables", function() {
      // If the name is identical, the variable will be masked inside the function
      var name = "something else";
      var fn = function() {
        var name = "inner";
        ACTUAL = name;
        console.log(`Inside fn, name: ${name}, ACTUAL: ${ACTUAL}`);
      };
      fn();
      console.log(`Outside fn, name: ${name}`);
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
      // expect(ACTUAL === 'inner').to.be.true;
    });

    it("inputs to a function are treated as local scope variables", function() {
      var fn = function(name) {
        ACTUAL = name;
        console.log(`Inside fn, name: ${name}, ACTUAL: ${ACTUAL}`);
      };
      fn("inner");
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("block scope can be created with let", function() {
      var fn = function() {
        var where = "outer";
        {
          let where = "inner";
          console.log(`Inside block, where: ${where}`);
        }
        ACTUAL = where;
        console.log(`Inside fn, where: ${where}, ACTUAL: ${ACTUAL}`);
      };
      fn("inner");
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("a function has access to the variables contained within the same scope that function was created in", function() {
      var name = "outer";
      var fn = function() {
        ACTUAL = name;
        console.log(`Inside fn, name: ${name}, ACTUAL: ${ACTUAL}`);
      };
      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("a function's local scope variables are not available anywhere outside that function", function() {
      var firstFn = function() {
        var localToFirstFn = "inner";
        console.log(`Inside firstFn, localToFirstFn: ${localToFirstFn}`);
      };
      firstFn();

      var fn = function() {
        try {
          ACTUAL = localToFirstFn;
        } catch (err) {
          console.log(
            `Inside catch clause. Because try to assign localToFirstFn to ACTUAL`
          );
          console.log(err);
        }
      };

      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("a function's local scope variables are not available anywhere outside that function, regardless of the context it's called in", function() {
      var firstFn = function() {
        var localToFirstFn = "first";
        console.log(`Inside firstFn, localToFirstFn: ${localToFirstFn}`);
        // Although false, it might seem reasonable to think that the secondFn (which mentions the localToFirstFn variable), should have access
        // to the localToFirstFn variable, since it's being called here from within the scope where that variable is declared.
        secondFn();
      };
      var secondFn = function() {
        ACTUAL = localToFirstFn;
        console.log(
          `Inside secondFn, localToFirstFn: ${localToFirstFn}, ACTUAL: ${ACTUAL}`
        );
      };

      var fn1 = function() {
        try {
          // of course, calling the secondFn should throw an error in this case, since secondFn does not have access to the localToFirstFn variable
          secondFn();
        } catch (err) {
          console.log(
            `Inside catch clause of fn1. Because try to call secondFn without context of localToFirstFn`
          );
          console.log(err);
        }
      };

      var fn2 = function() {
        try {
          // in addition, calling the firstFn (which in turn calls the secondFn) should also throw, since the calling
          // context of secondFn has no influence over its scope access rules
          // ! This is because secondF's parent scope is not firstFn, the it function's second arg anonymous function is its parent.
          // That's why localToFirstFn can't be found. firstFn and secondFn are siblings. The scope hierarchy defines statically
          firstFn();
        } catch (err) {
          console.log(
            `Inside catch clause of fn2. Because try to call firstFn and in turn class the secondFn, which has no context of localToFirstFn`
          );
          console.log(err);
        }
      };

      fn1();
      fn2();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("if an inner and an outer variable share the same name, and the name is referenced in the inner scope, the inner scope variable masks the variable from the outer scope with the same name. This renders the outer scope variables inaccessible from anywhere within the inner function block", function() {
      var sameName = "outer";
      var fn = function() {
        var sameName = "inner";
        ACTUAL = sameName;
        console.log(`Inside fn, name: ${sameName}, ACTUAL: ${ACTUAL}`);
      };
      fn();
      console.log(`Outside fn, sameName: ${sameName}`);
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("if an inner and an outer variable share the same name, and the name is referenced in the outer scope, the outer value binding will be used", function() {
      var sameName = "outer";
      var fn = function() {
        var sameName = "inner";
        console.log(`Inside fn, name: ${sameName}`);
      };
      fn();
      ACTUAL = sameName;
      console.log(`Outside fn, sameName: ${sameName}`);
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("a new variable scope is created for every call to a function, as exemplified with a counter", function() {
      var fn = function() {
        // the `||` symbol here is being used to set a default value for innerCounter. If innerCounter already contains a truthy value,
        // then value is that variable will be unchanged. If it is falsey however (such as if it were completely uninitialized),
        // then this line will set it to the default value of 10.
        var innerCounter = innerCounter || 10;
        innerCounter = innerCounter + 1;
        ACTUAL = innerCounter;
        console.log(
          `Inside fn, innerCounter: ${innerCounter}, ACTUAL: ${ACTUAL}`
        );
      };

      // Every time a function is invoked, a new execution context, aka. scope will created and all the variables in that scope
      // gonna be initialized whatever they are
      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("a new variable scope is created for each call to a function, as exemplified with uninitialized string variables", function() {
      // this is a longer form of the same observation as above, using strings instead of numbers.
      var fn = function() {
        var localVariable;
        if (localVariable === undefined) {
          // the variable will be initialized for the first time during this call to fn
          ACTUAL = "alpha";
        } else if (localVariable === "initialized") {
          // the variable has already been initialized by a previous call to fn
          ACTUAL = "omega";
        }
        console.log(
          `Inside fn, localVariable: ${localVariable}, ACTUAL: ${ACTUAL}`
        );
        localVariable = "initialized";
        console.log(`Inside fn, localVariable: ${localVariable}`);
      };

      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("an inner function can access both its local scope variables and variables in its containing scope, provided the variables have different names", function() {
      var outerName = "outer";
      var fn = function() {
        var innerName = "inner";
        ACTUAL = innerName + outerName;
        console.log(
          `Inside fn, outerName: ${outerName}, innerName, ${innerName}, ACTUAL: ${ACTUAL}`
        );
      };

      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });

    it("between calls to an inner function, that inner function retains access to a variable in an outer scope. Modifying those variables has a lasting effect between class to the inner function.", function() {
      var outerCounter = 10;
      var fn = function() {
        // Variation, try to give var here, the value will be NaN
        // var outerCounter = outerCounter + 1;
        // Variation, try to give let here, A error will throw
        // let outerCounter = outerCounter + 1;
        outerCounter = outerCounter + 1;
        ACTUAL = outerCounter;
        console.log(
          `Inside fn, outerCounter: ${outerCounter}, ACTUAL: ${ACTUAL}`
        );
      };

      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
      fn();
      console.log(`Outside fn, ACTUAL: ${ACTUAL}`);
    });
  });

  it("the rule about retaining access to variables from an outer scope still applies, even after the outer function call (that created the outer scope) has returned", function() {
    var outerFn = function() {
      // NOTE: the contents of this function is the same as the entire body of the previous test

      // if counterInOuterScope is use 'var', then the console.log will give undefined
      // However if use 'let', then a error will give with explicit reminding
      // console.log(counterInOuterScope); //undefined
      var counterInOuterScope = 10;

      var innerIncrementingFn = function() {
        counterInOuterScope = counterInOuterScope + 1;
        ACTUAL = counterInOuterScope;
        console.log(`Inside innerIncrementingFn, counterInOuterScope: ${counterInOuterScope}, ACTUAL: ${ACTUAL}`);
      };

      innerIncrementingFn();
      console.log(`Inside innerIncrementingFn, ACTUAL: ${ACTUAL}`);
      innerIncrementingFn();
      console.log(`Inside innerIncrementingFn, ACTUAL: ${ACTUAL}`);
      // Here, we retain a reference to the newly created inner function for later, by assigning it to the global scope (window)
      window.retainedInnerFn = innerIncrementingFn;
    };

    // before we run outerFn, there will be no innerFn exported to the global scope
    console.log(`Outside outerFn, retainedInnerFn: ${window.retainedInnerFn}`);//undefined
    // running this outer function should have the same effect as running the whole previous test, with the addition of placing the innerFn somewhere that we can reach it after outerFn has returned
    outerFn();
    console.log(`Outside outerFn, retainedInnerFn: ${window.retainedInnerFn}`);//function
    window.retainedInnerFn();
    console.log(`Outside outerFn, ACTUAL: ${ACTUAL}`);//13
    // Because it still runs inside the outerFn's scope, so it can access outerFn's variables
  });

})();

// The appropriate time to use 'let' is when you want to scope your variable inside of a block that's not a function.