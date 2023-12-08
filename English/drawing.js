const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function drawCircle(posx, posy, circleRadius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(posx, posy, circleRadius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

function drawSquare(posx, posy, scalex, scaley){
    ctx.fillRect(posx, posy, scalex, scaley);
}

function resetScreen(){
    ctx.fillStyle("blue");
    ctx.fillRect(0, 0, 2000, 2000);
}