"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userinput = prompt("What is your favorite color?");

alert("Great, " + userinput + " is my favorite color too!");

var dailyRentalPrice = prompt("What is the daily movie rental price?")

//1
var littleMermaid = prompt("How many days do you want to rent The Little Mermaid?") * dailyRentalPrice;
var brotherBear = prompt("How many days do you want to rent Brother Bear?") * dailyRentalPrice;
var hercules = prompt("How many days do you want to rent The Hercules?") * dailyRentalPrice;


function priceForMovies(x, y, z){
    return littleMermaid + brotherBear + hercules;
}

alert("Your total is: $" + priceForMovies(littleMermaid, brotherBear, hercules))

//2
var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var googleMoney = googleRate * prompt("How many hours did you work for google?");
var amazonMoney = amazonRate * prompt("How many hours did you work for amazon?");
var facebookMoney = facebookRate * prompt("How many hours did you work for facebook?");

var paycheck = googleMoney + amazonMoney + facebookMoney;
alert(paycheck+" is your paycheck!");

var amazon = 380 * 4;
var google = 400 * 6;
var facebook = 350 * 10;

function myPayCheck(x, y, z){
    return (amazon) + (google) + (facebook);
}
console.log(myPayCheck(amazon, google, facebook));

//3
//var clasNotFull = true;
//var classConflict = true;
//var enrolled = classNotFull && classConflict;

//var classAt8am = false;
//var classSize = prompt("What is max capacity of the class?");
//var currentClassSize = prompt("How many students are currently enrolled?");
//var canRegister = (currentClassSize < classSize) && !classAt8am;
//alert()

//4
var hasPremium = false;
var cartSize = prompt("How many items in your cart?");
var offerValid = true;

var canHaveDiscount = offerValid && (cartSize > 2 || hasPremium);
if(canHaveDiscount = true) {
    alert("You get Discount!")
};