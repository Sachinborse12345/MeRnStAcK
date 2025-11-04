// Problem: Delete All Odd Numbers from an Array
// Problem Statement
// You are given an array of integers. Your task is to delete all odd numbers from the array and print the remaining elements.

// Input
// First line contains a single integer n (1 ≤ n ≤ 1000) - the size of the array.
// Second line contains n space-separated integers (each in the range -10^5 to 10^5).
// Output
// Print all even numbers in the array, separated by a space.
// If there are no even numbers, print -1.


let arr5 = [1, 2, 3, 7, 5];
// for(let i=0;i<arr5.length;i++){
//     if(!(arr5[i]%2==0)){
//         arr5.splice(i,1);
//     }
// }

// arr5 = arr5.filter(num => num % 2 === 0);
// if (arr5.length == 0) {
//     console.log(-1);
// }
// else {
//     console.log(arr5);
// }

// let a = 10
// var b = 20
// function hello() {
//     console.log("1", a)
//     console.log("2", b)
//     let a = 50
//     var b = 100

//     console.log("3", a)
//     console.log("4", b)

// }
// hello();

// let arr = [4, 5, 6, 7, 8, 4];
// function isIncreasing(arr) {


//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i - 1] <= arr[i]) {
//             return "NO";
//         }

//     } return "YES";
// }
// console.log(isIncreasing(arr));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 3;
let s = 28;
let isTaget = false;
for (let i = 0; i < arr.length; i++) {
    let sub = [];
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
        sub.push(arr[j]);
        sum += arr[j];
        if (sum == s && sub.length == 3) {
            isTaget = true;
            break;
        }

    }

}
// if (isTaget) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }
// arr = [1, 2, 4, 5, 6];

// arr = arr.filter(num => num % 2 == 0);
// console.log(arr);
//     *
//    *n*
//   *nnn*
//  *     *
// *       * 
n = 5;
for (let i = 0; i < n; i++) {
    let line = "";
    for (let j = 1; j < n - i; j++) {
        line += " ";
    }
    if (i > 0) {
        line += "*";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        line += " "
    } line += "*";
    console.log(line);
}
// *     *
//  *nnn*
//   *n*
//    *
for (i = 0; i < n - 1; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
        line += " ";
    }
    line += "*";
    for (let k = n; k > 2 * i; k--) {
        line += " ";

    } if (i < n - 2) {
        line += "*";

    }
    console.log(line);
}