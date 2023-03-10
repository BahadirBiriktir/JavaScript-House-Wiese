

'use strict';
const appName = 'canvas';
document.getElementById('mytitle').innerText = appName;
document.getElementById('myheading1').innerText = appName;
let myCanvas = document.getElementById('myCanvas'); 
myCanvas.width = 400;
myCanvas.height = 400;
let ctx = myCanvas.getContext('2d'); 
ctx.strokeRect(0, 0, myCanvas.width, myCanvas.height); 

ctx.beginPath();
ctx.moveTo(0,0); 

ctx.strokeStyle = 'green';

ctx.strokeRect(90,150,220,170);
ctx.strokeRect(120,190,60,40);
ctx.strokeRect(220,190,60,40);
ctx.strokeRect(180,260,40,60);


ctx.beginPath();
ctx.strokeStyle = 'yellow';
ctx.arc(50, 50, 30, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(35,200);
ctx.lineTo(200,50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(365,200);
ctx.lineTo(200,50);
ctx.stroke();

for (let i = 0; i <= 400; i = i + 6) {
  if (i > 89 && i < 120){
    i=i + 215;
  }
  ctx.beginPath();
  ctx.moveTo(i+3,280);
  ctx.lineTo(i+3,320);
  ctx.strokeStyle='green';
  ctx.stroke();
}
  

