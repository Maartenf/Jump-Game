/* 	background.js
	======================================
	Class for background
*/

var Background = {

	//Size of one tile
	tileSize: 20,

	//Start y-coordinate to draw
	y: -20,

	//Update and draw map to canvas
	updateAndDraw: function() {
		//Store animation frame for all tiles
		var animationFrame = SpriteAnimationManager.getFrame("background");

		//Move along y-axis
		for (var yCo = this.y; yCo <= Engine.height; yCo += this.tileSize) {
			//Move along x-axis
			for (var xCo = 0; xCo <= Engine.width - this.tileSize; xCo += this.tileSize) {
				//Draw tile
				ImageHandler.drawImage(xCo, yCo, animationFrame, 4);
			}
		}

		//Scroll background according to player speed
		this.y += Player.speed;

		//Reset background position
		if (this.y >= 0) this.y = -20;
	}

};