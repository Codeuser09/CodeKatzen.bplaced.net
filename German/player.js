posx = 400;
animPosition = 800;

loop = true;
enem1D = false;
enem2D = false;

setSPosx = true;
enemPosx1 = Math.random() * 2000;
enemPosx2 = Math.random() * 2000;




drawSquare(posx, 865, 100, 100);

//Player
function left(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    posx = posx - 50;
    drawSquare(posx, 865, 100, 100);
    enemLeft1();
    enemLeft2();
}

function right(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    posx = posx + 50;
    drawSquare(posx, 865, 100, 100);
    enemRight1();
    enemRight2();
}

function shoot(){
    animPosition = 800;
    sposx = posx;



    animate();
    enemShoot1();
    enemShoot2();





}

function animate(){
    animPosition --;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSquare(posx, 865, 100, 100);
    drawSquare(sposx, animPosition, 50, 50);
    requestAnimationFrame(animate);
    enemShoot1();
    enemShoot2();

    //Win check
    if(sposx > enemPosx1 - 100 && sposx < enemPosx1 + 100 && animPosition < 100 && loop == true){
        enem1D = true;
    }

    if(sposx > enemPosx2 - 100 && sposx < enemPosx2 + 100 && animPosition < 100 && loop == true){
        enem2D = true;
    }


    if(enem1D == true && enem2D == true && loop == true){
        loop = false;
        document.write("You Win!");
    }



}

//enemy:
loop = true;

drawSquare(enemPosx1, 0, 100, 100);

function enemRight1(){
    drawSquare(enemPosx1, 0, 100, 100);
}

function enemLeft1(){
    drawSquare(enemPosx1, 0, 100, 100);
}


function enemShoot1(){
    drawSquare(enemPosx1, 0, 100, 100);
}


//Enemy2
loop = true;

drawSquare(enemPosx2, 0, 100, 100);

function enemRight2(){
    drawSquare(enemPosx2, 0, 100, 100);
}

function enemLeft2(){
    drawSquare(enemPosx2, 0, 100, 100);
}


function enemShoot2(){
    drawSquare(enemPosx2, 0, 100, 100);
}