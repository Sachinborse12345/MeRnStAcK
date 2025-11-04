//CONTEST-1
/*Assume a three-digit number and reverse it. You are not allowed to use loops. You are not allowed to use strings (must use arithmetic only).
You need to write a code that takes a three-digit number as input and outputs the reversed number. For example, if the input is 123, the output should be 321. If the input is 908, the output should be 809.
 If the input is 450, the output should be 54 (leading zeros should be skipped in the reversed number).*/
// let hundreds = Math.floor(num / 100);
// let tens = Math.floor((num % 100) / 10);
// let units = num % 10;
// let reversed = units * 100 + tens * 10 + hundreds;
// if (hundreds === 0) reversed = units * 10 + tens;
// if (hundreds === 0 && tens === 0) reversed = units;
// console.log(reversed);


//second approach
let num = 123;
let str = num.toString();
let revStr = str.split("").reverse().join("");
//console.log(revStr);


//3rd approach
num = 789;
let hundred = Math.floor(num / 100);//4
let tenth = Math.floor((num % 100) / 10);//3
let unit = num % 10;//4

let rev_num = unit * 100 + tenth * 10 + hundred;
//console.log(rev_num);

//4th approach for bigger number
function revNumber(num) {
    let reversed = 0;
    while (num > 0) {//jab tak no 0 se bada he tab tak loop chalega
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);

    }
    console.log(reversed);

}
revNumber(12353456);

function revNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    console.log(reversed);
}

revNumber(12353456);


num = 2346326;
let revno = 0;
while (num > 0) {
    let digit = num % 10;
    revno = revno * 10 + digit;
    num = Math.floor(num / 10);
}
console.log(revno);