

function Price(amount, month) {
    this.amount = amount;
    this.month = month;
}

Price.prototype.discount = 20;
Price.prototype.nationality = "English";
Price.prototype.total = function() {
    return this.amount * this.month
};

var obj = new Price(8, 2);
var aobj = new Price(80, 2);
var aaobj = new Price(800, 2);
var aaaobj = new Price(8000, 2);

console.log(obj.total());
console.log(aobj.total());
console.log(aaobj.total());
console.log(aaaobj.total());

console.log( Price.hasOwnProperty("amount") )
console.log( Price.hasOwnProperty("discount") )