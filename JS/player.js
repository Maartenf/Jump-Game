/* 	player.js
	======================================
	Class for player
*/

var Player = {

	//Player coordinates
	x: 100,
	y: 100,

	//How fast the player moves
	speed: 6,

	//Factor of image scalation
	scaleFactor: 5,

	//Size of player
	size: 25,

	//Update x-coordinate of player
	update: function() {
		if (KeyHandler.keys[39]) this.x += this.speed;
		else if (KeyHandler.keys[37]) this.x -= this.speed;

		//Make sure the player can't get off screen
		if (this.x < 0) this.x = 0;
		else if (this.x + this.size > Engine.width) this.x = Engine.width - this.size;
	},

	//Draw updated player to the canvas
	draw: function() {
		ImageHandler.drawImage(this.x, this.y, SpriteAnimationManager.getFrame("walk"), this.scaleFactor);
	}

};