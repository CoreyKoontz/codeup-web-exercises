"use strict"

//------------------ Handle An API Promise ------------------------------------

// Wait until class to generate a Github Access Token

//TODO: Create a function that accepts a GitHub username, and returns
// a promise that resolves returning just the date of the last commit
// that user made. Reference the github api documentation to achieve this.

// uncomment and add the token to your requests like this:
//fetch(url, {'headers': { 'Authorization' : 'token YOUR_TOKEN_HERE'}})

fetch('https://api.github.com/users').then( response => {
    response.json().then( users => {
        for (let user of users) {
            console.log(user) // here get date of users last commit *CommitCommentEvent
        }
    })
})
//------------------ Create Your Own Promise ------------------------------------
//


//------------------ Lecture Notes ----------------------------------------------
// Feb 24, 2021