/* 	main.js
	======================================
	Main file to start the game
*/

//JSON image data
var data = '{"player":"player.png"}';

//Canvas can only draw when the window is loaded
window.onload = function() {

	//Preload images and start game when loaded
	ImageHandler.preload("Images/", data, function() {
		//Start game engine
    	Engine.init();
	});

}