const firstName = 'Sara';
const lastName = 'Smith';
const age = 30;
const test = 'Hello from javascript';
const courses = 'web development,web design,cloud';


let val;

val = firstName +lastName;
// no space concatination

//concatination
val = firstName+' '+lastName;
//concatination with scpace

//Append
val = 'kim';
val += 'Smith';

// escaping
 val = 'That\'s awsome';

//length
val = firstName.length;

// change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

//char at
val = firstName.charAt('2');

//indexOf
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

//substring
val =  firstName.substring(0,2);

//slice
val= firstName.slice(0,3);
 val= firstName.slice(-3);

//split
val = test.split(' ');
val = courses.split(',');

//replace (case sensetive)
val = test.replace('javascript','React.js');


//includes()
val = test.includes('sara');

console.log(val);