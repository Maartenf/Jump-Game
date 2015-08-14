/* 	spriteAnimationManager.js
	======================================
	Class for managing animated sprites
*/

var SpriteAnimationManager = {

	//Stores all possible animations by name
	animations: {},

	addAnimations: function(json) {
		//Parse JSON into object
		var data = JSON.parse(json);

		//Iterate trough object and assign to animations
		for (var key in data) {
			this.animations[key] = new SpriteAnimation(data[key].frameSpeed, data[key].frames);
		}
	},

	getFrame: function(animationName) {
		return this.animations[animationName].getFrame();
	}

};