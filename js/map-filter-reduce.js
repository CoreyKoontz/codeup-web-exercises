const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// TODO .filter -  create an array of user objects where each user object has at least 3 languages in the languages array:

let leastThreeLang = users.filter( user => {
    return user.languages.length >= 3
});

console.log(leastThreeLang);
//(3) [{…}, {…}, {…}]
// 0: {id: 2, name: "luis", email: "luis@codeup.com", languages: Array(3), yearsOfExperience: 6}
// 1: {id: 4, name: "fernando", email: "fernando@codeup.com", languages: Array(3), yearsOfExperience: 8}
// 2: {id: 5, name: "justin", email: "justin@codeup.com", languages: Array(4), yearsOfExperience: 9}
// length: 3
// __proto__: Array(0)

//-----------------------------------------------------------------------------------------

// TODO .map - create an array of strings where each element is a user's email address:

let userEmails = users.map( user => {
    return user.email
});

console.log(userEmails);
//  (5)["ryan@codeup.com", "luis@codeup.com", "zach@codeup.com",
//  "fernando@codeup.com", "justin@codeup.com"]

//-----------------------------------------------------------------------------------------

// TODO .reduce - get the total years of experience from the list of users.
//  Once you get the total of years you can use the result to calculate the average:

let totalYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

console.log(totalYearsOfExperience);
// 35

//-----------------------------------------------------------------------------------------

// TODO .reduce - get the longest email from the list of users:

let longestEmail = userEmails.reduce((a, b) => {
   return a.length > b.length ? a : b
});

console.log(longestEmail);
//fernando@codeup.com

//-----------------------------------------------------------------------------------------

// TODO .reduce - get the list of user's names in a single string.
//  Example: Your instructors are: ryan, luis, zach, fernando, justin.

// TODO: Put lines 91-100 into a single function
let userNames = users.reduce(function (newArr, user) {
    newArr.push(user.name);
    return newArr;
}, []);

let userNameStr = userNames.join(', ');

function instructorNames () {
    return `Your instructors are: ${userNameStr}.`;
}
//Output: "Your instructors are: ryan, luis, zach, fernando, justin."


//This returns a string but not in the right format:
// let userNames = users.reduce(function (total, user) {
//     return total + " " + user.name;
// }, " ");



// ========================= LECTURE NOTES =========================================
//23 Feb 2021

// - Both functions map() and filter() are returning a new array.
//      - So we have to save that return value somewhere. most likely a variable.
// - For map() you should treat the inside of the brackets like you are doing a for loop
//   because you are iterating through each of the items in the array.
// - for filter() you will need a boolean expression and if it is true the filter will return the set value

// - reduce() can take up to 4 arguments: accumulator(must be first), currentValue(must be second), index(optional)(3rd), initialValue(optional)(4th).
//      - accumulator is what is returned. kinda like the bucket idea that holds all the accumulated values
//      - the initalValue will set a starting value. if it is not supplied the initalValue will start at the current item of the array.

