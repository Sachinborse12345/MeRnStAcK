//1.day print switch case;
let DayNumber = 2;
switch (DayNumber) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wendsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Days");
        break;
}

// 2.grading switch case;
let marks = 85;

switch (true) {
    case (marks >= 80 && marks <= 100):
        console.log("Grade: A");
        break;
    case (marks >= 60 && marks < 80):
        console.log("Grade: B");
        break;
    case (marks >= 50 && marks < 60):
        console.log("Grade: B");
        break;
    case (marks >= 40 && marks < 50):
        console.log("Grade: C");
        break;
    case (marks >= 0 && marks < 40):
        console.log("Grade: D");
        break;
    default:
        console.log("Invalid Marks");
}

// 3.grater mark ternary we have given ;
let name1 = "sachin";
let name2 = "ganesh";
let mark1 = 60;
let mark2 = 80;
let HighMark;
let HighMarkName;

mark1 > mark2 ? (HighMarkName = name1, HighMark = mark1) : (HighMarkName = name2, HighMark = mark2);
console.log(HighMarkName, "has high mark i.e :", HighMark);

// 4.num is neg +ve zero by ternaryl ;
let num = -2;
let result = num > 0 ? "positive" : num = 0 ? "Zero" : "Negative";
console.log(result);
// 5.which is graeter than among threee numbers using ternary ;
let a = 7;
let b = 8;
let c = 9;
let result1 = (a > b && a > c) ? "a is greater" : (b > a && b > c) ? "b is greater" : "c is greater";
console.log(result1);

// 6.odd or even ternary ;
let number = 5;
let res = number % 2 == 0 ? "even" : "odd";
console.log(res);

// 7.int or decimal ;

let num3 = 12.5;
let result2 = (num3 % 1 === 0) ? "Integer" : "Decimal";
console.log(result2);

