/**
 * @file Dom_Style_script.js
 * @description
 * This script is a great example for learning how to change the appearance of a webpage
 * using JavaScript. We'll select different HTML elements and then change their
 * CSS classes and inline styles when a button is clicked.
 */

// --- 1. Selecting Elements from the DOM ---
// Before we can change anything, we need to grab the HTML elements we want to work with.
// We use `document.querySelector()` to find the *first* element that matches a CSS selector.

const text = document.querySelector('p'); // Grabs the first <p> tag.
const h1Text = document.querySelector('h1'); // Grabs the first <h1> tag.
const itemList = document.querySelector('.item-list'); // Grabs the element with the class "item-list" (our <ul>).

// `querySelectorAll` is used to find *all* elements that match a selector.
// It returns a NodeList, which is like an array of elements.
const items = itemList.querySelectorAll('li'); // Grabs all the <li> elements that are inside our `itemList`.


/**
 * This function contains all the logic for changing the styles.
 * It will be executed every time the button is clicked.
 */
function run() {
    // --- 2. Manipulating CSS Classes with `classList` ---
    // The `classList` property is the modern and easiest way to add, remove, or check for CSS classes.

    // `replace('old-class', 'new-class')`: Finds 'card' and replaces it with 'white'.
    text.classList.replace('card', 'white');

    // `toggle('class-name')`: If the element has the 'dark' class, it removes it.
    // If it *doesn't* have the 'dark' class, it adds it. Perfect for things like dark mode!
    text.classList.toggle('dark');


    // --- 3. Changing Inline CSS Styles with the `style` property ---
    // The `style` property lets you directly change the CSS of an element.
    // This adds a `style="color: green;"` attribute directly to the HTML element.
    // Note: CSS properties with a hyphen like 'line-height' become camelCase in JavaScript ('lineHeight').

    text.style.color = 'green';
    h1Text.style.color = 'Red';
    itemList.style.lineHeight = '3';


    // --- 4. Styling Multiple Elements by Looping ---
    // Since `items` is a list of all our <li> elements, we can loop through them
    // using `forEach` to apply a style to each one.

    items.forEach((item, index) => {
        // `item` is the current <li> element in the loop.
        // `index` is its position in the list (starting from 0).

        // Set the color of every item to red.
        item.style.color = 'red';

        // We can also add a condition to style a specific item differently.
        // If this is the third item in the list (index 2), change its color to purple.
        if (index === 2) {
            item.style.color = '#8924dbff';
        }
    });
}

// --- 5. Attaching an Event Listener ---
// This line finds the first <button> on the page and tells the browser:
// "When this button is clicked, execute the `run` function."
// This is how we make the page interactive.
document.querySelector('button').onclick = run;

