document.addEventListener("DOMContentLoaded", function () {

var parentElement = document.getElementById("bikes");

for (var i = 0; i < motorcycles.length; i++) {
  console.log(motorcycles[i]);
  var anchorElement = document.createElement("a");
  anchorElement.setAttribute("href", "details.html?id=" + motorcycles[i].id)
  var newContent = document.createTextNode(motorcycles[i].title);
  anchorElement.appendChild(newContent);
  parentElement.append(anchorElement);

}



});
