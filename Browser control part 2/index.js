var win = window.open("","Hola","width=1200,height=600")


win.document.write("<h1>This is new windoew</h1>")

// var save = win.prompt("you wAANT TO CLOSE")

if(win !== "null"){
    win.close()
}
else{
    alert(" Please disable your popup blocker ")
}