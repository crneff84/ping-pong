//BACKEND
var countLoop = function(number) {
  var totalArray = [];
  for (total = 0; total <= number; total++) {
    totalArray.push(total);
  }
  return totalArray;
}

var pingPong = function(array) {
  for (i=0; i <= array.length; i++) {
    if (array[i] === 0) {
      array.splice(i,1,0);
    }
      else if (array[i] % 3 === 0 && array[i] % 15 !== 0) {
      array.splice(i,1,"ping");
    } else if (array[i] % 5 === 0 && array[i] % 15 !== 0) {
      array.splice(i,1,"pong");
    } else if (array[i] % 15 === 0) {
      array.splice(i,1,"ping-pong");
    }
  }
  return array;
}

//FRONTEND
$(document).ready(function(){
  $("#blanks form").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#number-input").val());
  var outputArray = countLoop(userInput);
  var pingPonged = pingPong(outputArray);
  $("#results-list").empty();
  for (i = 0; i < pingPonged.length; i++) {
    $("#results-list").append("<li>" + pingPonged[i] +"</li>");
  };
  $("#display-results").show();
  });
});
