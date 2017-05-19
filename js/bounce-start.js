 
//Author: Alexander Adu-sarkodie
// Purpose: HTML5 motion script for bouncing ball
//Note: ClearRect function allows deleting of previous initialised circles 
//to be deleted to allow room for subsequent initialised circles to follow.

function bounce () {

    var context;
    var dx= 4;  
    var dy=4;
    var y=150;
    var x=10;

    function draw(){
        context= myCanvas.getContext('2d');
        context.clearRect(0,0,400,400);
        context.beginPath();
        context.fillStyle="#00ff00";
        context.arc(x,y,10,0,Math.PI*2,true);
        context.closePath();
        context.fill();
        if( x<0 || x>400)
        dx=-dx;
        if( y<0 || y>300)
        dy=-dy;
        x+=dx;
        y+=dy;
    }
    setInterval(draw,10); 
}
