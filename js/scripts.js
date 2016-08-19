//BACKEND
var totalArray = [];
var numbers = function(number) {
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
      array.splice(i,1,"Ping");
    } else if (array[i] % 5 === 0 && array[i] % 15 !== 0) {
      array.splice(i,1,"Pong");
    } else if (array[i] % 15 === 0) {
      array.splice(i,1,"Ping-Pong");
    }
  }
  return array;
}


//FRONTEND
$(document).ready(function(){
  $("#blanks form").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#number-input").val());
  var outputArray = numbers(userInput);
  var results = pingPong(outputArray);
  $("#list-output").append("<li>"+ results + "</li>");
  $("#display-results").show();
  });
});
