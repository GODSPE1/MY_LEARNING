// console.log(window.document)
console.log(document.body.innerText);


console.log(document.links[1]);

// document.body.innerHTML = '<h1>hello</h1>';
document.write('Hello world!')
// console.log(write);

console.log(document.getElementById('nothing'));
console.log(document.getElementById('alx'));

const changeNothing = document.getElementById('nothing');changeNothing.innerHTML = 'changed nothing into a sentence';

const changeNothing2 = document.getElementById('nothing').innerHTML = 'reversed to gibberish';



const greet = 'Hello World';
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
const socials = ['Twitter', 'LinkedIn', 'X', 'Facebook', 'Youtube'];


for (social in socials) {
    console.log(socials[social])
};


for (color in colors) {
    console.log(colors[color])
}

for (const social of socials) {
    console.log(social);
}


// colors.forEach((i) => console.log(i))

colors.forEach(listColors);

function listColors(i) {
    console.log(i)
}



const numbers = [1, 2, 3, 4];

const doubleNumbers = [];

numbers.forEach((numbers) => {
    doubleNumbers.push(numbers * 2);
})


console.log(typeof(doubleNumbers));


const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];


// for (company in companies) {
//     console.log(companies[company]);
// }



const companyName = companies.map((company) => company.name)
console.log(companyName)
companyName.forEach((i) => console.log(i));

const companyYear = companies.map((company) => company.start)
console.log(companyYear);
for (company in companyYear) {console.log(companyYear[company])};

// const companyInfo = companies.map((i) =>{
//     return {
//         name: i.name,
//         year: i.start
//     }
// })

const companyInfo = companies.map((company) => {ompany.name, company.start);
companyInfo.forEach((i) => console.log(i));


// event bubbling
