// var element = document.createElement("h1")
// var text = document.createTextNode("hello")

// element.appendChild(text)

// document.getElementById("ui").appendChild(element)

// for (var index = 0; index < 10; index++) {
//   var element = document.createElement("li");
//   var text = document.createTextNode("mine");
//   element.appendChild(text);
//   document.getElementById("ul").appendChild(element);
// }

var parentDiv = document.getElementById("ul");
var newParagraph = document.createElement("li");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
paragraph1 = parentDiv.childNodes[13].nextSibling;
console.log(paragraph1)
parentDiv.insertBefore(newParagraph, paragraph1);


parentDiv.removeChild( parentDiv.childNodes[1] )

