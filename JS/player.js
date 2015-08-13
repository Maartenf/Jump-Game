/* 	player.js
	======================================
	Class for player
*/

var Player = {

	//Player center coordinats
	x: 100,
	y: 100,

	//Size of player
	size: 30,

	//How fast the player goes
	speed: 2,

	//Update x-coordinate of player
	update: function() {
		if (KeyHandler.keys[39]) this.x += this.speed;
		else if (KeyHandler.keys[37]) this.x -= this.speed;
	},

	//Draw updated player to the canvas
	draw: function() {
		ImageHandler.drawImage(this.x - this.size / 2, this.y - this.size / 2, "player", 25);
	}

};