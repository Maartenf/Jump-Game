/* 	islandManager.js
	======================================
	Creates, updates and draws islands
*/

var IslandManager = {

	//Store all islands
	islands: [],

	createIsland: function() {
		//Tilemap for island
		var tileMap = [[1, 2, 2, 2, 2, 3],
					   [4, 5, 5, 5, 5, 6],
					   [0, 0, 4, 5, 5, 6],
					   [0, 0, 4, 5, 5, 6],
					   [0, 0, 7, 8, 8, 9]];

		//Add new island to islands array
		this.islands.push(new Island(300, 300, tileMap));
	},

	updateAndDrawIslands: function() {
		for (var i = 0; i < this.islands.length; i++) {
			var island = this.islands[i];

			island.update();
			island.draw();
		}
	},

	checkCollision: function() {
		for (var i = 0; i < this.islands.length; i++) {
			var island = this.islands[i];

			if (Player.x >= island.x &&
				Player.x + Player.size <= island.x + island.getWidth &&
				player.y >= island.y &&
				Player.y + player.size <= island.x + island.getHeight) {

				var walkable = island.checkIfWalkableTile();

				if (!walkable) return true;
			}
		}

		//Return false if no collision
		return false;
	}

};