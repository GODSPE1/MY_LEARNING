const addStopEvent = document.getElementById('stop');
const addStartEvent= document.getElementById('start');


function changeText() {
    console.log(timerId);
}

// const timerId = setTimeout(changeText, 5000);// why is the timeout alwys one

// document.querySelector('#cancel').addEventListener('click', () => {
    //     console.log(timerId);
    //     clearTimeout(timerId);
    //     console.log('Timer Cancelled');
    // })
    
    
    let button_intervalID;
    let intervalID;

    
    function startChange() {
        if (!intervalID && !button_intervalID) {
            button_intervalID = setInterval(changeRandomButtonColour, 500);
            intervalID = setInterval(changeRandomColour, 3000);
        };
    }

    function randomHexColorNumber() {
        const random = Math.floor(Math.random() *16777215).toString(16);
        return  random
    }
    
    function changeRandomColour() {
        randomColour = randomHexColorNumber();
        document.body.style.backgroundColor = `#${randomColour}`;
        document.querySelector('h1').textContent = `The code of the Colour is ${randomColour}`;
}

  function changeRandomButtonColour() {
        randomColour = randomHexColorNumber();
        document.getElementById('start').style.backgroundColor = `#${randomColour}`;
}
//  function startColourChange() {
//     
        
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//         console.log('wooooooooo white')
//     }

//  }

function stopChange() {
    clearInterval(intervalID);
    clearInterval(button_intervalID);
    addStartEvent.removeEventListener('click', stopChange);
    addStartEvent.removeEventListener('click', startChange);
    if (document.body.style.backgroundColor !== 'white') {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        console.log('wooooooooo black')
    } 
    console.log('Stoped the interval')
}



addStopEvent.addEventListener('click', stopChange);
addStartEvent.addEventListener('click', startChange);


