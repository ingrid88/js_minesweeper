(function(){
  window.MS = window.MS || {}

  MS.NEIGHBORSDELTAS = [[-1,-1],[-1,0],[-1,1],[0,1],[1,0],[1,1],[1,-1],[0,-1]];
  MS.NUMBERS = 25;
  MS.SIZE = 25;

  Board = MS.Board = function (){
    this.grid();
    this.generateMinePositions();
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

  Board.prototype.numNeighborBombs = function (pos) {
    var numBombs = 0
    this.neighbors(pos).forEach(function(nPos){
      if (this.minePositions.indexOf(npos) !== -1){
        numBombs += 1
      }
    });
    return numBombs
  };

  Board.prototype.neighbors = function (pos) {
    var x = pos[0];
    var y = pos[1];
    var newPosList = [];
    MS.NEIGHBORSDELTAS.forEach(function(change){
      // debugger
      var dx = change[0];
      var dy = change[1];
      newPosList.push([x + dx, y + dy]);
    });
    // debugger
    // newPosList.select(this.inBoard(el));
    return newPosList.select(function(el){ if(el[0] >= 0 && el[0] < 25 && el[1] >= 0 && el[1] < 25){return true}; return false });
  };

  Board.prototype.inBoard = function(pos){
    var x = pos[0];
    var y = pos[1];
    if(x >= 0 && x < MS.SIZE && y >= 0 && y < MS.SIZE){
      return true
    }
    return false
  };

  Board.prototype.populateBoard = function(){
    for (var i = 0; i < MS.SIZE; i++){
      for (var j = 0; j < MS.SIZE; j++){
        has_bomb = false
        if (this.minePositions.indexOf([i, j] !== -1)){
          has_bomb = true
        }
        grid[i][j] = new MS.Tile(has_bomb, numNeighborBombs([i, j]));
      }
    }

  };

  Board.prototype.generateMinePositions = function(){
    this.minePositions = [];

    while (this.minePositions.length < MS.NUMBERS){
      var xPos = Math.floor(Math.random() * MS.SIZE);
      var yPos = Math.floor(Math.random() * MS.SIZE);
      if (this.minePositions.indexOf([xPos, yPos] === -1)){
        this.minePositions.push([xPos, yPos]);
      }
    };
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

  Array.prototype.select = function(callback){
    newArray = [];
    this.forEach(function(val){
      if (callback(val)){
        newArray.push(val);
      }
    });
    return newArray
  };

  // [1,2,3,4].select(function(el){
  //   if( el % 3 === 0){
  //     return true
  //   }
  //   return false
  // });

})();
