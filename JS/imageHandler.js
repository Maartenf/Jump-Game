/* 	imageHandler.js
	======================================
	Preloads and manages images
*/

var ImageHandler = {

	//Used to store all images with their name
	images: {},

	//How many images need to be loaded
	imagesToLoad: 0,

	//How many images are loaded
	imagesLoaded: 0,

	preload: function(path, json, fallback) {
		var data = JSON.parse(json);

		for (var key in data) {
			//Add one more image to be loaded
			this.imagesToLoad++;

			//Create new image
			var img = new Image();

			//Scope fix
			var ih = this;
			var fb = fallback;

			//When image is loaded
			img.onload = function() {
				//Increment number of loaded images
				ih.imagesLoaded++;

				//When all images are loaded, call fallback
				if (ih.imagesLoaded === ih.imagesToLoad) fb();
			}

			//Set image URL
			img.src = path + data[key];

			//Store image
			this.images[key] = img;
		}
	},

	//Get IMG-object by name
	getImage: function(name) {
		return this.images[name];
	}

};