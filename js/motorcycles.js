document.addEventListener("DOMContentLoaded", function () {

  //populates the page with bike anchors
  var parentElement = document.getElementById("bikes");

  for (var i = 0; i < data.motorcycles.length; i++) {
    var anchorElement = document.createElement("a");
    anchorElement.setAttribute("href", "details.html?id=" + data.motorcycles[i].id);
    var newContent = document.createTextNode(data.motorcycles[i].title);
    anchorElement.appendChild(newContent);
    parentElement.append(anchorElement);
  }
});