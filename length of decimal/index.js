var cost = 9.95;
var sales_tax = 5.5;

var actual_price = cost + cost * (sales_tax / 100);

prettyNum = actual_price.toFixed(2);
console.log(prettyNum)


var str = actual_price.toString();
if (str.charAt(str.length - 1) === "5") {
str = str.slice(0, str.length - 1) + "6";
}
actual_price = Number(str);
prettyNum = actual_price.toFixed(2);

console.log(prettyNum)