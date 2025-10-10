const itemInput =  document.getElementById('item-input');
const addItem = document.querySelector('button');

let buttonPressed = 0;
 
const onKeypress = (e) => {
    // console.log(`${e.key} was pressed`)
    if (e.key === 'Enter') {
        alert('You Pressed Enter')
    }


    //keycode
    if (e.keyCode === 13) {
        alert(' and also 13')
    }

    //code 
    if (e.code === 'KeyF') {
        console.log('f was pressed')
    } else if (e.code === 'Digit2') {

        console.log('2 was pressed')
    }

}

// const addButtonPressed (e) = {
    //     if (e.key === addItem) {
        
    //     }
    
    // }
    
    const onKeyup = e => console.log('keyup event');
    const onKeyDown = e => {
        
    // document.querySelector('h1').innerText = e.key
    console.log('keydown event');

    if (e.repeat) {
        console.log('You are holding down ' + e.key)
    }


    console.log('Shift:' + e.shiftKey);
    console.log('Control:' + e.ctrlKey);
    console.log('Alt:' + e.altKey);
}
const keyPressed = (e) => {
    // if (e.key === 'Enter') {
    //     console.log('You pressed the Enter key');
    // }

}


// keycode

// if (e.k)


// itemInput.addEventListener('keypress', onKeypress)
// itemInput.addEventListener('keypress', keyPressed)
// itemInput.addEventListener('keypress', onKeypress)

// itemInput.addEventListener('keyup', onKeyup)
itemInput.addEventListener('keydown', onKeyDown)
// addItem.addEventListener('click', addButtonPressed)


