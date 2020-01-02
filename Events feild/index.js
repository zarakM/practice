function check() {
  var zip = document.getElementById("zip").value;
  var city;
  switch (zip) {
    case "75300":
      city = "karachi";
      break;
    case "87300":
      city = "quetta";
      break;
    case "67500":
      city = "Lahore";
      break;
  }

  document.getElementById("city").innerHTML  = city

  // var data = document.getElementById("text").value ;
  // if (data ===""){
  //     console.log("Please Enter value")
  // }
  // else{
  //     console.log(data)
  //     document.getElementById("text").value = "My name"
  //     document.getElementById("text1").value = "My namews"
  //     document.getElementById("text2").value = "My namess"
  //     document.getElementById("text3").value = "My namesss"
  //     document.getElementById("text4").value = "My namessss"
  // }
}
