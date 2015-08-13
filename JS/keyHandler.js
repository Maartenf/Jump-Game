/* 	keyHandler.js
	======================================
	Class used for keyboard handling
*/

var KeyHandler = {

	//Stores all the key states
	keys: [],

	//Key is pressed
	keyDown: function(e) {
		//Disable scrolling
		e.preventDefault();

		//Get number of key
		var key = e.keyCode || e.which;

		//Set number key in array to true
		KeyHandler.keys[key] = true;
	},

	//Key is no longer pressed
	keyUp: function(e) {
		//Disable scrolling
		e.preventDefault();
		
		//Get number of key
		var key = e.keyCode || e.which;

		//Set number key in array to true
		KeyHandler.keys[key] = false;
	}

};

//Event handlers
window.onkeydown = KeyHandler.keyDown;
window.onkeyup = KeyHandler.keyUp;