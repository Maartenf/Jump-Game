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
	}

};