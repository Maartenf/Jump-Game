/* 	island.js
	======================================
	Class for islands
*/

function Island(x, y, tileMap) {

	//Store coordinates
	this.x = x;
	this.y = y;

	//Store tilemap for later use
	this.tileMap = tileMap;

}

//Update island
Island.prototype.update = function(speed) {
	this.y += speed;
};

//Draw island
Island.prototype.draw = function() {
	//Begin coordinates of tilemap
	var xCo = this.x;
	var yCo = this.y;

	//Go trough tiles vertically
	for (var y = 0; y < this.tileMap.length; y++) {
		//Go trough tiles horizontally
		for (var x = 0; x < this.tileMap[0].length; x++) {
			//Number of current tile
			var tile = this.tileMap[y][x];

			//Name of tile image
			var tileName = "";

			switch (tile) {
				case 0:
					tileName = "none";
					break;
				case 1:
					tileName = "top-left-island";
					break;
				case 2:
					tileName = "top-island";
					break;
				case 3:
					tileName = "top-right-island";
					break;
				case 4:
					tileName = "left-island";
					break;
				case 5:
					tileName = "center-island";
					break;
				case 6:
					tileName = "right-island";
					break;
				case 7:
					tileName = "bottom-left-island";
					break;
				case 8:
					tileName = "bottom-island";
					break;
				case 9:
					tileName = "bottom-right-island";
					break;
			}

			//Continue if tileName is none
			if (tileName === 0) continue;

			//Draw tile
			ImageHandler.drawImage(xCo, yCo, tileName, 4);

			//Update x-coordinate
			xCo += 20;
		}

		//Reset x-coordinate
		xCo = this.x;

		//Update y-coordinate
		yCo += 20;
	}
};