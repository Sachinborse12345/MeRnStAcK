// Valid Date
// Determine whether a given calendar date is valid or invalid.
//     Rules
// Month must be between 1 and 12.
// Day must fit the month and year:

// 31 - day months: January, March, May, July, August, October, December(1, 3, 5, 7, 8, 10, 12)
// 30 - day months: April, June, September, November(4, 6, 9, 11)

// February(2)
// 29 days in a leap year
// 28 days otherwise
// Leap year criteria
// Divisible by 4 and not divisible by 100, unless also divisible by 400

// let year = 2020;
// let month = 4;
// let day = 31;
// let flag = true;
// if (month < 0 || month > 12) {
//     console.log("Invalid");
// }
// if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     if (day < 31) {
//         console.log("Invalid");
//         return;
//     }
// }
// if (month == 4 || month == 6 || month == 9 || month == 11) {
//     if (day < 30 || day > 30) {
//         console.log("Invalid");
//         return;
//     }
// }
// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     if (month == 2 || day == 29) {
//         console.log("valid");
//     } else {
//         console.log("Invalid");
//     }
// }


//Greatest of three numbers 
// let L = 10, S = 128, C = 183;
// let result = (L > S && L > C) ?
//     "Like is greatest" : (S > L && S > C) ?
//         "Share is greatest" : "Comment is greatest"
// console.log(result);
// //---------------------------------------------
// console.log("----------------");



// Input values
// let likes = 120;
// let comments = 450;
// let shares = 3200;

// let greatest;
// switch (true) {
//     case (likes > comments && likes > shares):
//         console.log("likes are greatest", likes);
//         break;
//     case (comments > likes && comments > shares):
//         console.log("comments are greatest", comments);
//         break;
//     case (shares > likes && shares > comments):
//         console.log("shares are greatest", shares);
//         break;
// }

//example values
// let likes = 10;
// let comments = 910;
// let shares = 20;
// //ternary operator
// comments < likes && likes > shares ?
//  console.log("likes", likes) : likes < comments && comments > shares ?
//  console.log("comments", comments) : console.log("shares", shares);

// let num = 12;//this is our input number
// let str = num.toString(); //we convert it into string 
// let Cube_sum = 0; //intialize sum with zero
// for (let i = 0; i < str.length; i++) {//run for loop to access each digit
//     Cube_sum += Number(str[i] ** 3); //taking cube of each num and convert it to number and add also
// }
// console.log(Cube_sum);// print the final cube sum

//Prime number range

// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }

//     } return true;
// }
// console.log(isPrime(15));


//Prime number range 
// let n = 23;
// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     } return true;
// }
// for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//         console.log(i);
//     }
// }

//Question
// let newArr = [200, 350, 670, 570];
// let indx = 0;
// for (let i in newArr) {
//     newArr[i] = newArr[i] - (newArr[i] / 10);
//     console.log(newArr[i]);
// }
// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// arr.shift(1);
// arr.splice(1, 1, "OLA");
// // arr.push("AMAZON");
// console.log(arr);

//arrow func return a vowels
// let str = "dfg";
// const vowelCount = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == 'a' || str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//             count++;
//         }
//     } return count;
// }
// console.log(vowelCount(str));


//Most repeating char
let str = "sfsdfdfgaaasfg";
let obj = {};
for (let char of str) {
    if (char !== " ") {
        obj[char] = (obj[char] || 0) + 1;
    }
}
let maxcount = 0;
let maxChar = '';
for (let char in obj) {
    if (obj[char] > maxcount) {
        maxcount = obj[char];
        maxChar = char;
    }
}
console.log(maxChar, maxcount);