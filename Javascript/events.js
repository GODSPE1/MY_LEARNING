// const clearButton = document.querySelector('#clear');
// const ul = document.querySelector('ul');
// const li = document.querySelectorAll('li')

// function handleClearClick() {
//     li.forEach((c) => c.remove());
// }

// const clearButton = document.querySelector('#clear');
// const ul = document.querySelector('ul');

// function handleClearClick() {
    //     // ul.remove();
    //     // ul.innerHTML = '';
    //     // ul.outerHTMLHTML = '';
    //     ul.textContent = '';
    
    // }
    
    const clearButton = document.querySelector('#clear');
    const ul = document.querySelector('ul');

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

// javascript Event Listener
// clearButton.onclick = function () {
//         alert("Clear button clicked!");
//     }

// clearButton.onclick = function () {
//     console.log("Cleared items");
// }


    // Add Eeventlistener
    // clearButton.addEventListener('click', () => alert("Clear button clicked!"))
    clearButton.addEventListener('click', handleClearClick);


    // setTimeout(() => clearButton.removeEventListener('click', OnClear), 5000);
    