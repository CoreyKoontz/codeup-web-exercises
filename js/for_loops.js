"use strict"


//############# For Loop Exercise ##################################

//Q2

function showMultiplicationTable(input) {
    for (let i = 0; i <= 10; i++) {
        console.log(input + ' x ' + i + ' = ' + i * input);
    }
}
//Q3
for (let i = 0; i < 10; i++) {
    let random = Math.floor((Math.random() * 200) + 20);
    if (random % 2 === 0) {
        console.log(random + ' is even');
    } else {
        console.log(random + ' is odd');
    }
}

//Q4
for ( let i = 0; i < 10; i++) {
    let x = i;
    let xstr = x.toString();
    let rep = xstr.repeat(x)
    console.log(rep)
}
 //Q5
for (var i = 105; i > 5; i - 5) {
    console.log(i - 5);
    i-=5;
}



// //**********WHILE PRACTICE 1****************
// // !! make a loop to go from 20 to 50 with increments of ten !!
//let i = 20
//while (i < 50) {
//    console.log("While loop iteration # " + i);
//    i = i + 10;
//}
//
// //**********WHILE PRACTICE 2****************
// // !! write a program that will keep running until the user clicks ok !!
//let conf = (confirm("click ok or this won't end!"))
//while (conf === false) {
//alert(conf);
//}
// //**********WHILE PRACTICE 3****************
// //create a function which puts on a coat if it's cold outside
// //use a while loop

//Create a function that makes your $100k Tesla speed until the police are looking

//function howFast(input){
//    let speed = prompt("how fast are you going");
//    do {
//      if (speed < 75){
//          let newSpeed = prompt("Speedup!... How fast are you going now?");
//      } else {
//          alert("you are speeding watch for cops!")
//      }
//    } while (newSpeed < 75);
//}

//create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)

//var i = 0
//
//do {
//    console.log(i);
//    i += 2;
//} while (i <= 20);



//Example of for loop
//for (var i = 20; i >= 10; i--) {
//    console.log('for loop iteration #' + i);
//}


// // //Create a function which will:
// // //console log 'fizz' on every multiple of 3
// // //console log 'buzz' on every multiple of 5
// // //console log 'fizzbuzz' on every shared multiple of 3 and 5
// // //end the loop at.... well.. you decide!

//function fizzBuzz() {
//for (let i = 0; i <= 100; i++) {
//    if (i % 15 === 0) {
//        console.log('fizzbuzz');
//    } else if (i % 5 === 0) {
//        console.log('buzz');
//    } else if (i % 3 === 0) {
//        console.log('fizz');
//    } else {
//        console.log(i);
//    }
//    }
//}
//

