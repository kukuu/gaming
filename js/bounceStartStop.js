
//Author: Alexander Adu-sarkodie
// Purpose: HTML5 motion script for bouncing ball
//Note: ClearRect function allows deleting of previous initialised circles 
//to be deleted to allow room for subsequent initialised circles to follow.
// Motion is triggered with a START button and can be terminated with a STOP button.

var canvas, c;

var requestId;

var canvas = document.getElementById("my_canvas");

var c = canvas.getContext("2d");

//create te container that will hold the bouncing balls.
var container = {
  x: 0,
  y: 0,
  width: 600,
  height: 300
};

//create the array of circles that will be animated
var circles = [{
  x: 50,
  y: 100,
  r: 10,
  vx: 10,
  vy: 9,
  color: 125
}, {
  x: 150,
  y: 80,
  r: 20,
  vx: 15,
  vy: 8,
  color: 205
}, {
  x: 90,
  y: 150,
  r: 5,
  vx: 5,
  vy: 15,
  color: 25
}, {
  x: 100,
  y: 50,
  r: 15,
  vx: 8,
  vy: 10,
  color: 100
}];

function animationLoop(timestamp) {
        // i - Clear. If not cleared the circle formation will not be generated. Rectangular shaped strip would result
      c.clearRect(0, 0, canvas.width, canvas.height);

      // ii. Draw each subsequent circle
      animate();

      // call again mainloop after 16.6 ms (60 frames/s)
      requestId = requestAnimationFrame(animationLoop);
  
}

function animate() {
   // Save and restore context in the end
  c.save();
  
  //draw the container
  c.fillStyle = "#000000";
  c.fillRect(container.x, container.y, container.width, container.height);

  //loop through the circles array
  for (var i = 0; i < circles.length; i++) {
    //draw the circles
    c.fillStyle = 'hsl(' + circles[i].color++ + ', 100%, 50%)';
    c.beginPath();
    c.arc(circles[i].x, circles[i].y, circles[i].r, 0, Math.PI * 2, true);
    c.fill()

    //time to animate  circles. Bouncing back and forwards. 
    //Calculating and managing diffs on both x and y axis - horizontal and vertical
    if (circles[i].x - circles[i].r + circles[i].vx < container.x || circles[i].x + circles[i].r + circles[i].vx > container.x + container.width) {
      circles[i].vx = -circles[i].vx;
    }

    if (circles[i].y + circles[i].r + circles[i].vy > container.y + container.height || circles[i].y - circles[i].r + circles[i].vy < container.y) {
      circles[i].vy = -circles[i].vy;
    }

    //Add incrementals to current states
    circles[i].x += circles[i].vx
    circles[i].y += circles[i].vy
  }
 
     //  Restore motion from saved - save()
     c.restore();
}


function start() {

   // Start the animation loop, targets 60 frames/s

   requestId = requestAnimationFrame(animationLoop);
 }

 function stop() {

  // Stop the animation loop,
   if (requestId) {
      cancelAnimationFrame(requestId);
   }
 }