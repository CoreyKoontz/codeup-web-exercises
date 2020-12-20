"use strict";

//Create a file named break_and_continue.js in the js directory.
//    Prompt the user for an odd number between 1 and 50. Use a
//    loop and a break statement to continue prompting the user if they
//    enter invalid input.
//    Use a loop and the continue statement to output all the odd
//    numbers between 1 and 50, except for the number the user entered.

for (var i = 1; i < 100; i++) {
    var userNum = parseFloat(prompt("Please enter an odd number between 1 and 50"));
    if (userNum % 2 !== 0) {
        alert("Yep, that's the right answer.");
        break;
    }else{
        continue;
    }
}

//if (!(userNum <= 50 && userNum >=1)) {