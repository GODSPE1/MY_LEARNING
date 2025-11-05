const text =  document.querySelectorAll('h1');
console.log(text);
text.forEach((item) => {
    item.style.color = 'red';
    console.log(item)
})

// select elemrnts by id
const parentElement = document.getElementById('parent');
const childElement = document.getElementById('child');

// check for parentchild reletionship

if (parentElement.contains(childElement)) {
    console.log('The child Element is a descendant of the parentElement .')
} else {
    console.log('The child Element is not a descendant of the parentElement .')
}

// using includes methods 
const myString = "Hello, this is my fathers world what can you doabout it.";
// const textToCheck = 'my';
// const textToCheck = 'is';
const textToCheck = 'hello';
if (myString.includes(textToCheck)) {
    console.log(`The text contains the word ${textToCheck}`);    
} else {
    console.log(`${myString}does not contain the word ${textToCheck}`);    
}


// includes method can be used for and array also
const number = [1, 2, 3, 4, 5, 6];

if (number.includes(2)) {
    console.log(`this number is in the array ${number}`)
} else {
    console.log(`this number is not in the ${number}`)
}


// .contains() method is used check if an element's classList contains a specific class name.

// parentElement.className = 'hi'
parentElement.classList.add('active');
// console.log(parentElement);


// validate using contains
if (parentElement.classList.contains('active')) {
    console.log('This class list contains active')
} else {
    console.log('This class list does not contains active')
}




const myMap = new Map();
myMap.set('name', 'Igbojionu');
console.log(myMap);

// myMap.forEach((t) => {
//     // console.log(t);
// })
// validate using has
if (myMap.has('name')) {
    console.log('myMap has name in it');
}

const evenDouble = number
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble); // [4, 8, 12, 16, 20]


const mySet = new Set([1, 2, 3]);
console.log(mySet);
mySet.forEach((item) => {
    console.log(item)
})    



const numberSet = new Set(number);
numberSet.forEach((item) => {
    console.log(item);
})

// validate set using .has method
if (numberSet.has(3)) {
    console.log('numberSet has 3 in it');
} else {
    console.log('numberSet does not have 3 in it');
}


// const newSet = {4, 8, 12, 16, 20};
// console.log(newSet);




const myMapInfo = new Map();
myMapInfo.set('age', '12');
myMapInfo.set('class', 'ss3');
console.log(myMapInfo);

myMapInfo.forEach((v, k) => {
    console.log(`${k}, ${v}`);
})


// using forof
for (const [key, value] of myMapInfo) {
    console.log(`${key}, ${value}`);
}


for (const key of myMapInfo.keys()) {
    console.log(`key: ${key}`);
}

for (const value of myMapInfo.values()) {
    console.log(`value: ${value}`);
}   


for (const entry of myMapInfo.entries()) {
    console.log(`${entry}`);
}

// using for in
for (key, value in myMapInfo) {
    console.log(`key: ${key}`, `value: ${value}`);
}
