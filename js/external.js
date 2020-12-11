"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let userInput = prompt("What is your favorite color?");

alert("Great, " + userInput + " is my favorite color too!");
/////
/////
/////
/////
let dailyRentalPrice = prompt("What is the daily movie rental price?");
let littleMermaid = prompt("How many days do you want to rent The Little Mermaid?") * dailyRentalPrice;
let brotherBear = prompt("How many days do you want to rent Brother Bear?") * dailyRentalPrice;
let hercules = prompt("How many days do you want to rent The Hercules?") * dailyRentalPrice;
let totalRentalPrice = (littleMermaid + brotherBear + hercules);

alert("Your total is: $" + totalRentalPrice);
/////
/////
/////
/////
let googlePayRate = prompt('What is the hourly rate for Google?');
let amazonPayRate = prompt('What is the hourly rate for Amazon?');
let facebookPayRate = prompt('What is the hourly rate for Facebook?');

let googleIncome = prompt('How many hours did you work for Google?') * googlePayRate;
let amazonIncome = prompt('How many hours did you work for Amazon?') * amazonPayRate;
let facebookIncome = prompt('How many hours did you work for Facebook?') * facebookPayRate;

let totalIncome = (googleIncome + amazonIncome + facebookIncome)
alert("Your total income is: $" + totalIncome);
/////
/////
/////
/////
let isClassOpen = confirm("Click OK if there room in the class. If not, click cancel.");
let isScheduleOpen = confirm("Click OK if this class works with your schedule. If not, click cancel");
alert("Able to register: " + (isClassOpen && isScheduleOpen));
/////
/////
/////
/////
const premiumMember = false; //set to false in order to test canHaveDiscount variable
const offerValid = true;

let numberOfItems = parseInt(prompt("How many items are in the customer's cart?"));
let canHaveDiscount = (offerValid && numberOfItems > 2) || premiumMember;
alert("It is " + canHaveDiscount + ", that the customer may have the discount");