const div = document.createElement('div')

div.className = 'my-elements';

div.id = 'my-elements';

div.setAttribute('title', 'My-Elements');


// div.innerText = 'Hello world';


let text = document.createTextNode('Hello world');
div.appendChild(text);

document.body.appendChild(div);
document.querySelector('.item').appendChild(div);
// console.log(div)
