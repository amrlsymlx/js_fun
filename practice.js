const person = {
    firstName:'sara',
    lastName:'Smith',
    age:30,
    email:'sara@gmail.com',
    hobbies:['music','sport'],
    address: {
        city:'KL',
        country:'Malaysia'
    }
}



const people = [
    {userName:'sara',age:30},
    {userName:'kim',age:35},
    {userName:'John',age:40},
];

console.log(people);
val = people[0].userName;

console.log(val);


// for(let i = 0 ; i < people.length  ; i++){
//     console.log(people[i].age);
// }