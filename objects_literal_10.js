
const person = {
    firstName: 'Sara',
    lastName: 'Smith',
    age: 30,
    email: 'sara@gmail.com',
    hobbies: ['music', 'sport'],
    address: {
        city: 'KL',
        country: 'Malaysia'
    }
}

let val;

// Get specific value
val = person.age;
val = person['lastName'];
val = person.firstName;
val = person.hobbies;
val = person.hobbies[0];
val = person.hobbies[1];
val = person.address;
val = person.address.city
val = person.address.country;
val = person.email;

// console.log(val);

const people = [
    {userName: 'Sara', age: 30},
    {userName: 'Kim', age: 35},
    {userName: 'John', age: 40},
];

console.log(people);
val = people[0].userName;

// console.log(val);

for (let i = 0; i < people.length; i++) {
    console.log(people[i].age);
}