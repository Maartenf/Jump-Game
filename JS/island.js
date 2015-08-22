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

//Update island according to player speed
Island.prototype.update = function() {
	this.y += Player.speed;
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
			if (tileName === "none") continue;

			//Draw tile
			ImageHandler.drawImage(xCo + x * 20, yCo + y * 20, tileName, 4);
		}
	}
};

Island.prototype.getWidth = function() {
	return this.tileMap[0].length * 20;
};

Island.prototype.getHeight = function() {
	return this.tileMap.length * 20;
};