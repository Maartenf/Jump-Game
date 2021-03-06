/* 	engine.js
	======================================
	Game engine with loop
*/

var Engine = {

	//Canvas dimensions
	width: 0,
	height: 0,

	//True if the game is paused
	paused: false,

	setupCanvas: function() {
		//Create canvas element
		var canvas = document.createElement("canvas");

		//Set id for CSS
		canvas.id = "gameCanvas";

		//Canvas dimensions width and height
		canvas.width = 600;
		canvas.height = 800;

		//Store dimensions for later drawing
		this.width = canvas.width;
		this.height = canvas.height;

		//Set canvas context accessible to the whole scope
		window.ctx = canvas.getContext("2d");

		//Add canvas to the body of the HTML page
		document.body.appendChild(canvas);
	},

	loop: function() {
		//Stop the game when paused
		if (this.paused) return;

		//Update and draw background
		Background.updateAndDraw();
		
		//Update and draw island
		IslandManager.updateAndDrawIslands();
		
		//Update entities
		Player.update();

		//Draw entities
		Player.draw();

		//Call function again to form a loop
		requestAnimationFrame(this.loop.bind(this));
	},

	//Stop the game loop
	pauseGame: function() {
		this.paused = true;
	},

	//Resume the game loop
	resumeGame: function() {
		this.paused = false;
		this.loop();
	},

	//Function to start the game
	init: function() {
		//Setup game canvas
		this.setupCanvas();

		//Spawn islands
		IslandManager.createIsland();

		//Start game loop
		this.loop();
	}

};