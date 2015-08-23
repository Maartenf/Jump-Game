/* 	island.js
	======================================
	Class for islands
*/

function Island(tileMap) {

	//Store tilemap for later use
	this.tileMap = tileMap;

	//Store coordinates
	this.x = 0;

	this.y = -this.getHeight();

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

Island.prototype.getHeight = function() {
	return this.tileMap.length * 20;
};

//Check if tile is walkable
Island.prototype.checkIfWalkableTile = function() {
	var tileXNumber = ((Player.x - this.x) - ((Player.x - this.x) % 20)) / 20;
	var tileYNumber = ((Player.y - this.y) - ((Player.y - this.y) % 20)) / 20;

	//Get tile type or number
	var tile = this.tileMap[tileXNumber, tileYNumber];

	//If tile type is none or 0, the tile is not walkable
	if (tile === 0) return false;
	else return true;
};