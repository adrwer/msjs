// Functions without a name
// They are dynamically declared at runtime
// Common uses are for recursion and enclosures

/* Types of anonymous functions include: */
// function expression
var sayHi = function(){
    alert("Hello");
};

// in an object
var Lion = {
    sayName: function(){
        alert("My name is Lion");
    }
};

// event handler
$("p").click = function(){
    alert("Hello");
};

// self invoking functions
((function(){
    alert("Hello");
})());

/* Recursion */
// In a recursive function you continuosly call the same function 
// in this case we use the arguments.callee local variable since we are using an anonymous function

var factorial = function(x){
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
}

console.log(factorial(10));

/* Enclosures */
// theLocation function in our enclosures example used anonymous functions in the get and set of the return object(enclosure)