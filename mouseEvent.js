const logo =  document.querySelector('img');

const addbtn =  document.querySelector('.btn');

const onClick  = () => console.log('click event')
const onDoubleClick  = () => {
   if(document.body.style.backgroundColor !== 'purple') {
       document.body.style.backgroundColor = 'purple';
       document.body.style.color = 'white';
   } else {
   document.body.style.backgroundColor = 'white';
   document.body.style.color = 'black';
}
}

    // console.log('double click event')
const addBtnClick = () => console.log('add clicked something')
const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('Drag start event');
const onDrag = () => console.log('Drag event');
const onDragEnd = () => console.log('Drag end event');

// Events Listener
addbtn.addEventListener('click', addBtnClick);
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick)
logo.addEventListener('contextmenu', onRightClick)
logo.addEventListener('mousedown', onMouseDown)
logo.addEventListener('mouseup', onMouseUp)
logo.addEventListener('wheel', onMouseWheel)
logo.addEventListener('mouseover', onMouseOver)
logo.addEventListener('mouseout', onMouseOut)
logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragend', onDragEnd)
// logo.addEventListener()