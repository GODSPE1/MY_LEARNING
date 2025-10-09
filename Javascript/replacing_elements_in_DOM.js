
function replaceFifthItem() {
    const listItems = document.querySelectorAll("li");
    const fifthItem = listItems[4]; // Index 4= fifth item
    const newLi = document.createElement('li');
    newLi.textContent = 'The Fifth item replaced!';

    fifthItem.replaceWith(newLi);
}


function replaceItem() {
    const listItems = document.querySelectorAll('li');
    const secondItem = listItems[1];
    
    const newLi = document.createElement('li')
    newLi.textContent = "second item replaced";

    secondItem.replaceWith(newLi);

}
function replaceItem3() {
    const listItems = document.querySelectorAll('li');
    const thirdItem  = listItems[2];
    
    const newLi = document.createElement("li")
    /**
     * replacing_elements_in_DOM.js
     *
     * This script demonstrates various ways to replace elements in the DOM using JavaScript.
     * It includes functions to replace specific list items, headings, and form elements in an HTML document.
     * Functions are invoked at the end to showcase their effects on the DOM.
     */
    
    thirdItem.replaceWith(newLi);
}

function lasChildreplace() {
    const lasttem = document.querySelectorAll("li:last-child");
    // const lastchild = lasttem[3] 
}


function replaceFourthItem() {
    const fourthItem = document.querySelector('li:nth-child(4)');
    
    fourthItem.outerHTML = '<li>Fourth replaced</li>'
}


function replaceAll() {
    const listItems = document.querySelectorAll("li");

    // listItems.forEach((item, i) => {
    //     if (i === 6) {
    //         item.outerHTML = "<li>Seventh is replaced</li>";

    //     } else if (i === 7) {
    //         item.textContent = "Replaced eight";

    //     } else
    //     item.innerHTML = "Replace All";
    // })




    // using ternary operator
    listItems.forEach((item, index) => item.outerHTML = index === 6 ? '<li>Item six is changed</li>' : '<li>Replaced All</li>')
}


function replaceChildeHeading() {
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2')
    h2.id = 'app_title';
    h2.innerHTML = 'Shopping List';
    header.replaceChild(h2, h1);
}


function changeform() {
    const firstForm = document.querySelector('form');
    const firstButton = document.querySelector('button')
    const input = document.querySelector('input')
    firstButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Add Item  1';

    input.placeholder = "Write for Item 1 here..........."
}


function changeInputform2() {
    const form2 = document.querySelector("#item-form2");
    const form2Button = form2.querySelector("button");
                    const input = form2.querySelector("input");
}


changeform(),
changeInputform2(),
replaceAll();
replaceItem();
replaceItem3();
replaceFourthItem();
replaceFifthItem();
replaceChildeHeading()
