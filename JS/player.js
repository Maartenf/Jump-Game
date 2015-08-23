/* 	player.js
	======================================
	Class for player
*/

var Player = {

	//Player coordinates
	x: 100,
	y: 700,

	//How fast the player moves
	speed: 3,

	//Speed to accelerate or deccelerate to
	desiredSpeed: 1,

	//Time to change speed
	speedChangeTime: 10,

	//Minimum speed of player
	minSpeed: 3,

	//Maximum speed of player
	maxSpeed: 6,

	//Factor of image scalation
	scaleFactor: 5,

	//Size of player
	size: 25,

	//True if player is jumping
	jumping: false,

	//Jump distance
	maxJumpDistance: 0,

	//How long the player is in the air
	currentJumpDistance: 0,

	//Update x-coordinate of player
	update: function() {
		//Check if player is not on water
		//if (!this.jumping && IslandManager.checkCollision()) Engine.gameOver();
		
		//Move player left or right according to key input
		if (KeyHandler.keys[39]) this.x += 6;
		else if (KeyHandler.keys[37]) this.x -= 6;

		//Accelerate when shift is pressed
		if (KeyHandler.keys[16]) this.desiredSpeed = this.maxSpeed;
		else this.desiredSpeed = this.minSpeed;

		//Handles acceleration and deceleration
		this.updateSpeed();

		//Jump when spacebar is pressed
		if (!this.jumping && KeyHandler.keys[32]) {
			//Player is jumping
			this.jumping = true;

			//Reset current jump distance
			this.currentJumpDistance = 0;

			//Set max jump distance according to player speed
			this.maxJumpDistance = this.speed * 20;
		}

		//Handles jump length
		this.jumpUpdate();

		//Make sure the player can't get off screen
		if (this.x < 0) this.x = 0;
		else if (this.x + this.size > Engine.width) this.x = Engine.width - this.size;
	},

	//Draw updated player to the canvas
	draw: function() {
		ImageHandler.drawImage(this.x, this.y, SpriteAnimationManager.getFrame("walk"), this.scaleFactor);
	},

	//Accelerate or deccelerate the player when needed
	updateSpeed: function() {
		if (this.desiredSpeed !== this.speed) {
			//Acceleration
			if (this.desiredSpeed > this.speed) this.speed += this.desiredSpeed / this.speedChangeTime;
			//Deceleration
			else this.speed -= this.desiredSpeed / this.speedChangeTime;
		}
	},

	//Keep player in the air
	jumpUpdate: function() {
		//Do nothing if player is not jumping
		if (!this.jumping) return;

		//Keep track of the distance of the jump
		this.currentJumpDistance += this.speed;

		//Stop jumping when reached max jump distance
		if (this.currentJumpDistance >= this.maxJumpDistance) this.jumping = false;
	}

};