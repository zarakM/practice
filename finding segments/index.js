var city = "Islamabad is the capital of Islamabad  pakistan";
//Islamabad is the cap of pakistan

var index = city.indexOf("Islamabad ")
var last_index = city.lastIndexOf("Islamabad ")
console.log(index)
console.log(last_index)


city = city.slice(0, index)+"Karachi "+city.slice(lastIndexOf)

for (var index = 0; index < city.length; index++) {
  if (city.slice(index, index + 9) === " capital ") {
    console.log(index);
    city = city.slice(0, index) + " cap " + city.slice(index + 9);
    console.log(city);
  }
}
