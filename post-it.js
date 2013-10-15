var Board = function( selector ) {
  // Your board related code goes here

  // Use $elem to access the DOM element for this board
  var $elem = $( selector );

  function initialize() {
    $elem.on("click", function() {
      new PostIt()
    })
  };

  initialize();
};

var PostIt = function() {
  $(".post-it:first").clone().removeClass('hidden').appendTo("#board");
}


$(function() {
  // This code will run when the DOM has finished loading
  new Board('#board');
});