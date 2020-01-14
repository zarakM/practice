var data = document.getElementsByTagName("li");

var length = data.length

for (var index = 0; index < length; index++) {

    if (data[index].innerHTML>999) {
        data[index].innerHTML += " is Expensive"
    }
    else{
        data[index].innerHTML += " is Cheap"
    }
    // if (data[index].innerHTML === "") {
    //     data[index].innerHTML = "coming soon"
    // }   
}

var un = document.getElementById("unordered")
var child = un.childNodes
var length = child.length

var junk_counter = 0

for (var index = 0; index < length; index++) {
    console.log(child[index])
    var type = child[index].nodeType

    if (type === 3) {
        junk_counter++
    }
}

console.log( junk_counter )