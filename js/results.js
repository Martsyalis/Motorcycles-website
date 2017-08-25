
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
  return rating;
});
console.log(ratings);
