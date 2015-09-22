(function(){
  window.MS = window.MS || {}

  MS.NEIGHBORSDELTAS = [[-1,-1],[-1,0],[-1,1],[0,1],[1,0],[1,1],[1,-1],[0,-1]];
  MS.NUMBERS = 25;

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
    numBombs = 0
    neighbors(pos).each do |n_pos|
      num_bombs += 1 if mine_positions.include?(n_pos)
    end
    num_bombs
  };

  Board.prototype.neighbors = function () {
    var x = pos[0];
    var y = pos[1];
    var new_pos_list = [];
    NEIGHBORSDELTAS.forEach(function(change){
      var dx = change[0];
      var dy = change[1];
      newPosList << [x + dx, y + dy]
    });

    newPosList.select(function(el){inBoard(el)});
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
        if list.indexOf([i, j] !== -1){
          has_bomb = true
        }
        grid[i][j] = new MS.Tile(has_bomb, numNeighborBombs([i, j]);
      }
    }

  };

  Board.prototype.generateMinePositions = function(){
    this.minePosition = [];

    while (this.minePosition.length < MS.NUMBERS){
      var xPos = Math.floor(Math.random() * MS.SIZE);
      var yPos = Math.floor(Math.random() * MS.SIZE);
      if (this.minePosition.indexOf([xPos, yPos] === -1)){
        this.minePosition.push([xPos, yPos]);
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
