document.addEventListener("DOMContentLoaded", function () {

var parentElement = document.getElementById("bikes");

for (var i = 0; i < data.motorcycles.length; i++) {
  console.log(data.motorcycles[i]);
  var anchorElement = document.createElement("a");
  anchorElement.setAttribute("href", "details.html?id=" + data.motorcycles[i].id)
  var newContent = document.createTextNode(data.motorcycles[i].title);
  anchorElement.appendChild(newContent);
  parentElement.append(anchorElement);

}



});
