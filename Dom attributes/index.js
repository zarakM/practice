var image = document.getElementById("image");

console.log(image.hasAttribute("id"));
console.log(image.getAttribute("id"));

console.log(image.hasAttribute("class"));
console.log(image.getAttribute("class"));


console.log(image.getAttribute("class"));

if (image.getAttribute("class") === "cat") {
    image.setAttribute("class", "lion");   
}
else if (image.getAttribute("class") === "lion") {
    image.setAttribute("class", "cat");   
}