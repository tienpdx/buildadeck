$(document).ready(function() {
var faces = ["Hearts", "Spades", "Clubs", "Diamonds"]
var nums = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
var i = 0;

faces.forEach(function(face) {
  nums.forEach(function(num) {
    $("#deck").append("<li>" + num + " of " + face + "</li>");

  });



});






});
