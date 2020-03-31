// // function addition(number_one, number_two) {
// //   console.log(number_one + number_two);
// // }

// // addition(38, 19);
// // addition(12, 29);
// // addition(5, 39);
// // addition(36, 49);
// // addition(45, 19);
// // addition(86, 14);
// // addition(1, 12);
// // addition(32, 11);

// // function greet(date) {
// //     console.log(date.getMonth())
// // }

// // var d1 = new Date()
// // var d2 = new Date("")

// // d

// // d.setDate(31)
// // d.setMonth(8)

// // console.log( d )
// // greet( d )

// // var greetings = "I am a User";
// // var greetings2 = "I am a User2";

// // greet(greetings)
// // greet(greetings2)

// // function addition(first_marks, second_marks) {
// //   if( first_marks > second_marks ){
// //       return "First one is greater"
// //   }
// //   else{
// //       return "Second is greater"
// //   }
// //   return 0
// // }

// // var zain_number = prompt("Enter your marks");
// // var zarak_number = prompt("Enter your marks");

// // var added_number = addition(zain_number, zarak_number);

// // console.log(added_number+ 20);\

// function orderTotal(merchTot) {
//   if (merchTot >= 100) {
//     orderTot = merchTot;
//   } else if (merchTot < 50.01) {
//     orderTot = merchTot + 5;
//   } else {
//     orderTot = merchTot + 5 + 0.03 * (merchTot - 50);
//   }
//   return orderTot;
// }

// function sales(total) {
//   return total + 17;
// }

// var total = orderTotal(173);

// var after_sale = sales(total)

// console.log(after_sale);


// var sum
// function addNum(){
//     sum = 2 +2
//     console.log(sum)
// }

// addNum()

// var sum = 1000
// addNum()

// function addNum(){
//     var sum = 2 + 2
//     console.log(sum)
// }

// var firstNum = 5
// var secondNUm = 10
// addNum(firstNum, secondNUm)

// function addNum(numberOne, numberTwo){
//     console.log(numberOne, numberTwo)
// // var addition = number + 2
// // console.log(addition)
// }

// var sum = 10

// function addNum(){
//     var someNum = 2 + 2
//     console.log(sum)
//     console.log(someNum)
// }

// function someFun(){
//     console.log(sum)
//     // console.log(someNum)
// }

// someFun()
// addNum()

// var sum = 20

// function addNum(){
//     var sum = 10
//     console.log(sum)
// }
// console.log(sum)
// addNum()

// const addNum = (num) => {
//     console.log(num)
// }
// addNum(10)

// function secondFunc(num){
//     console.log(num)
// }

function addNum(num){    
    var someNum = 20
    secondFunc(someNum)
    console.log('Number',num)
}

var user = {
    name:"",
    email: "",
    profile: ""
}

firebase.database().ref('users/' + userId).set({
    name:"",
    email: "",
    profile: ""
});