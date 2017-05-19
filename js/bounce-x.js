	//Author: Alexander Adu-sarkodie
	// Purpose: HTML5 motion script for bouncing ball
	//Note: ClearRect function allows deleting of previous initialised circles 
	//to be deleted to allow room for subsequent initialised circles to follow.

		var context;
		var dx = 4;
		var dy = 4;
		var y = 150;
		var x = 10;
		
	function bounce(){
		context= myCanvas.getContext('2d');
		context.clearRect(0,0,300,300);
		context.beginPath();
		context.fillStyle="#ff0000";
		context.arc(x,y,20,0,Math.PI*2,true);
		context.closePath();
		context.fill();
		if( x<0 || x>300)
		dx = -dx;
		if( y<0 || y>300)
			dy = -dy;
			x +=dx;
			y +=dy;
		}
	setInterval(bounce,10); 