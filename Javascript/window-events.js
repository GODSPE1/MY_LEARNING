window.onload = function () {
    document.querySelector('h1').textContent = "Heading to change after windows events";
}


window.addEventListener('load', function () {
    document.querySelector('h1').textContent = 'Heading has been changed'
});


window.addEventListener('DOMContentLoaded', () => console.log('Dom Loaded'));
window.addEventListener('load', () => console.log('Page loaded'));



// console.log('Run me')

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('h1').textContent = 'Heading has been changed'
});

    document.querySelector('h1').textContent = 'Heading has been changed'
