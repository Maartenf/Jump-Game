/* 	player.js
	======================================
	Class for player
*/

var Player = {

	//Player coordinates
	x: 100,
	y: 700,

	//How fast the player moves
	speed: 0.5,

	//Speed to accelerate or deccelerate to
	desiredSpeed: 1,

	//Time to change speed
	speedChangeTime: 10,

	//Minimum speed of player
	minSpeed: 1,

	//Maximum speed of player
	maxSpeed: 5,

	//Factor of image scalation
	scaleFactor: 5,

	//Size of player
	size: 25,

	//Update x-coordinate of player
	update: function() {
		//Accelerate or deccelerate the player when needed
		if (this.desiredSpeed !== this.speed) {
			//Acceleration
			if (this.desiredSpeed > this.speed) this.speed += this.desiredSpeed / this.speedChangeTime;
			//Deceleration
			else this.speed -= this.desiredSpeed / this.speedChangeTime;
		}

		//Accelerate when shift is pressed
		if (KeyHandler.keys[16]) this.accelerate();
		else this.decelerate();
		
		//Move player left or right according to key input
		if (KeyHandler.keys[39]) this.x += 6;
		else if (KeyHandler.keys[37]) this.x -= 6;

		//Make sure the player can't get off screen
		if (this.x < 0) this.x = 0;
		else if (this.x + this.size > Engine.width) this.x = Engine.width - this.size;
	},

	//Draw updated player to the canvas
	draw: function() {
		ImageHandler.drawImage(this.x, this.y, SpriteAnimationManager.getFrame("walk"), this.scaleFactor);
	},

	//Accelerate player
	accelerate: function() {
		this.desiredSpeed = this.maxSpeed;
	},

	//Decelerate player
	decelerate: function() {
		this.desiredSpeed = this.minSpeed;
	}

};