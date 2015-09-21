(function(){
  window.MS = window.MS || {}

  MS.NEIGHBORS_DELTAS = [[-1,-1],[-1,0],[-1,1],[0,1],[1,0],[1,1],[1,-1],[0,-1]];
  MS.NUM_BOMBS = 25;

  Board = MS.Board = function (){
    this.grid();
  }

  Board.prototype.grid = function(){
    this.grid = [];
    for (var i = 0; i < MS.SIZE; i++){
      this.grid[i] = [];
      for (var j=0; j < MS.SIZE; j++){
        this.grid[i].push([]);
      }
    }

  };

  Board.prototype.populateBoard = function(){};

  Board.prototype.generateMinePositions = function(){
    var list = [];

    while (list.length < MS.NUM_BOMBS){
      var xPos = Math.floor(Math.random() * MS.SIZE);
      var yPos = Math.floor(Math.random() * MS.SIZE);
      if (list.indexOf([xPos, yPos] === -1){
        list.push([xPos, yPos]);
      }
    }
  };

  Board.prototype.neighbors = function (pos) {

  };

  Array.prototype.includes = function(val){
    for (var i = 0; i < this.length; i ++) {
      if (this[i] === val){
        return true
      }
    }
    return false
  };

})();
