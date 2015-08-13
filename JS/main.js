/* 	main.js
	======================================
	Main file to start the game
*/

//JSON atlass data
var data = '{"right-island":{"x":0,"y":0,"width":5,"height":5},"top-island":{"x":0,"y":5,"width":5,"height":5},"top-left-island":{"x":5,"y":0,"width":5,"height":5},"top-right-island":{"x":5,"y":5,"width":5,"height":5},"bottom-island":{"x":0,"y":10,"width":5,"height":5},"bottom-left-island":{"x":5,"y":10,"width":5,"height":5},"bottom-right-island":{"x":10,"y":0,"width":5,"height":5},"center-island":{"x":10,"y":5,"width":5,"height":5},"left-island":{"x":10,"y":10,"width":5,"height":5},"player":{"x":0,"y":15,"width":5,"height":5}}';

//Canvas can only be created when the window is loaded
window.onload = function() {

	//Preload images and start game when loaded
	ImageHandler.preload("atlass.png", data, function() {
		//Start game engine
    	Engine.init();
	});

}