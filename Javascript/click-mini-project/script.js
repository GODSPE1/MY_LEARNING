// count update
let shoppingClickCount = 0;
let imgClickCount = 0;
let clickCount = [];


// shopping list
const titleName = document.getElementById('app-title').addEventListener('click', handleClick);
const img = document.querySelector('img').addEventListener('click', imagClick);
const buttons = document.querySelectorAll('.btn');

// title click
function handleClick () {
    shoppingClickCount += 1;
    console.log(`Shopping list was clicke and is: ${shoppingClickCount}`)
}

// logo click
function imagClick () {
    imgClickCount++;
    console.log(`img was clicke and is: ${imgClickCount}`)
}

// function clickincrementor(value) {
//     value++;
//     return value;
// }

// // items updates
// function setUpButton () {
//     const btn = document.querySelector('#item-form1 .btn');
    
//     let btn1 = 0;

//     btn.addEventListener('click', function() {
//         btn1++;
//         console.log(`btn1 was clicked and increased by one as: ${btn1}`)
//     });
// }

// Select ALL buttons with class 'btn'
buttons.forEach((btn, index) => {
    clickCount[index] = 0;
    btn.addEventListener('click', function() {
        clickCount[index]++;
        console.log(`Button ${index + 1} clicked ${clickCount} times`);
    })
    });