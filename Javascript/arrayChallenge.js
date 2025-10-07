
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];
// people.forEach(function (itm) {
//     if (itm.age <= 25)
//         console.log(JSON.stringify(itm));
// });

// for (let i = 0; i < people.length; i++) {
//     if (people[i].age <= 25)
//         console.log(JSON.stringify(people[i]));
// };

const youngPeople = people.filter((people) => people.age <= 25).map((person) => ({
    name: person.firstName + ' ' + person.lastName,
    email: person.email
}));

console.log(youngPeople);
