(function(){
  window.MS = window.MS || {}

  var View = MS.View = function($el){
    this.board = new MS.Board();
    this.$el = $el;
    this.setupBoard();

    this.$el.on("click", "li", (function(event){
      var $square = $(event.currentTarget);
      debugger
      if (event.ctrlKey){
        this.board.flagSquare($square)
      } else {
        this.board.makeMove($square)
      }
      debugger
    }).bind(this));
  };

  MS.SIZE = 25;

  View.prototype.setupBoard = function(){
    debugger
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
