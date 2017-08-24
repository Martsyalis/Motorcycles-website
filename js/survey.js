
var bikeArray = ["height", "price"];


var listener =  function (e) {
  e.preventDefault();
  var answersArray = bikeArray.map(function(currentId) {
    return e.target[currentId].value;
  });

  console.log("toString", answersArray.toString());
  console.log("answersArray", answersArray);

  localStorage.setItem("answersArray",answersArray.toString());
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
