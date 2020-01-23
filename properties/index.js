// var props = []
// for( var asdf in area ){
//     console.log(asdf)
// }

// var area={
//     width: "800",
//     height: "800",
//     amount: "800"
// }

function Area(width,height) {
    this.width =width
    this.height=height
}
Area.prototype.price = 200

var object = new Area(10,10)

for ( var prop in object){
    console.log(prop)
}

console.log(object.hasOwnProperty("width"))
console.log(object.hasOwnProperty("price"))
