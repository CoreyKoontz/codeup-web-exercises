"use strict";

//console.log("link test")


// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
// function sayHello(name) {
//     return "Hello " + name + "!";
// }
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//
// let helloMessage = sayHello("Corey")
// console.log(helloMessage);
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
// let myName = "Corey"
// console.log(sayHello(myName));
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
// function isTwo(num) {
//     return num === 2;
// }
// console.log(isTwo(random));
// console.log(isTwo(5));
// console.log(isTwo(2));
// console.log(isTwo(-2));
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// function calculateTip(bill,tipPercent) {
//     return (bill * tipPercent);
// }
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
//
//     let bill = parseFloat(prompt("How much was your bill?"));
//     let tipPercentage = parseFloat(prompt("What percentage do you want to tip?")) / 100;
//
//     function numToDollars(num){
//         return "$" + num.toFixed(2);
//     }
//     alert("If your bill is " + numToDollars(bill) + " and you want to tip " + tipPercentage +"%" + " then you need to tip: " + numToDollars(calculateTip(bill, tipPercentage)));
//         //The above line (98) needs to be cleaned up. Might need to make a var and then alert that var.
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
// function applyDiscount(originalPrice, discountPercent) {
//     let discount = originalPrice * discountPercent;
//     let discountedPrice = originalPrice - discount;
//     return discountedPrice;
// }
// console.log(applyDiscount(100, .3))

//##########################################################################

// //Mini Function Exercise Dec 14 2020
//
// //1
// function  isFive(input) {
//     return input === 5; //boolean
// }
// console.log(isFive(5)); //is true
//
// //2
// function isShortWord(string) {
//     return string.length < 5; //Will give a boolean true if the length of the string is less than five chars
// }
// console.log(isShortWord("Codeup"));
//
// //3
// function isSameLength(string1, string2) {
//     return string1.length == string2.length; //Will return a boolean value of true if the strings are equal in character count
// }
// console.log(isSameLength("code", "codeup"));
//
// //4
// function getSmallerSegment(string, number) {
//     var segment = (string.substring(number)); //This segments the string to the index specified with number.
//     var makeLowerCase = segment.toLowerCase(); // This makes what the segment var returns lower case.
//     return makeLowerCase;
// }
// console.log(getSmallerSegment("codeup", 3));
// console.log(getSmallerSegment("CODEUP", 3));
// console.log(getSmallerSegment("CODEUP", 0));


//##### Extra Conditional Functions Mini-Exercise #################


//TODO: Write a function named 'typeOfValue' that takes in a value
// and returns its type.

function typeOfValue (input) {
    return typeof input;
}

 console.log(typeOfValue("hello"));      // "string"
 console.log(typeOfValue(123));         // "number"
 console.log(typeOfValue([]));          // "object"
 console.log(typeOfValue([4,5,6]))     // "object"





//TODO: Write a function named 'isPositive' that takes in a number and returns
// true or false based on whether the input is positive.

function isPositive(input) {
     return input > 0;
}

 console.log(isPositive(2))         // true
 console.log(isPositive(-4))       // false
 isPositive(0)        // false





//TODO: Write a function named getLowestNumber that takes in 3 arguments.
// If all 3 inputs are numbers or numeric strings, then return the lowest
// number. If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(x, y, z) {
     if (isNaN(x) || isNaN(y) || isNaN(z)) {
         return false;
     } else {
         return Math.min(x, y, z);
     }
}

 console.log(getLowestNumber(1, 3, 2))         // 1
 console.log(getLowestNumber(0, 1, "2"))        // 0
 console.log(getLowestNumber(1, 2, 'x'))        // false
console.log(getLowestNumber(45,.45,67))         //.45




//TODO: Write a function named subtract that takes in two inputs.
// If both inputs provided are numeric, subtract will return the
// difference of both inputs. If one or both inputs is not numeric,
// subtract should return false.

function subtract (x, y) {
     if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
         return false;
     } else {
         return x - y;
     }
}

 console.log(subtract(2, 1))           // 1
 console.log(subtract("2", 4))           // -2
 console.log(subtract(true, false))      // false




//TODO: Write a function named divisibleByThree that takes in an
// input and returns a boolean indicating whether the input is
// divisible by 3. Nonnumeric inputs should return false.

function divisibleByThree (input) {
     if (input % 3 === 0) {
         return true;
     } else {
         return false;
     }
}

 console.log(divisibleByThree(3))         // true
 console.log(divisibleByThree("6"))      // true
 console.log(divisibleByThree("8"))       // false
 console.log(divisibleByThree("red"))     // false





//TODO: Write a function named isSumLess100 that accepts two inputs (x, y).
// If one or more of the inputs is nonnumeric, return false.  Return true if
// the sum of both inputs is less than 100, otherwise return false.

function isSumLess100 (x, y) {
     var x = parseFloat(x); // not sure if this is needed but it changes line 266 to true
     var y = parseFloat(y); // not sure if this is needed but it changes line 266 to true
     if((x + y < 100 ) && !isNaN(x) && !isNaN(y)) {
         return true;
     } else {
         return false;
     }
}
console.log(isSumLess100(2, 49))           // true
console.log(isSumLess100("7", 97) )        // false
console.log(isSumLess100("puppy", 8)   )   // false
console.log(isSumLess100("50", "49") )     // true