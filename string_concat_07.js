const firstName = 'Sara';
const lastName = 'Smith';
const age = 30;
const test = 'Hello from Javascript';
const courses = 'web development, web design, cloud';


let val;

val = firstName + lastName;

// Concatination
val = firstName + ' ' + lastName;

// Append
val = 'Kim';
val += 'Smith';

// Escaping
val = 'That\'s awesome';

// Length
val = firstName.length;

// Change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// Char at
val = firstName.charAt('2');

// Index of
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a')

// Substring
val = firstName.substring(1,3);

// Slice
val = firstName.slice(0,3);
val = firstName.slice(-3);

// Split
val = test.split(' ');
val = courses.split(',')

// Replace
val = test.replace('Javascript', 'React.js');

// Includes
// val = test.includes('Javascript');
val = test.includes('javascript');

console.log(val);