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
    debugger
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
    var pos = $tile.data("pos");
    var tile = this.board.grid[pos[0]][pos[1]];
    debugger
    if(flagged && !tile.revealed){
      $tile.toggleClass("flagged");
      tile.flagged = tile.flagged === true ? false : true;
    } else {
      this.reveal(pos);
    }
    if(this.hasWon()){
      debugger
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

  View.prototype.reveal = function(pos){
    if (tile.flagged){
      return
    }

    tile.revealed = true;

    if (tile.numBombs === 0 && !tile.hasBomb){
      var neighbors = this.board.neighbors(pos);
      debugger
      neighbors.forEach(function(neighbor){
        debugger
        var tile = this.board[neighbor[0]][neighbor[1]];
        if(!tile.hasBomb && !tile.revealed){
          this.reveal(neighbor)
        }
      });
    }
  };

  View.prototype.render = function(){

  };

  View.prototype.setupBoard = function(){
    var $ul = $("<ul>");
    $ul.addClass("clearfix");
    for (var i = 0; i < MS.SIZE; i++){
      for (var j=0; j < MS.SIZE; j++){
        var $li = $("<li>");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  };



})();
