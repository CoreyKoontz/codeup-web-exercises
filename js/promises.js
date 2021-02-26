"use strict"

//------------------ Handle An API Promise ------------------------------------

// Wait until class to generate a Github Access Token

//TODO: Create a function that accepts a GitHub username, and returns
// a promise that resolves returning just the date of the last commit
// that user made. Reference the github api documentation to achieve this.

////Refactored after walk-through:
// {
//     function lastCommit(userName) {
//         fetch(`https://api.github.com/users/${userName}/events/public`, {'headers': {'Authorization': "GIT_TOKEN"}})
//             .then(response => response.json())
//             .then(events => {
//                 let mostRecentEvent = events.find((event) => event.type === 'PushEvent');
//                 let mostRecentPush = new Date(mostRecentEvent['created_at']).toDateString();
//                 return mostRecentPush
//             });
//     }
//
//     lastCommit('CoreyKoontz')
//         .then(console.log)
//         .catch(console.error);
//
// }

function lastCommit(userName) {
    fetch(`https://api.github.com/users/${userName}/events/public`, {'headers': {'Authorization': "GIT_TOKEN"}})
        .then(response => response.json()
            .then(events => {
                for(let event of events) {
                    if (event.type === "PushEvent") {
                        let lastPush = event
                        console.log(lastPush[0]["created_at"]);
                    }

                }
            })
        )
}


lastCommit('CoreyKoontz')

// let mostRecent = events.find((event) =>)
//------------------ Create Your Own Promise ------------------------------------

// function wait(num) {
//     // let milSec = num * 1000;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`You'll see this after ${num} milliseconds`)
//         }, num);
//     });
// };
//
// wait(2).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error(err);// console.error gives the log a error styling (optional)
// });


//------------------ Lecture Notes ----------------------------------------------
// Feb 24, 2021

//TODO------- What are JS promises?
// - a special type of object for working with asynchronous JS
// - it has 3 stages: pending, resolve, rejected
// - like any other value, may be passed as a argument to a function / returned as an output
//TODO------- Why should I care about JS promises?
// - used to write cleaner asynchronous code (avoid callback hell!)
// - promises are very common in both client and servers side JS
//TODO------- How do JS promises relate to what I already know?
// - much like an AJAX request from jQuery
//TODO------- How do I create and use JS promises?
// - create using new Promise((resolve, reject) => {})
// - handle using .then() and .catch()
//TODO------- How will I likely use promises in the future (what is the real world application)?
// - Fetch API and other APIs and libraries that work with promise values
// - likely won’t be defining many custom promises

// Working with promises looks a lot like using AJAX in jQuery

// // jQuery AJAX methods
// $.ajax('https://swapi.dev/api/people/1')
//     .done(function(data) {
//         console.log(data);
//     })
//     .fail(function(jqXHR, message) {
//         console.log(message);
//     });

// **** The only difference between the above and below function is the .then and .done, they both return the same ****

// // Using promise methods (jQuery version 3.x.x and after)
// $.ajax('https://swapi.dev/api/people/1')
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(jqXHR, message) {
//         console.log(message);
//     });


// ============ Basic Example of Promise Creation and Handling

// let goodKid = true;
//
// // Defining a promise
// // ** "new" is a keyword for creating a new promise
// // ** the "resolve" and "reject" parameters are both expected to be functions
//
// function giveGoodKidsCake () {
// const getCake = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//         if (goodKid) {
//             resolve("Here is some cake");
//         } else {
//             reject("Bad. No cake. :(");
//         }
//     // }, 3000);
// });
// return getCake;
// }
// console.log(getCake); // promise object
//
// // Handling a promise (defining what will happen when either resolved or rejected)
// giveGoodKidsCake().then( data => {
//     console.log(data);
// }).catch( err => {
//     console.log(err);
// });
//


// -------- MINI EXERCISE 1

// const isGoodDog = true;
//
// /* TODO: Uncomment the line above then create a promise, haveTreat, that resolves with the string 'Good dog; have treat'
//     if the above constant is assigned to true and and rejects with the string 'Bad dog; no treat' if assigned false.
//  */
// const haveTreat = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(isGoodDog) {
//             resolve("Good dog; have treat");
//         } else {
//             reject("Bad dog; no treat");
//         }
//     }, 5000);
// });
//
// // console.log(haveTreat); // this is just to show in the console that the Promise is pending
//
// // TODO: handle the promise by console logging the result if resolved or rejected
//
// haveTreat.then( data => {
//     console.log(data);
// }).catch( err => {
//     console.error(err);// console.error gives the log a error styling (optional)
// });

/* TODO: Refactor the promise above by wrapping the conditional logic of whether to resolve or reject
    in a setTimeout so that the promise will only resolve or reject after five seconds.
*/

// -------- MINI EXERCISE 2

/* TODO: using the code from the first mini-exercise, create a function, trainDog,
    that takes in a single boolean argument, isGoodDog, and returns a promise. This promise
    has an identical definition as the haveTreat promise from the previous mini exercise.
 */

// // const isGoodDog = true;
//
// function trainDog (isGoodDog) {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(isGoodDog) {
//             resolve("Good dog; have treat");
//         } else {
//             reject("Bad dog; no treat");
//         }
//     }, 1000);
// });
// }
//
// /* TODO: invoke the trainDog function passing in true as and argument
//     chain then and catch methods to handle the returned promise. Refactor
//     to pass in false to the function.
//  */
//
// trainDog(false).then( data => {
//     console.log(data);
// }).catch( err => {
//     console.error(err);// console.error gives the log a error styling (optional)
// });


// ====================================== FETCH API


// ============ Fetch API

// jQuery AJAX request example
// $.ajax('https://swapi.co/api/people/1')
//     .done(function(data) {
//         console.log(data);
//     })
//     .fail(function(jqXHR, message) {
//         console.log(message);
//     });

// Fetch API Version...
// fetch('https://swapi.dev/api/people/1')
//     .then(response => response.json())
//     .then(data => {
//         return fetch(data.homeworld);
//     })
//     .then(response => response.json())
//     .then(data => {
//         // not completed
//     })

// -------- MINI EXERCISE 3

/* TODO: make a GET request using fetch to the url below to get an array of five cat fact objects.
    Log the text property of the first cat fact object. Be sure to log possible errors in a catch.
 */

// fetch('https://cat-fact.herokuapp.com/facts')
//     .then(response => response.json())
//     .then(data => {
//         const firstCatFact = data[0];
//         const {text} = firstCatFact
//         console.log(text);
//     })
//     .catch(console.error)
//

// Fetch API POST example

// fetch('https://hookb.in/eKZ0mV6k1aTr9g86Q7JM', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         username: "bill",
//         password: "pass123"
//     })
// })
//     .then(console.log)
//     .catch(console.log);


// -------- MINI EXERCISE 4

/* TODO: Create a new endpoint on https://hookbin.com/ and use fetch to send some POST requests.
    Experiment with sending different shapes of data in the body of the request.
 */
// let userPassword = () => {
//
//     fetch('https://hookb.in/kxRmYZmeqmIrOOoLb6Dw', {
//         method: 'POST',
//         // headers: {
//         //     'Content-Type': 'application/json'
//         // },
//         body: JSON.stringify({
//             username: "testUser",
//             password: "testPassword"
//         })
//     })
// }
//  ============ NY Times Articles Based on Forecast of Current Location

// function getForecast(coord) {
//     return fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyAPI}/${coord.lat},${coord.lng}`)
//         .then(res => res.json())
// }
//
//
// function getCurrentLocation() {
//     return new Promise(function(res, rej) {
//         navigator.geolocation.getCurrentPosition(function(pos) {
//             res({"lat": pos.coords.latitude, "lng": pos.coords.longitude});
//         });
//     });
// }
//
// function getLocalForecast() {
//     return getCurrentLocation()
//         .then(getForecast)
// }
//
// function getNYTimesArticle(search) {
//     const apiKey = apiKeyNYT;
//     return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}`)
//         .then(res => res.json());
// }
//
// function buildWeatherHtml(articles) {
//     return articles.reduce((accum, curr) => {
//         return accum += `
//             <article>
//                 <a href="${curr.web_url}">${curr.headline.main}</a>
//             </article>
//         `
//     }, "");
// }
//
// getLocalForecast()
//     .then(forecast => {
//         console.log(forecast.currently.summary);
//         return forecast.currently.summary
//     })
//     .then(getNYTimesArticle)
//     .then(data => {
//         document.getElementById("articles").innerHTML = buildWeatherHtml(data.response.docs);
//     });


// ====================================== ADDITIONAL TOPICS

// ============ Promise Chaining

// function countSlow(count) {
//     return new Promise(function(res) {
//         setTimeout(function() {
//             console.log(count);
//             res(++count);
//         }, 500);
//     });
// }
//
// countSlow(1)
//     .then(countSlow)
//     .then(countSlow)
//     .then(countSlow)
//     .then(countSlow);


// ============ Promise.resolve() and Promise.reject()

// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });


// ============ Promise.all()

// // Getting a coffee is a great example of how two interdependent asynchronous actions that can be handled with promises.
//
// const getCoffee = (type) => {
//
//     const orderAndPay = new Promise((resolve, reject) => {
//         setTimeout(function() {
//             resolve(`Coffee of type ${type} has been ordered and paid for!`);
//         }, 2000);
//     });
//
//     const makeOrder = new Promise((resolve, reject) => {
//         setTimeout(function() {
//             resolve(`Coffee of type ${type} is ready!`);
//         }, 4000);
//     });
//
//     return Promise.all([orderAndPay, makeOrder]);
//
// };
//
// getCoffee("espresso").then((data) => {
//     console.log(data[0]);
//     console.log(data[1]);
//     console.log("You now have a coffee!");
// }).catch((err) => {
//     console.log(err)
// });


// ============ Promise.race()

// const color1Promise = new Promise((res) => {
//     setTimeout(res, 2000, fetch('./data/color.json'));
// });
//
// const color2Promise = new Promise((res) => {
//     setTimeout(res, 1000, fetch('./data/color2.json'));
// });
//
// const getColor = () => Promise.race([color1Promise, color2Promise]);
//
// getColor().then(response => response.json()).then(data => console.log(data));
//

