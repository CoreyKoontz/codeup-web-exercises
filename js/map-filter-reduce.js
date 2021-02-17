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


// .filter
const leastThreeLang = users.filter(user =>
    user.languages.length >= 3);
console.log(leastThreeLang);
//(3) [{…}, {…}, {…}]
// 0: {id: 2, name: "luis", email: "luis@codeup.com", languages: Array(3), yearsOfExperience: 6}
// 1: {id: 4, name: "fernando", email: "fernando@codeup.com", languages: Array(3), yearsOfExperience: 8}
// 2: {id: 5, name: "justin", email: "justin@codeup.com", languages: Array(4), yearsOfExperience: 9}
// length: 3
// __proto__: Array(0)


// .map
const userEmails = users.map(user =>
    user.email);
console.log(userEmails);
//  (5)["ryan@codeup.com", "luis@codeup.com", "zach@codeup.com",
//  "fernando@codeup.com", "justin@codeup.com"]


// .reduce
const totalYearsOfExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(totalYearsOfExperience);
// 35


// .reduce
let longestEmail = userEmails.reduce((a, b) =>
    a.length > b.length ? a : b);
console.log(longestEmail);
//fernando@codeup.com


// .reduce
let userNames = users.reduce((total, user) => {
    user.name.forEach(name => {total.push(name)})
    return total;
}, [])
console.log(userNames);