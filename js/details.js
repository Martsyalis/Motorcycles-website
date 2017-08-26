var urlParams = new URLSearchParams(window.location.search);
var values = urlParams.values();

var currentBike = {};

//matches bike to url
for (value of values) {
  for (var i = 0; i < data.motorcycles.length; i++) {
    if (data.motorcycles[i].id === value) {
      currentBike = data.motorcycles[i];
    }
  }
}

//populates page with details of the current bike
document.addEventListener("DOMContentLoaded", function () {

  var myElement = document.getElementById("title");
  myElement.innerHTML = currentBike.title;

  var myElement = document.getElementById("type");
  myElement.innerHTML = currentBike.type;

  var myElement = document.getElementById("size");
  myElement.innerHTML = currentBike.size;

  var myElement = document.getElementById("height");
  myElement.innerHTML = currentBike.height;

  var myElement = document.getElementById("price");
  myElement.innerHTML = currentBike.price;

  var myElement = document.getElementById("speed");
  myElement.innerHTML = currentBike.speed;

  var myElement = document.getElementById("pic");
  myElement.setAttribute ("src", currentBike.image);
});
