const div = document.createElement('div')

div.className = 'my-elements';

div.id = 'my-elements';

div.setAttribute('title', 'My-Elements');


// div.innerText = 'Hello world';


let text = document.createTextNode('Hello world');
div.appendChild(text);

document.body.appendChild(div);
// document.querySelector('.item').appendChild(div);
// console.log(div)



function createNewItem(item) {
  const li = document.createElement('li');

  li.appendChild(document.createTextNode(item));

  const button = document.createElement('button');

  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('i');

  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}




function createNewItem2(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  
  
  li.appendChild(button);
  
  document.querySelector('.items').appendChild(li);
}


function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
  
}

function createIcon(icon) {
  const icon1 = document.createElement('i');
  icon1.className = icon;
  return icon1;
  
}

createNewItem('Cheese');
createNewItem2('Fish');



