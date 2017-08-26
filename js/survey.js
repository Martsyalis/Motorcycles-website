var questionKeys = data.questions.map(function(question){
  return question.key;

});

//creates answers array and stores it in local storage as a string
var listener = function (e) {
  e.preventDefault();

  var answersArray = questionKeys.map(function(currentId) {
    return e.target[currentId].value;
  });

  window.location.href = './results.html';

  localStorage.setItem("answersString", answersArray.toString());
};

//creates an event listener for submit button
document.addEventListener("DOMContentLoaded", function() {
  var myForm = document.getElementById("bike-survey")

  myForm.addEventListener("submit", listener);
});
