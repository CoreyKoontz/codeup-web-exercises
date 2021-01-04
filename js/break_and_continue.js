"use strict";

//Create a file named break_and_continue.js in the js directory.
// 1. Prompt the user for an odd number between 1 and 50. Use a
//    loop and a break statement to continue prompting the user if they
//    enter invalid input.
// 2. Use a loop and the continue statement to output all the odd
//    numbers between 1 and 50, except for the number the user entered.


//user number needs to be: 1-50, odd, must be a number
function validNum(input) {
    input = parseFloat(input);
    return (input >= 1 && input <= 50) && (input % 2 !== 0) && (!isNaN(input));
}

function getUserNumber(input) {
    var userNumber = prompt("Please enter an odd number between 1 and 50");
    if (validNum(userNumber)) {

    }
}
// ****************  THIS CODE BELOW CRASHED THE COMPUTER DO NOT RUN! **********************************
//for (var i = 1; i <= 50; i++) {
//    var userNum = prompt("Please enter an odd number between 1 and 50");
//    if (validNum(userNum)) { //if ((userNum % 2 !== 0) && (userNum >= 1 && userNum <= 50) && (!isNaN(userNum))) {
//        alert("Yep, that's the right answer.");
//        while (i <= 50) {
//            if (validNum(i)) {
//            console.log("Here is an odd number: " + i);
//            } else {
//                continue;
//            }
//        }i++;
//    }else {
//        alert("Nope! Try again.")
//        continue;
//    }
//}

//if (!(userNum <= 50 && userNum >=1)) {

