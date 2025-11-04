/*Problem: Sum of Cubes of Digits
Problem Statement
Take an integer input and calculate the sum of the cubes of its digits.
Input
A single integer n where 0 ≤ n ≤ 10^6
Output
Print the sum of cubes of all the digits of the number.

Examples
Example 1:

Input:
123
Output:
36
Explanation: 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36

Example 2:
Input:
405
Output:
189*/

// let sum = 0;

// while (n > 0) {
//     let digit = n % 10;
//     sum += digit * digit * digit;
//     n = Math.floor(n / 10);
// }

// console.log(sum);

/*Prime Numbers Range
Given an integer n, print all prime numbers between 1 and n (both inclusive).

Example:

If n = 8, your program should output all prime numbers between 1 and 8. Thus, it should output:

2
3
5
7
Input Format
The first line of the input contains one integer n.

Output Format
Your code should output all integers between 1 and n that are prime (both inclusive).

Example 1
Input:

8
Output:

2
3
5
7
Example 2
Input:

13
Output:
2
3
5
7
11
13*/
function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}
console.log(isPrime());

/*Problem: Print Hollow Diamond Pattern
Problem Statement
Given an integer n, print a hollow diamond pattern of stars with 2n - 1 total rows. The pattern should have stars (*) only on the boundary of the diamond and spaces inside.

Input
A single integer n (1 ≤ n ≤ 50) representing the number of rows in the upper half of the diamond (including the middle row).

Output
Print the hollow diamond pattern made of 2n - 1 rows.

Example
Input: 4

Output:
   *
  * *
 *   *
*     *
 *   *
  * *
   *
*/

function printHollowDiamond(n) {

    // Upper half
    for (let i = 1; i <= n; i++) {
        let line = ' '.repeat(n - i);
        if (i === 1) {
            line += '*';
        } else {
            line += '*' + ' '.repeat(2 * (i - 1) - 1) + '*';
        }
        console.log(line);
    }

    // Lower half
    for (let i = n - 1; i >= 1; i--) {
        let line = ' '.repeat(n - i);
        if (i === 1) {
            line += '*';
        } else {
            line += '*' + ' '.repeat(2 * (i - 1) - 1) + '*';
        }
        console.log(line);
    }
}
printHollowDiamond(5);