const faceColor = document.getElementById('face-color');
const borderColor = document.getElementById('border-color');
console.log(borderColor.value);
const linesColor = document.getElementById('number-lines-color');
const largeHandsColor = document.getElementById('large-hand-color');
const secondHandColor = document.getElementById('second-hand-color');


console.log('animatedclock.js loaded');
function clock() {
    const now = new Date;
    const canva = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // setUp canva
    ctx.save() // save thr default state

    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250); // put in the middle
    ctx.rotate(-Math.PI / 2) // rotate -90 degrees


    // set default styles
    ctx.strokeStyle = '#000000'
    ctx.fillStyle = '#f4f4f4';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    
    // Draw clock phase/border
    ctx.save();
    ctx.beginPath()
    ctx.lineWidth = 14;
    ctx.strokeStyle = borderColor.value;
    ctx.fillStyle = faceColor.value;    
    ctx.arc(0,0, 142, 0, Math.PI * 2, true);
    ctx.stroke()
    ctx.fill();
    ctx.restore();
    
    
    // draw hour lines or marks 
    ctx.save()
    for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI / 6);
        ctx.beginPath();
        ctx.moveTo(100,0);
        ctx.strokeStyle = linesColor.value;
        ctx.lineTo(118,0)
        ctx.stroke();
    }
    ctx.restore()
    
    // draw minutes lines or marks 
    ctx.save()
    ctx.lineWidth = 4;
    ctx.strokeStyle = linesColor.value;
    for (let i = 0; i < 60; i++) {
        if (i % 5 != 0) {
            ctx.beginPath();
            ctx.moveTo(110,0);
            ctx.lineTo(117,0)
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore()


    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours() % 12;
    // console.log(`${hr}: ${min}, ${sec}`);
    
    
    // draw hour hand
    ctx.save();
    ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.strokeStyle = largeHandsColor.value
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(-14,0);
    ctx.lineTo(90,0);
    ctx.stroke();
    ctx.restore();
     
    // draw minute hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.strokeStyle = secondHandColor.value;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(-14,0);
    ctx.lineTo(117,0);
    ctx.stroke();
    ctx.restore();
    
    
    
    
    
    // draw second hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * sec);
    ctx.strokeStyle = secondHandColor.value;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-30,0);
    ctx.lineTo(110,0);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = secondHandColor.value;
    ctx.arc(0,0,9,0, Math.PI * 2, true);
    ctx.fill();     
    ctx.restore();
    ctx.restore() // restore the default state

    window.requestAnimationFrame(clock);
}
clock();

window.requestAnimationFrame(clock);