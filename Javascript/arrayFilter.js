const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers);


const evenNumbers2 = numbers.filter(elements => numbers % 2 === 0);
console.log(evenNumbers);
// const

// let evenNumbers3 = [];
// numbers.forEach((number) => {
//     if (number % 2 === 0) {
//         evenNumbers3.push(number);
//     }
//     console.log(evenNumbers3)
// });
// notice how the above logs out numbers intead of pushing to the empty array

let evenNumbers3 = [];
numbers.forEach((item) => {
    if (item % 2 === 0) {
        evenNumbers3.push(item);
    }
});
console.log(evenNumbers3)


companyList = [
    {name: 'comapany One', category: 'Finance',  start:1981, end: 2004 },
    {name: 'comapany Two', category: 'Retail', start:1992, end: 2008 },
    {name: 'comapany Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'comapany Four', category: 'Retail', start:1989, end: 2010},
    {name: 'comapany Six', category:'Finance', start:1987, end: 2010},
    {name: 'comapany Seven', category:'Auto', start:1986, end: 1997},
    {name: 'comapany Eight', category:'Technology', start:2011, end: 2016 },
    {name: 'comapany Nine', category: 'Retail', start:1981, end:1989 },
];


const retailCompanies = companyList.filter((item) => item.category === 'Retail');
console.log(retailCompanies);