"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color){
    if (color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "red") {
        return "Strawberries are red";
    } else if (color === "cyan") {
        return "I don't know anything about cyan";
    } else {
        return "Don't worry about that color";
    }
}
//console.log(analyzeColor("blue"));
//console.log(analyzeColor("BLUE")); //Uppercase does not work. Remember to use toLowercase when applicable.
//console.log(analyzeColor("orange"));
//console.log(analyzeColor("cyan"));
//console.log(analyzeColor(42));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    switch (color) {
        case "blue":
            return "blue is the color of the sky";
            break;
        case "red":
            return "Strawberries are red;";
            break;
        case "cyan":
            return "I don't know anything about cyan";
            break;
        default:
            return "Don't worry about that color.";
            break;
    }
}

//console.log(analyzeColor("blue"));
//console.log(analyzeColor("BLUE")); //Uppercase does not work
//console.log(analyzeColor("orange"));
//console.log(analyzeColor("cyan"));
//console.log(analyzeColor(42));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let color = analyzeColor(prompt("Give me a color").toLowerCase());
alert(color);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount) {

    switch (luckyNumber) {
        case 0:
            return "Your lucky number was 0. Sadly, no discount, your total is: $" + totalAmount;
            break;
        case 1:
            return "Your lucky number was 1. You get a 10% discount! Your original price was: $" + totalAmount + " Your discounted price is: $" + (totalAmount - (totalAmount * .1));
            break;
        case 2:
            return "Your lucky number was 2. You get a 25% discount! Your original price was: $" + totalAmount + " Your discounted price is: $" + (totalAmount - (totalAmount * .25));
            break;
        case 3:
            return "Your lucky number was 3. You get a 35% discount! Your original price was: $" + totalAmount + " Your discounted price is: $" + (totalAmount - (totalAmount * .35));
            break;
        case 4:
            return "Your lucky number was 4. You get a 50% discount! Your original price was: $" + totalAmount + " Your discounted price is: $" + (totalAmount - (totalAmount * .5));
            break;
        case 5:
            return "Your lucky number was 5. You get everything for free! Your original price was: $" + totalAmount + " Your total is: $" + (totalAmount - (totalAmount * 1));
            break;
        default:
            return "that isn't part of the promotion"
            break;

    }

}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
//var luckyNumber = Math.floor(Math.random() * 6);
//let totalAmount = calculateTotal(luckyNumber,(parseInt(prompt("What was your total bill?"))));
//alert(totalAmount)
//

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//if (confirm("Would you like to enter a number?")) {
//    let userNumber = parseFloat(prompt("Enter a number"));
//    if (userNumber > 0) {
//        alert(userNumber + " is positive.");
//        if (userNumber % 2 === 0) {
//            alert(userNumber + " is even.");
//        } else {
//            alert(userNumber + " is negative")
//        }
//    } else {
//
//    }
//}

//if (confirm("Would you like to enter a number?")) {
//   let userNumber = parseFloat(prompt("Enter a number"));
//   if (userNumber % 2 === 0) {
//       alert(userNumber + " is even.");
//       if (userNumber > 0) {
//           alert(userNumber + " is positive.");
//       } else if (userNumber < 0) {
//           alert(userNumber + " is negative.");
//       }
//   } else if (userNumber % 2 === (1 || -1)) {
//           alert(userNumber + " is odd.");
//            if (userNumber > 0) {
//               alert(userNumber + " is positive.");
//           } else if (userNumber < 0) {
//               alert(userNumber + " is negative.");
//           }
//       }
//   }
if (confirm("Would you like to enter a number?")) {
   let userNumber = parseFloat(prompt("Enter a number"));
    switch (true) {
      case (userNumber % 2 === 0):
          alert (userNumber  + " is even.");
          alert (userNumber + 100 + " is 100 more than the number you chose.")
          switch (true) {
              case (userNumber < 0):
                  alert (userNumber + " is negative.")
                  break;
                  case (userNumber > 0):
                  alert(userNumber + " is positive.")
                  break;
          }
//// negative odd numbers only return the +100 and nothing else without converting userNumber to absolute value*****
      case (Math.abs(userNumber) % 2 === 1):
          alert (userNumber + " is odd.");
          alert (userNumber + 100 + " is 100 more than the number you chose.")
          switch (true) {
              case (userNumber < 0):
                  alert (userNumber + " is negative.")
                  break;
                  case (userNumber > 0):
                  alert(userNumber + " is positive.")
                  break;
          }
        case (typeof(userNumber) == NaN):
              alert ("That is not a number.")
            break;
    }
}
