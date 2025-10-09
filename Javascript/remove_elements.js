/**
 * Removes the button element with the id 'clear' from the DOM.
 */
function removeClearButton() {}

/**
 * Removes the first <li> element from the first <ul> in the DOM using parentNode.
 */
function removeFirstItem() {}

/**
 * Removes the nth <li> element from the first <ul> in the DOM.
 * @param {number} itemNumber - The position of the <li> element to remove (1-based index).
 */
function removeItem(itemNumber) {}

/**
 * Removes the first <li> element from the first <ul> in the DOM using querySelectorAll.
 */
function removeItem2() {}

/**
 * Removes the 10th <li> element from the first <ul> in the DOM, if it exists.
 */
function removeItem3() {}

/**
 * Removes the nth <li> element from the DOM using querySelectorAll.
 * @param {number} itemNumber - The position of the <li> element to remove (1-based index).
 */
function removeItem4(itemNumber) {}

/**
 * Removes the nth <li> element from the DOM using querySelectorAll (arrow function).
 * @param {number} itemNumber - The position of the <li> element to remove (1-based index).
 */
const removeItem5 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();
// How to remove elements from the DOM

// Select the element to be removed
function removeClearButton() {
    const clrButton = document.querySelector('#clear');
    clrButton.remove();
}

// using parentNode to remove the firstplace
function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    
    ul.removeChild(li);
}

function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`)


    ul.removeChild(li);
}



function removeItem2() {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('ul > li');

    if (li.length > 0) {

        ul.removeChild(li[0]);
    }

}

/**
 * Removes the 10th <li> element from the first <ul> in the document, if it exists.
 */
function removeItem3() {
    const ul = document.querySelector('ul');
    const listItems = document.querySelectorAll('li');
    const li = listItems[9];

    if (li) {
        ul.removeChild(li);
    } 

}



function removeItem4(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

const removeItem6 = (itemNumber) => document.querySelectorAll('li')[itemNumber-1].remove();

// Call the function to remove the button
// removeItem2()
removeItem6(2);
removeItem(4);
removeClearButton();
// removeFirstItem();