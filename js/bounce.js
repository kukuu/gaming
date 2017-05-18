// Purpose: Bouncing Ball
//Author: Alexander Adu-Sarkodie
//Script Language: Vanila JavaScript
//Compatibitlity: Cross Browser compatible
//External Libraries: None
//Performance: Very high and lightweight

	var step = 5; //Bounce steps

	var delay = 30;

	var height = 0;

	var Hoffset = 0; //Height offset

	var Woffset = 0;//Width offset

	var yon = 0; //Set initial vertical position

	var xon = 0;//Set initial horizontal position

	var pause = true;

	var interval;

	var name = navigator.appName;

	if(name == "Microsoft Internet Explorer") {
		name = true;
	}

	else name = false;

	var xPos = 20; //mediating transitiononing positioning

	if(name) {
			var yPos = document.body.clientHeight;
	}

	else {
			var yPos = window.innerHeight;
	}

	//Computing changing positions - interactivity
	function changePos() {
		if(name) {
			width = document.body.clientWidth;

			height = document.body.clientHeight;

			Hoffset = img.offsetHeight;

			Woffset = img.offsetWidth;

			img.style.left = xPos + document.body.scrollLeft; //generated delta changes for elipses

			img.style.top = yPos + document.body.scrollTop;
		}

		else {
			height = window.innerHeight;

			width = window.innerWidth;

			Hoffset =33;

			Woffset =30;

			document.getElementById('img').style.top = yPos + window.pageYOffset;

			document.getElementById('img').style.left = xPos + window.pageXOffset;
		}

		//Calculate deltas and edge cases

		if (yon) {
			yPos = yPos + step;
		}

		else {
			yPos = yPos - step;
		}

		if (yPos < 0) {
			yon = 1;
			yPos = 0;
		}

		if (yPos >= (height - Hoffset)) {
			yon = 0;
			yPos = (height - Hoffset);
		}

		if (xon) {
			xPos = xPos + step;
		}

		else {
			xPos = xPos - step;
		}

		if (xPos < 0) {
			xon = 1;
			xPos = 0;
		}

		if (xPos >= (width - Woffset)) {
			xon = 0;
			xPos = (width - Woffset);
		}
	}

	//Initialise bouncing, interactivity and pause states. 
	//global interval property initialises the  change states
	// using delay property to control speed

	function start() {
		document.getElementById('img').style.visibility = "visible";
		interval = setInterval('changePos()',delay);
	}

	
	function pauseResume() {
		if(pause) {
		clearInterval(interval);
		pause = false;
	}

	else {
		interval = setInterval('changePos()',delay);
		pause = true;
	}
}

start();