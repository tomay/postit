var Board = function( selector ) {
  // Your board related code goes here

  // Use $elem to access the DOM element for this board
  var $elem = $( selector );

  function initialize() {
    $elem.on("click", function(e) {
      new PostIt(e);
    })
  };

  initialize();
};

var PostIt = function(e) {
  $(".post-it:first").clone().removeClass('hidden').appendTo("#board").css("left", e.pageX).css("top", e.pageY),

  $(".post-it").click(function(e){
      e.stopPropagation();
  })
}


$(function() {
  // This code will run when the DOM has finished loading
  new Board('#board');
});