// let , const 
// How to name a variable 
// letters , numbers , _ , $
// variable name can not start with numbers


//let keyword 
let student = 'Sara';

// initialise the variable
let output;

// let variable can be updated
//  output = 666;
//  output = 777;

// let variable canot be redeclared in the same scope
//  let output = 666;

console.log(output); /*undefined (uncomment line 13 to define and line
14 to re-define)*/
console.log(student);


// const  
const person = 'John';

const value = 555;

/* if this line is executed will get an error because
const value cannot be re-declared & updated */
//  person = 'Sam';
// value= 666;

// const must have value
// const value;

console.log(person);
console.log(value);

// multi words 
let firstName = 'Sara';  //camelCase  *
let LastName = 'Smith';   //PascalCase
let first_name = 'Doe';   //Underscore