/* 	spriteAnimationManager.js
	======================================
	Class for managing animated sprites
*/

var SpriteAnimationManager = {

	//Stores all possible animations by name
	animations: {},

	addAnimations: function(json) {
		var data = JSON.parse(json);

		for (var key in data) {
			this.animations[key] = new SpriteAnimation(data[key].frameSpeed, data[key].frames);
		}
	},

	getFrame: function(animationName) {
		return this.animations[animationName].getFrame();
	}

};