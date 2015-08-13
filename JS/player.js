/* 	player.js
	======================================
	Class for player
*/

var Player = {

	//Player center coordinats
	x: 100,
	y: 100,

	//Size of player
	diameter: 30,

	//How fast the player goes
	speed: 2,

	//Update x-coordinate of player
	update: function() {
		if (KeyHandler.keys[39]) this.x += this.speed;
		else if (KeyHandler.keys[37]) this.x -= this.speed;
	},

	//Draw updated player to the canvas
	draw: function() {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x - this.diameter / 2, this.y - this.diameter / 2, this.diameter, this.diameter);
	}

};