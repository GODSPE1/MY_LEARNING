console.log('Load canvas')
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green'
ctx.fillRect(100, 10, 150, 100);

ctx.beginPath();
ctx.moveTo(300, 250)
ctx.lineTo(1, 10);
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.stroke();



// drawing text
ctx.font = '30px Arial';
ctx.fillStyle = 'blur';
ctx.fillText('Hello World', 300, 59, 300)