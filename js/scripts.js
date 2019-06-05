$(document).ready(function() {
  var questions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10", "question11", "question12"]
  $("#Q1").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question1").fadeIn();
  });
  $("#Q2").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question2").fadeIn();
  });
  $("#Q3").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question3").fadeIn();
  });
  $("#Q4").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question4").fadeIn();
  });
  $("#Q5").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question5").fadeIn();
  });
  //Questions 6-10
  $("#Q6").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question6").fadeIn();
  });
  $("#Q7").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question7").fadeIn();
  });
  $("#Q8").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question8").fadeIn();
  });
  $("#Q9").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question9").fadeIn();
  });
  $("#Q10").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();    $("#question10").fadeIn();
  });

  $("#Q11").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question11").fadeIn();
  });
  $("#Q12").click(function() {
    $(".flashcards").show();
    questions.forEach(function(questions) {
      $("#"+questions).hide();
    })
    $(".answer").hide();
    $("#question12").fadeIn();
  });
    $("#reveal").click(function() {
      $(".answer").fadeToggle();
    });
})
