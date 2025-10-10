// const logo =  document.querySelector('img');

// logo.addEventListener('click', function (e) {
//     console.log(e)
// }
// )


const logo = document.querySelector('img');
const app_name = document.querySelector("#app-title")


function onClick(e) {
    console.log(e.currentTarget)
    console.log(e.target)
    e.target.style.backgroundColor = "blue";
    // e.target.style.Color = "blue";
    console.log(e.type)
    console.log(`the time stamp is ${e.timeStamp}`)
    console.log(`This  X-axis ${e.clientX}`)
    console.log(`This Y-axis ${e.clientY}`)
    

}

const appTitle = (e) => 
    e.target.style.backgroundColor = "red";

function onDrag(e) {
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`
}

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);
app_name.addEventListener('click', appTitle);



// document.body.addEventListener('click', function (e) {
//     console.log(e.target)
//     console.log(e.currentTarget)
    
// })


document.querySelector('a').addEventListener('click', (e) => { e.preventDefault();
    console.log('Google link was clicked');
    
});