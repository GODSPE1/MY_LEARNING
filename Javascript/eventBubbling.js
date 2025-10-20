const button = document.getElementById('addbtn');
const div = document.getElementById('form-div');
const form = document.querySelector('form');
const div2 = document.querySelector('div').addEventListener('click', () => {
    alert('Big Div Event')
    console.log('Big Div Event')
});
const body = document.querySelector('body').addEventListener('click', (e) => {
    alert('Body Event')
    console.log('Body Event')
});
// const window = window.document.querySelector('window').addEventListener('click', () => {
//     e.preventDefault();
//     alert('Window Event')
// });
// alert('div event');
// const div = document.querySelector('div').addEventListener('click', (e) => {
//     console.log('div event');
// })



function formEvent(e) {
    alert('Form event')
    console.log('form event')
}

function divEvent(e) {
    alert('DIV event');
    // e.stopPropagation(); // stopping the event 
    console.log('div event');
}

function clickEvent(e) {
    e.preventDefault();
    alert('Button event')
    console.log('button event')
}

button.addEventListener('click', clickEvent);
form.addEventListener('click', formEvent);
div.addEventListener('click', divEvent)


//event delegation
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach((list) => {
//     list.addEventListener('click', (e) => {
//         e.target.remove();
//     })
// })


list.addEventListener('click',(e) => {
    if (e.target.tagName === 'li');
    e.target.remove();