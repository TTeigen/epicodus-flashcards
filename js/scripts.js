$(document).ready(function() {
  $(".flashcard").click(function() {
    $(".question1").fadeIn();
  });
    $("#reveal").click(function() {
      $(".answer").fadeIn();
    });
})
