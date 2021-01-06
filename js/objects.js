(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
    firstName: "Corey",
    lastName: "Koontz",
    sayHello: function (){
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    }
    }
console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}

    ];



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();


//################# In Class Exercises (make sure to comment out) ########################
//Mini Exercise 1

//var beverage = {};
//    beverage.brandName = 'Coke'
//    beverage.type = 'Soda'
//    beverage.volumeInLiters = 1
//    beverage.priceInCents = 199
//    beverage.expirationDate = "05 Jan 2022"
//    beverage['datesOfPreviousSips'] = "No sips taken yet"
//    beverage.isOpen = false
//
//console.log(beverage);
//
//var beverage2 = {
//    brandName: "Sprite",
//    type: "Soda",
//    volumeInLiters: 1,
//    priceInCents: 199,
//    expirationDate:"05 Jan 2022",
//    datesOfPreviousSips: ["28/12/2020", "02/01/2021", "05/01/2021"],
//    isOpen: true
//}
//
//console.log(beverage2);

// ## Mini Exercise 2 ##########################

// var users = [
//     {
//         givenName: 'Sam',
//         age: 21
//     },
//     {
//         givenName: 'Cathy',
//         age: 34
//     },
//     {
//         givenName: 'Karen',
//         age: 43
//     }
// ];

/*
  1. Log the names of all users in a single console log separated by spaces. // output = "Sam Cathy Karen"
  2. Change the names of all users to "John Doe"
  3. Increase the current age of all users by 1

  Can you accomplish each step using iteration?
  */

// //1.
// console.log(users[0].givenName + " " + users[1].givenName + " " + users[2].givenName + " ");
// //users.forEach(function(user) {
// //    console.log(user.age);
// //});
//
// //2.
// users.forEach(function(user) {
//     user.givenName = "John Doe";
// });
// console.log(users);
//
// //3.
// users.forEach(function(user) {
//     user.age = user.age + 1
// });
// console.log(users);




// ## Mini Exercise 3 ##########################

//Create a dog object...
//   The dog object should have properties for:
//     breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     canBreed (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)

//   The dog object should have methods to:
//     bark() - will console.log “Woof!”
//     getOlder() - will increase age by 1
//     disableBreeding() - will set canBreed to false
//     vaccinate(nameOfVaccination) - takes in an argument for
//     the name of the vaccination and adds a new shot with the current
//     date to the shotRecords array


// var dog = {
//     breed: "Boston Terrier",
//     weightInPounds: 17,
//     age: 1,
//     color: "Black",
//     canBreed: true,
//     shotRecords: [
//         {
//             date: new Date(),
//             typeOfShot: "DHPP"
//         },
//         {
//             date: new Date(),
//             typeOfShot: "Rabies"
//         },
//
//     ],
//     bark: function () {
//         console.log("Woof!");
//     },
//     getOlder: function () {
//         this.age += 1;
//     },
//     disableBreeding: function () {
//         this.breed = false;
//     },
//     vaccinate: function (nameOfShot) {
//         this.shotRecords.push({date: new Date(), typeOfShot: nameOfShot});
//     }
// }
// dog.vaccinate("flu")
// console.log(dog);
