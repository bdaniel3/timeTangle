$(document).ready(function() {
  // Make the game piece draggable
  $("#game-piece").draggable();

  // Check if game piece reaches any target (real or dummy)
  $("#game-piece").on("dragstop", function() {
    let pieceOffset = $("#game-piece").offset();
    let targetOffset = $("#target-area").offset();
    let dummy1Offset = $("#dummy-target-1").offset();
    let dummy2Offset = $("#dummy-target-2").offset();

    // Check if the game piece is at the real target
    if (Math.abs(pieceOffset.left - targetOffset.left) < 20 && Math.abs(pieceOffset.top - targetOffset.top) < 20) {
      $("#game-result").text("2 o-clock on a Thursday. Welcome to your favorite class I'm your host Barry Cumbie.");
    }
    // Check if the game piece is at a dummy target (failure)
    else if (Math.abs(pieceOffset.left - dummy1Offset.left) < 20 && Math.abs(pieceOffset.top - dummy1Offset.top) < 20 ||
             Math.abs(pieceOffset.left - dummy2Offset.left) < 20 && Math.abs(pieceOffset.top - dummy2Offset.top) < 20) {
      $("#game-result").text("That's the wrong time...Try again!");
    }
    // Otherwise, no success or failure
    else {
      $("#game-result").text("Try again.");
    }
  });

  // Reset the game
  $("#reset-game").click(function() {
    $("#game-piece").css({top: "0px", left: "0px"});
    $("#game-result").text("");
  });
});