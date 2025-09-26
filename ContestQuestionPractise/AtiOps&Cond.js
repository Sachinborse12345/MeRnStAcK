/*Problem Statement
Write a program that takes a number of days as input and converts it into years, months, and remaining days. Assume:
1 year = 365 days
1 month = 30 days
Input
A single integer d (1 ≤ d ≤ 10000) representing the number of days.
Output
Print the result in the format:
X years, Y months, Z days*/

let years = Math.floor(d / 365);
let remainingDays = d % 365;
let months = Math.floor(remainingDays / 30);
let days = remainingDays % 30;

console.log(`${years} years, ${months} months, ${days} days`);


/*Determine whether a given calendar date is valid or invalid.

Rules
Month must be between 1 and 12.

Day must fit the month and year:

31-day months: January, March, May, July, August, October, December (1, 3, 5, 7, 8, 10, 12)

30-day months: April, June, September, November (4, 6, 9, 11)

February (2)

29 days in a leap year
28 days otherwise
Leap year criteria

Divisible by 4 and not divisible by 100, unless also divisible by 400
Input
Three integers (each on its own line):

day
month
year
Output
Print exactly one of:

Valid
or
Invalid*/


function isValidDate(day, month, year) {
    // Check month
    if (month < 1 || month > 12) return false;
    // Check leap year
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    // Days in each month
    const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // index 1-12
    if (month === 2 && isLeap) daysInMonth[2] = 29;
    // Check day
    if (day < 1 || day > daysInMonth[month]) return false;
    return true;
}

/*A social media company, "ConnectMe", wants to develop a feature to recommend the most popular post of the day based on the number of likes, comments, and shares. 
The feature should be able to take three distinct numbers as input, representing the number of likes, comments, and shares respectively, and return the greatest of the three numbers.
 The company wants to implement this feature using both ternary operators and switch-case statements in JavaScript.
Write a JavaScript code snippet that takes three distinct numbers as input and returns the greatest of the three numbers using both ternary operators and switch-case statements.
Assume that the input numbers are stored in variables likes, comments, and shares.
You can use the following markdown for writing your code:*/

// Input
let likes = 120;
let comments = 95;
let shares = 150;

let max = likes;
max = (comments > max) ? comments : max;
max = (shares > max) ? shares : max;

console.log("Greatest ternary:", max);

let greatest;
switch (true) {
    case (likes >= comments && likes >= shares):
        greatest = likes;
        break;
    case (comments >= likes && comments >= shares):
        greatest = comments;
        break;
    default:
        greatest = shares;
}
console.log("Greatest using switch-case:", greatest);
