
/* main.js - Main file for the game */

//Main object used to store everything
window.game = {};

(function() {
	
	function Engine() {
		//True if the game is paused
		this.paused = false;
	}

	Engine.prototype.setupCanvas = function() {
		//Create canvas element
		var canvas = document.createElement("canvas");

		//Set id for CSS
		canvas.id = "gameCanvas";

		//Canvas dimensions width and height
		canvas.width = 600;
		canvas.height = 800;

		//Set canvas context accessible to the whole scope
		window.game.ctx = canvas.getContext("2d");

		//Add canvas to the body of the HTML page
		document.body.appendChild(canvas);
	};

	Engine.prototype.loop = function() {
		//Stop if the game is paused
		if (this.paused) return;

		console.log("loop the loop");

		//Call function again to form a loop
		requestAnimationFrame(this.loop.bind(this));
	};

	//Stop the game loop
	Engine.prototype.pauseGame = function() {
		this.paused = true;
	};

	//Resume the game loop
	Engine.prototype.resumeGame = function() {
		this.paused = false;
		this.loop();
	};

	//Function to start the game
	Engine.prototype.init = function() {
		//Setup game canvas
		this.setupCanvas();

		//Start game loop
		this.loop();
	};

	//Create engine
	game.engine = new Engine();

	//Canvas can only draw when the window is loaded
	window.onload = function() {
    	game.engine.init();
    }

})();