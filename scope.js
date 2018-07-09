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
  });
})();
