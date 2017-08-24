
var urlParams = new URLSearchParams(window.location.search);

var currentBike = {};


var values = urlParams.values();

for(value of values) {
  console.log(value);
  for (var i = 0; i < motorcycles.length; i++) {
    if (motorcycles[i].id === value) {
      currentBike = motorcycles[i];

    }
  }

}

document.addEventListener("DOMContentLoaded", function () {

  var myElement= document.getElementById("title");
  myElement.innerHTML =currentBike.title;
  console.log(myElement)

  var myElement= document.getElementById("type");
  myElement.innerHTML =currentBike.type;
  console.log(myElement)

  var myElement= document.getElementById("size");
  myElement.innerHTML =currentBike.size;
  console.log(myElement)

  var myElement= document.getElementById("height");
  myElement.innerHTML =currentBike.height;
  console.log(myElement)

  var myElement= document.getElementById("price");
  myElement.innerHTML =currentBike.price;
  console.log(myElement)

  var myElement= document.getElementById("speed");
  myElement.innerHTML =currentBike.speed;
  console.log(myElement)

  var myElement= document.getElementById("pic");
  myElement.setAttribute ("src",currentBike.image);
  console.log(myElement)

});
