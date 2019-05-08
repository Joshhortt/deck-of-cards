
// Business Logic
var deckStart = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
var deckEnd = ["Hearts", "Clubs", "Diamonds", "Spades"];
var deckFull = [];

// User Interface Logic
$(document).ready(function(){
  deckEnd.forEach(function(suite){
    var tempString = "";
  deckStart.forEach(function(card){
      tempString = wrapListItems(card+" of "+suite);
      deckFull.push(tempString);
    });
  });
  $("#deckList").html(deckFull);
});

function wrapListItems(value)
{
  return ("<li>"+value+"</li>");
}
