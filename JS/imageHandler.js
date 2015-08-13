/* 	imageHandler.js
	======================================
	Preloads and draws images from atlass
*/

var ImageHandler = {

	//Atlass image
	atlass: null,

	//JSON object with image data
	data: null,

	preload: function(path, json, fallback) {
		//Convert string to object
		this.data = JSON.parse(json);

		//Create image object
		this.atlass = new Image();

		//Call fallback when image is loaded
		this.atlass.onload = function() {
			fallback();
		}

		//Set image URL
		this.atlass.src = path;
	},

	drawImage: function(x, y, name, scaleFactor) {
		//Set image smoothing off
		ctx.mozImageSmoothingEnabled = false;
		ctx.msImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;

		//Retrieve data to crop image from atlass
		var imgData = this.data[name];

		//Crop, scale and draw image to canvas
		ctx.drawImage(this.atlass, imgData.x, imgData.y, imgData.width, imgData.height, x, y, imgData.width * scaleFactor, imgData.height * scaleFactor);
	}

};