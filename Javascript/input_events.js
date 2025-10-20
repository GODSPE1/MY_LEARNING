// const itemInput = document.getElementById('item-input').addEventListener('input', (e) => {
    //     heading.textContent = e.currentTarget.value
    
    // });
    

const itemInput = document.getElementById('item-input')
const heading = document.getElementById('app-title');
const option = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");



function onInput(e) {
    console.log(e.target.value)
    
}

function oncheck(e) {
    const ischecked = e.target.checked
    // console.log(ischecked ? 'checked' : 'Not checkd');
    heading.innerText = ischecked ? 'checked' : 'Not checkd';
    
} 



function focus() {
    // console.log('input is focused')
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'rgba(235, 113, 113, 0.82)';
    // heading.textContent = 'You are typing';
}

function blur () {
    console.log('Input is out of focus')
    itemInput.style.outline = 'None';
}

// itemInput.addEventListener('keydown', onInput);
// itemInput.addEventListener('input', onInput); // better than keydown
option.addEventListener('change', onInput)
checkbox.addEventListener('input', oncheck)
itemInput.addEventListener('blur', blur); 
// heading.removeEventListener(blur);
itemInput.addEventListener('focus', focus);




// Remember keyevents goes with key event object e.g keydown keypress, keyup
// while input goes with e.target.value for their values