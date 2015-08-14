/* 	spriteAnimation.js
	======================================
	Class for animating sprites
*/

function SpriteAnimation(frameSpeed, frames) {

	//Determines speed of animation
	this.frameSpeed = frameSpeed;

	//Store frames for later use
	this.frames = frames;

	//Holds speed of gameloop
	this.updates = 0;

	//Current frame number
	this.frameCount = 0;

}

SpriteAnimation.prototype.getFrame = function() {
	//Gets the current frame name
	var frame = this.frames[this.frameCount];

	//Add one update
	this.updates++;

	//Handles speed of animation
	if (this.updates % this.frameSpeed === 0)
		//Increment frameCount and returns to 0 when at the end
		this.frameCount = (this.frameCount + 1) % this.frames.length;

	//Return frame name
	return frame;
};