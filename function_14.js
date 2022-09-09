//function declaration
//prob
function greet (firstName, lastName){
    // if(typeof firstName === 'undefined'){firstname='John'}
    // if(typeof lastName === 'undefined'){lastname='Doe'}

    
    console.log(`Welcome! ${firstName} ${lastName}`);
};

greet();

// function expression

const square = function(x){
    return x*x;

};

console.log(square(5));

// immediate invokable function expression

(function(){
    console.log('IIFE RAN...')
})();


(function(userName = 'John'){
console.log(`welcome ${userName}`)
})();

// property method
// when a function is a property of an object, its called method

const todo= {
    add : function(){
        console.log('add to the list');
    },

    edit : function(){
        console.log('edit the list');
    }
}

todo.add();
todo.edit();