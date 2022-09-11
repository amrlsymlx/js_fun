// Function declaration

// function greet(firstName, lastName) {
//     if(typeof firstName === 'undefined') {firstName = 'John'}
//     if(typeof lastName === 'undefined') {lastName = 'Doe'}

//     console.log(`Welcome ${firstName} ${lastName}`)
// }
function greet(firstName = 'John', lastName = 'Doe') {

    console.log(`Welcome ${firstName} ${lastName}`)
}

// Function declaration
greet();

// Function expression

const square = function(x = 3) {
    return x*x;
};

console.log(square(5));

// Immediate invokable function expression
(function (){
    console.log('IIFE RAN...')
})();

(function (userName = 'John'){
    console.log(`welcome ${userName}`)
})();

// Property method
// When a function is a property of an object, its called method

const todo = {
    add : function() {
        console.log('add to the list');
    },
    edit : function() {
        consolelog('edit the list');
    }
}

todo.add();