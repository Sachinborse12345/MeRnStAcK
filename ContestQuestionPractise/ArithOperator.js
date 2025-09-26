//CONTEST-1
/*Assume a three-digit number and reverse it. You are not allowed to use loops. You are not allowed to use strings (must use arithmetic only).
You need to write a code that takes a three-digit number as input and outputs the reversed number. For example, if the input is 123, the output should be 321. If the input is 908, the output should be 809.
 If the input is 450, the output should be 54 (leading zeros should be skipped in the reversed number).*/
let hundreds = Math.floor(num / 100);
let tens = Math.floor((num % 100) / 10);
let units = num % 10;
let reversed = units * 100 + tens * 10 + hundreds;
if (hundreds === 0) reversed = units * 10 + tens;
if (hundreds === 0 && tens === 0) reversed = units;
console.log(reversed);



