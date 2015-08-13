/* 	keyHandler.js
	======================================
	Class used for keyboard handling
*/

var KeyHandler = {

	//Stores all the key states
	keys: [],

	keyPress: function(e) {
		//Get number of key
		var key = e.keyCode || e.which;

		//Set number key in array to true
		this.keys[key] = !this.keys[key] && true;
	}

};

//Event handlers
window.onkeydown = KeyHandler.keyPress;
window.onkeyup = KeyHandler.keyPress;