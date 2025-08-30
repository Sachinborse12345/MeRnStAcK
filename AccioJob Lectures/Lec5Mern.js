// console.log("Hello World");

// //variables - wrong ways of declaring a variable
// /* - multiline comments
// person1 = "Harsh";
// person1Age = 20;

// person2 = "Riya";
// person2Age = 21;

// //printing something on console
// console.log(person1);
// console.log("Sum of ages of both the Persons:", person1Age + person2Age);
// */

// //correct ways of declaring a variable
// //using let & const

// let person1; //declaration of variable
// person1 = "Harsh"; //intialization / definition of a variable

// // console.log(age); // variable that's declared after this console.log
// // console.log(number);// variable that's never declared

// let person1Age = 20; // declaration and definition of variable
// let age; //uninitialized variable

// console.log("Value of undefined variable 'age': ", age);

// let person2 = "Riya";
// let person2Age = 21;

// console.log(person1);
// console.log("Sum of ages of both the Persons:", person1Age + person2Age);

// //let variables can change their values in future also
// person1 = "Harsh Singh";
// console.log(person1);

// //const variables
// const studentName = "Rahul"; // this value cannot be changes
// // studentName = "Puneet"; gives error
// //const emptyConstVariable; // cannot create uninitialized const variables

// //types of data we can store in const
// //store console
// const employeeName = "Rahul Kumar";

// //store age
// let employeeAge = 30;

// //store Date of birth (dob)
// const dob = "23 - Jan - 2002";

// console.log("Student console: " + studentName); // adds two strings

// //data type -> type of value a variable holds
// console.log("Checking type of DOB variable: ", typeof dob);
// console.log("Checking type of employeeAge variable: ", typeof employeeAge);

// // various data types in javascript
// // boolean
// const isStudent = true;
// console.log("Checking type of isStudent variable: ", typeof isStudent);

// // string -> refer above dob example

// // number -> refer above employeeAge example

// //JS is dynamically typed language
// let x = "Hi How are you"; // x is of type string
// x = 20; // x is now of type number
// x = false; // x is now of type boolean

// /* ============== Arithmetic Operators ================= */
// let a = 10,
//   b = 20;

// //sum
// let c = a + b;
// console.log("sum of a and b:", c);

// subtract
// c = b - a;
// console.log("b - a = " + c);

// //multiplication
// c = a * b;
// console.log("a * b = " + c);

// //division
// c = b / a;
// console.log("b/a = " + c);
// c = -4 / 0;
// console.log("-4 / 0 =", c);
// c = 4 / Infinity;
// console.log("4 / Infinity =", c);

// //remainder -> %
// c = a % b;
// console.log("a%b = " + c);

// //power -> **
// c = 2 ** 4;
// console.log("2 raised to power 4: " + c);

// //floor and ceil value of a decimal number
// const decimalNumber = 20.35;
// // 20(floor) < 20.35 < 21 (ceil)
// console.log("floor of 20.35", Math.floor(decimalNumber));
// console.log("ceil of 20.35", Math.ceil(decimalNumber));

// //Q1: convert minutes to seconds and console it
// const minutes = 24;
// //console seconds
// const seconds = minutes * 60;
// console.log("24 minutes has :", seconds, "seconds");

// //Q2: Find last digit of a number
// //Example: number = 234, console 4;
// const number1 = 234;
// //console last digit
// const lastDigit = number1 % 10;
// console.log("Last digit of", number1, "is", lastDigit);

// //Q3: Find second last digit of a number
// const number2 = 234;
// //console second last digit: 3
// //Solution
// // - eleminate last digit
// //      - divide number by 10 and take floor value
// //      - number = 234, number/10 = 23.4 => Math.floor(23.4) = 23;
// // - console number % 10
// const numWithoutLastDigit = Math.floor(number2 / 10);
// const secondLastDigit = numWithoutLastDigit % 10;
// console.log("Second last digit of", number2, "is", secondLastDigit);

// //Q4: Find 3rd last digit of a number in above code
// const numWithoutLastTwoDigits = Math.floor(numWithoutLastDigit / 10);
// const thirdLastDigit = numWithoutLastTwoDigits % 10;
// console.log("Third last digit of", number2, "is", thirdLastDigit);

// /* NOTE:
// - to eliminate the digit we use -> divide(/) operator
// - to extract/console the digit we use -> modulud(%) operator
// - = is also known as assignment operator
// */

// /* Some weird behaviours of Arithmetic operators with strings */

// // Multiply -> except addition, all arithmetic operators convert string to number if possible
// const num = "123";
// const str = "abc";
// let result;

// result = num * 2;
// console.log(result);

// result = num * num;
// console.log(result);

// result = str * 2;
// console.log(result);

// //Addition -> in addition, it prefers the string
// result = num + 2;
// console.log(result);

// /* Weird behaviour in case of decimal addition */
// result = 0.1 + 0.2;
// // -> 0.1 -> convert decimal to binary store as a binary 001010
// // -> retrieve 001010 to convert it to a decimal again
// console.log(result);

// /* Modulus of a negative number */
// result = -31 % 7; // --> HOMEWORK

// /* power method --> (**) */
// result = Math.pow(2, 5); // works exactly same as 2**5;
// console.log(result);

// /* NEXT CLASS -> precedence and associativity */

// /* Some more arithmetic operators */
// let r = 5;
// r = r + 5; // RHS is calculated first, then it is assigned to LHS
// r += 5; //shorthand
// console.log(r);

// r *= 5;
// console.log(r);

// r = "34";
// r += 26;
// r *= 2;
// console.log(r);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log("--------------Presedence--------------------");
// let c1 = 3 * 4 + (30 / 6) * 5 ** 2;
// console.log(c1); //--------------------->137
// const y = ("123" + 1) * 2 ** 2 - 21 / 7;
// console.log(y); //--------------------->4921
// const z = "123" + 5 ** 5 / 25 ** 2 / 5;
// console.log(z); //-------->1231

// console.log("-----------Conditionals---------");

// let number = 18;
// number = number / 2;

// if (number % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// // //check that age of person is greater than 18 if then vote if not cannot vote

// let a = "12";
// const b = 12;
// let d = 12;
// if (a == b) {
//   console.log("Both a & b has same value");
// }
// if (b === d) {
//   console.log("Both same value and datatype");
// }

// let score = prompt("Enter your score");
// if (score > 0 && score <= 100) {
//   if (score >= 80 && score <= 100) {
//     console.log("A");
//   } else if (score < 80 && score >= 60) {
//     console.log("B");
//   } else if (score < 60 && score >= 40) {
//     console.log("C");
//   } else {
//     console.log("Fail");
//   }
// } else {
//   console.log("Invalid Score");
// }

// let age = 40;
// const gender = "female";
// if (age >= 18 && gender == "male") {
//   console.log("mature boy");
// } else if (age >= 18 && gender == "female") {
//   console.log("mature girl");
// } else {
//   console.log("immature");
// }

// if (age >= 18) {
//   if (gender == "male") {
//     console.log("mature boy");
//   }
// }
// if (age >= 18) {
//   if (gender == "female") {
//     console.log("mature girl");
//   }
// }

// //    console.log("-----------if else statements---------");

// let ticket_No = 101;

// if (ticket_No == 11 || ticket_No == 101) {
//   console.log("Winner");
// } else {
//   console.log("Looser");
// }

// let use_loggIn = true;
// let use_Subscription = true;
// if (use_loggIn && use_Subscription) {
//   console.log("premium user, giving subscription to premium user.");
// } else {
//   console.log("not premium user ");
// }

// //check weather no is good or bad n0

// let no = 17;
// if (no != 17) {
//   console.log("good no");
// } else {
//   console.log("bad no");
// }

// let no = "242";
// let rev_no = no.split("").reverse().join("");
// if (no == rev_no) {
//   console.log("palindrome ");
// } else {
//   console.log("not palindrome");
// }

// let num = 12;
// if (num % 1 == 0) {
//   console.log("int");
// } else {
//   console.log("dec");
// }

// let a = 10,
//   b = 12;
// let c;
// if (a < b) {
//   c = b;
//   console.log("max value :", c);
// }

// console.log("--------------Test Practice------------");

// let a = 10;
// let b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333...
// console.log(a % b); // 1
// console.log(a ** b); // 1000
// let marks = 789;
// if (marks >= 0 && marks <= 100) {
//   if (marks >= 75 && marks <= 100) {
//     console.log("First class");
//   } else if (marks >= 50 && marks <= 74) {
//     console.log("Second class");
//   } else if (marks >= 25 && marks <= 49) {
//     console.log("Third class");
//   } else {
//     console.log("fail class");
//   }
// } else {
//   console.log("Invalid marks");
// }

// let day = 3;
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// console.log("--------MERN 7--------");

// let name1="Suresh";
// let name2="Ramesh";
// let marks1=30;
// let marks2=40;
// if(marks1>marks2){
//     console.log(name1," has scored higest no=", marks1);
// }else{
//      console.log(name2,"has scored higest no=" ,marks2);
// }

// let name1="sachin";
// let name2="sachin2";
// let marks1=10;
// let marks2=5;
// let winnerName=name1;
// let winnerMarks=marks1;
// if(marks1<marks2){
//     winnerName=name2;
//     winnerMarks=marks2;
// }
// console.log(winnerName,"scored highest marks :", winnerMarks);

//ternary Operators

// let num=3;
// let rs=num%2==0 ? "even":"odd";
// console.log(rs);

// let num = 5;
// let result = num > 0 ? "positive" :
//      num == 0 ? "zero" : "negative";

// console.log(result);

//try all yesterdays questions with ternary operator

// let name1="sachin";
// let name2="tejas";
// let marks1=50;
// let marks2=70;
// const higestScorerName=marks1>marks2? name1:name2;
// const higestScorerMarks=marks1>marks2? marks1:marks2;
// console.log(higestScorerName,"is scored higest marks",higestScorerMarks)

//Higest among three numbers by if else and ternary operations

//Tip : max of two numbers

// let num1=9, num2=10;
// let maxOfTwoNumbers=Math.max(num1,num2);
// console.log("max num is",maxOfTwoNumbers);
// const minOfTwoNumbers=Math.min(num1,num2);
//EXPLORE: max and min of three numbers

/* Question : Print 1-7 weekdays */

//1-> Monday
//2-> Tuesday

// const dayNumber = 6;
// let res =
//   dayNumber == 1
//     ? "Monday"
//     : dayNumber == 2
//     ? "Tuesday"
//     : dayNumber == 3
//     ? "Wednsday"
//     : dayNumber == 4
//     ? "Thursday"
//     : dayNumber == 5
//     ? "Friday"
//     : dayNumber == 6
//     ? "Saturday"
//     : "Sunday";
// console.log(res);

// let DayNumber = 2;
// switch (DayNumber) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wendsday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid Days");
//     break;
// }

//Make grading system using switch case

let num = 123;
let rev = 0;
while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);

} console.log(rev);




