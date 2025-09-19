// Arr = [["a", true, 17], ["xyz", false, undefined]]
// let str = "sachin";
// let str1 = Arr[1][0];
// console.log(str1[2]);

// function rowPrint(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         for (let j = 1; j <= 15; i++) {
//             str = j + " ";
//         }
//         return str;
//     }
// }
// console.log(rowPrint(5));]
// arr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
// ];
// let totSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let str = "";
//     let sum = 0;

//     for (let j = 0; j < arr[i].length; j++) {

//         sum += arr[i][j];

//     } console.log(sum);
//     totSum += sum;

// }
// console.log(totSum);

// even index sum and their product
// let totsum = 0;
// for (let i = 0; i < arr.length; i += 2) {

//     let prod = 1;

//     for (let j = 0; j < arr[i].length; j++) {
//         prod *= arr[i][j];
//     }
//     totsum += prod;
// }
// console.log(totsum);

//rows into columns
//output:
// 1 6 11
// 2 7 12
// 3 8 13
// 4 9 14
// 5 10 15

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// Create empty transpose matrix
// let transpose = [];
// for (let i = 0; i < matrix[0].length; i++) {
//     transpose[i] = [];
//     for (let j = 0; j < matrix.length; j++) {
//         transpose[i][j] = matrix[j][i];
//     }
// }

// console.log("Transpose Matrix:");
// for (let row of transpose) {
//     console.log(row.join(" "));
// }

//functions to print all primary diagonal
// let arr = [
//     [1, 2, 3],
//     [4, 6, 6],
//     [7, 8, 9],
// ];
// function printDiagonal(arr) {
//     let str = "";

//     for (let i = 0; i < arr.length; i++) {

//         str += arr[i][i] + " ";

//     } console.log(str);


// }

// printDiagonal(arr);

//secondary diagonal
//code


//sum of primary diagonal is even or odd
// function printDiagonal(arr) {
//     let str = "";
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {

//         sum += arr[i][i];

//     }
//     let result = (sum % 2 == 0) ? "sum is even" : "sum is odd";
//     console.log(result);

// }

// printDiagonal(arr);

//print the primary and secondary diagonals 



//print sums of subarray whose size is 3

// function printSubarraysSizeKsum(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let subarr = [];
//         for (let j = i; j < n; j++) {
//             subarr.push(arr[j]);
//             if(subarr.length===k){
//                 sum+=
//             };


//         }
//     }
// }
// printSubarraysSizeKsum([1, 2, 3, 4, 5, 6], 3);
// let arr = [
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
// ];
// const array1 = [arr, 1, "85", "rty", [2, [4, 5]], 32];
// const array2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(array1[0][1][1])



//check is array or not for single array and 2D array.
// str = "";
// let firstRowLength=arr[0].length;
// for (let i = 0; i < arr.length; i++) {
//     str = "";
//     for (let j = 0; j < arr[i].length; j++) {

//         str += arr[i][j] + " ";
//         if(str.length)



//     } console.log(str);
// }


//Reverse an array
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);
let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
];

let left = arr[0], right = arr.length - 1;
for (let i = 0; i < arr.length; i++) {
    while (right > left) {
        arr[left], arr[right] = arr[right], arr[left];
    }
}
console.log(arr);

