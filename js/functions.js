"use strict";

//console.log("link test")


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello " + name + "!";
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello("Corey")
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "Corey"
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(num) {
    return num === 2;
}
console.log(isTwo(random));
console.log(isTwo(5));
console.log(isTwo(2));
console.log(isTwo(-2));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(bill,tipPercent) {
    return (bill * tipPercent);
}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

    let bill = parseFloat(prompt("How much was your bill?"));
    let tipPercentage = parseFloat(prompt("What percentage do you want to tip?")) / 100;

    function numToDollars(num){
        return "$" + num.toFixed(2);
    }
    alert("If your bill is " + numToDollars(bill) + " and you want to tip " + tipPercentage +"%" + " then you need to tip: " + numToDollars(calculateTip(bill, tipPercentage)));
        //The above line (98) needs to be cleaned up. Might need to make a var and then alert that var.
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(originalPrice, discountPercent) {
    let discount = originalPrice * discountPercent;
    let discountedPrice = originalPrice - discount;
    return discountedPrice;
}
console.log(applyDiscount(100, .3))

//##########################################################################

//Mini Function Exercise Dec 14 2020

//1
function  isFive(input) {
    return input === 5; //boolean
}
//console.log(isFive(5)); //is true

//2
function isShortWord(string) {
    return string.length < 5; //Will give a boolean true if the length of the string is less than five chars
}
//console.log(isShortWord("Codeup"));

//3
function isSameLength(string1, string2) {
    return string1.length == string2.length; //Will return a boolean value of true if the strings are equal in character count
}
//console.log(isSameLength("code", "codeup"));

//4
function getSmallerSegment(string, number) {
    var segment = (string.substring(number)); //This segments the string to the index specified with number.
    var makeLowerCase = segment.toLowerCase(); // This makes what the segment var returns lower case.
    return makeLowerCase;
}
//console.log(getSmallerSegment("codeup", 3));
//console.log(getSmallerSegment("CODEUP", 3));
//console.log(getSmallerSegment("CODEUP", 0));


