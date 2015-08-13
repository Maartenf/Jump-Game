/* 	player.js
	======================================
	Class for player
*/

var Player = {

	//Player coordinats
	x: 50,
	y: 50,

	//Size of player
	diameter: 30,

	//How fast the player goes
	speed: 0.5,

	//Update coordinats of player
	update: function() {
		this.x += this.speed;
		this.y += this.speed;
	},

	//Draw updated player to the canvas
	draw: function() {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y, this.diameter, this.diameter);
	}

};