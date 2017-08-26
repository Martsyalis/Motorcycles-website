
var questionKeys = data.questions.map(function(question){
  return question.key;

});


var listener =  function (e) {
  e.preventDefault();
  var answersArray = questionKeys.map(function(currentId) {
    return e.target[currentId].value;
  });

  console.log("answersArray", answersArray);
  console.log("toString", answersArray.toString());


  localStorage.setItem("answersString",answersArray.toString());
  window.location.href = './results.html';

  // for (var i = 0; i < bikeArray.length; i++) {
  //   var prop = bikeArray[i];
  //   console.log(e.target[prop].value);
  // }
}

document.addEventListener("DOMContentLoaded", function () {
 var myForm = document.getElementById("bike-survey")

  myForm.addEventListener("submit", listener);


})
