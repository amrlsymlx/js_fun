// Create some arrays
const numbers = [43,65,77,100,1,23];
const numbers2=new Array(22,44,55,66,77);
const fruits = ['Apple','Orange','Kiwi','Peach'];
const mix = ['hello',3,true,undefined,{a:1,b:2}];

let val;


//add on to the end
numbers.push(777);

//add to the begining 
numbers.unshift(55);

//remove from the end
numbers.pop();

//remove from the begining
numbers.shift();

//splice
// numbers.splice(1,4);

//reverse
// numbers.reverse();


// console.log(numbers);


//concat
// val = numbers.concat(numbers2);

//sort arrays
// val = fruits.sort();
// val = numbers.sort();

// val = numbers.sort(function(x,y){
//     return x-y;
//  });

val = numbers.sort(function(x,y){
    return y-x
});

// function over50(num){
//     return num >50;
// };

// val = numbers.find(over50);

console.log(val);