var price = {
  month: "jan",
  amount: 800,
  calculate: function(discount) {
    if (this.month === "jan") {
      var discounted_price = this.amount - discount;
      return discounted_price;
    } else {
      return this.amount;
    }
  }
};

//class, methods, constructor C++





var objecta = new Price(80,6)
var objectb = new Price(10,6)
var objectc = new Price(30,6)

console.log( objecta.total_amount() )
console.log( objectb.total_amount() )
console.log( objectc.total_amount() )