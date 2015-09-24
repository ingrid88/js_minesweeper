(function(){
  window.MS = window.MS || {}

  var View = MS.View = function($el){
    this.board = new MS.Board();
    this.$el = $el;
    this.setupBoard();

    this.$el.on("click", "li", this.clickHandle.bind(this));
  };

  View.prototype.clickHandle = function(event){
    event.preventDefault();
    var $tile = $(event.currentTarget);
    var click = event.which;
    var ctrl = event.shiftKey;

    // ctrl plus left click (1)
    // right click (3)

    if ((ctrl && click === 1) || click === 3){
      var flagged = true;
    } else {
      var flagged = false;
    }

    this.play($tile, flagged);
  };

  View.prototype.play = function($tile, flagged){
    debugger
    var pos = $tile.data("pos");
    var tile = this.board.grid[pos[0]][pos[1]];
    // debugger
    if(flagged && !tile.revealed){
      $tile.toggleClass("flagged");
      tile.flagged = tile.flagged === true ? false : true;
    }
  //  if(tile.flagged){
    if(!tile.flagged){
      this.reveal($tile, pos);
    }
    if(this.hasWon()){
      this.$el.off("click");
      this.$el.addClass("frozen");
      alert("game won");

    }
  }

  MS.SIZE = 25;

  View.prototype.hasWon = function(){
   //  all bomb tiles flagged, all other tiles revealed
   return false
  };

  View.prototype.reveal = function($tile, pos){
    debugger
    var tile = this.board.grid[pos[0]][pos[1]];

    if (tile.flagged){
      return
    }

    tile.revealed = true;
    // debugger
    $tile.addClass('revealed');
    $tile.attr("bombNum", tile.numBombs);
    // debugger

    if (tile.numBombs === 0 && !tile.hasBomb){
      var neighbors = this.board.neighbors(pos);

      for(var i = 0; i < neighbors.length; i++){
        var nextTile = this.board.grid[neighbors[i][0]][neighbors[i][1]];

      //  [0,2] is at spot 0th row 3rd column
        var count = neighbors[i][0] * 25 + neighbors[i][1] + 1;
        var $nextTile = this.$el.find("li:nth-child("+count+")");

        if(!nextTile.hasBomb && !nextTile.revealed){
          this.reveal($nextTile, neighbors[i]);
        }
      }
    }

  };

  View.prototype.setupBoard = function(){
    var $ul = $("<ul>");
    $ul.addClass("clearfix");
    for (var i = 0; i < MS.SIZE; i++){
      for (var j=0; j < MS.SIZE; j++){
        var $li = $("<li>");
        $li.data("pos", [i,j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  };



})();
