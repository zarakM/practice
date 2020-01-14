var data = document.getElementById("data")

// console.log( data.childNodes[1].childNodes[6] )
// console.log( data.lastElementChild.innerHTML )
// console.log( data.firstElementChild.innerHTML )

var div2 = document.getElementById("div2")
var para = div2.childNodes[1]

// console.log( div2.nextElementSibling )
// console.log( div2.parentNode )

console.log( para.nodeType )
console.log( para.nodeName )
console.log( para.nodeValue )
console.log("\n")
console.log( div2.nodeType )
console.log( div2.nodeName )
console.log( div2.nextSibling.nodeName )
console.log( div2.nodeValue )


var fc = div2.firstElementChild

console.log(fc.firstChild.nodeValue)
console.log(fc.firstChild.nodeType)
console.log(fc.firstChild.nodeName)


var head = document.getElementById("head")

console.log( head.childNodes[0] )
console.log( head.childNodes[1] )
console.log( head.childNodes[2] )

console.log( head.childNodes[0] )
console.log( head.childNodes[1].nodeName.slice(0,1) )
console.log( head.childNodes[2] )


