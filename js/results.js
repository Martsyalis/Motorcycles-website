
var answersArray = localStorage.getItem("answersString");
var answersArray  = answersArray.split(',');
console.log(answersArray);

var ratings = data.motorcycles.map(function(bike){

  var rating = 0;
  data.questions.forEach(function(question, i) {
    var questionKeyString = question.key;
    var questionWeight = question.weight;
    var bikeString = bike[questionKeyString];
    var userAnswerString = answersArray[i];
    if( userAnswerString === bikeString){
      rating += questionWeight;
    }
  })

  return  {rating:rating, id: bike.id, title: bike.title, image: bike.image} ;
});

console.log(ratings);

ratings.sort(function(a, b) {
  return b.rating-a.rating;

});

document.addEventListener("DOMContentLoaded", function () {

  var parentElement = document.getElementById("bikes");

  for (var i = 0; i < 3; i++ ){
    anchorElement = document.createElement("a");
    anchorElement.setAttribute ("href", "./details.html?id=" + ratings[i].id);
    anchorElement.innerHTML = ratings[i].title;
    imageElement = document.createElement("img");
    imageElement.setAttribute ("src",ratings[i].image);
    parentElement.appendChild(anchorElement);
    anchorElement.appendChild(imageElement);
  }



});
