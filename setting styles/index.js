function add() {
    console.log( window.getComputedStyle(document.getElementById("para")).color )
    document.getElementById("para").style.fontSize= "80px"
    document.getElementById("para").style.color = "purple"
    document.getElementById("para").style.textTransform="uppercase"
    // document.getElementById("para").style.margin = "40px 0px 40px 40px"
    // var margim = document.getElementById("para").style.margin
    var element = document.getElementById("para")
    var margin = window.getComputedStyle(element).margin
    console.log(margin)
}