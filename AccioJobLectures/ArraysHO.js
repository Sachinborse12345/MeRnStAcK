//Arrays
// Arrays removes the pain of creating multiple variable for same type of Data.
//A collection of same type of data,that can be managed /accesed using one varible only.

//Arrays are non primitive data type.
//we can declare array with const variable but still we can change its elements.


//const A=[1,2,3,4,5];
// const names = ["Name1", "Name2", "Name3"];
// console.log(names);
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


// //Question-> find the sum of all odd elements
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function SumOddEle(arr) {// Time Complexity--->O(7)
//     let n = arr.length;
//     let oddsum = 0, evensum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             oddsum += arr[i];
//         } else {
//             evensum += arr[i];
//         }
//     }
//     return Math.abs(oddsum - evensum);
// }
// console.log(SumOddEle(arr));


//FizzBuzz
// const arr = [5, 15, 1, 3, 20, 18, 6, 22, 100, 60];
// let n = arr.length;
// function FB(arr) {
//     for (let i = 0; i < n; i++) {
//         if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
//             console.log("FizzBuzz");

//         } else if (arr[i] % 5 == 0) {
//             console.log("Buzz");
//         } else if (arr[i] % 3 == 0) {
//             console.log("Fizz");
//         } else {
//             console.log(arr[i]);
//         }
//     }
// }
// FB(arr);


//Arrays elements adding and deletion
const arr1 = [1, 2, 234, 43, 5, 34, 5,];
//adding from front
// arr1.unshift(1);
//adding from last
// arr1.push(1);
// console.log(arr1);

//deletion

// returns index of element.
//console.log(arr1.indexOf(234));

//find and update the value of 3rd element 14 using indexOf() and include()

// const arr2 = [1, 2, 234, 43, 5, 34, 5, 10];
// function ele(arr2) {
//     if (arr2.includes(10)) {

//         arr2[arr2.indexOf(10)] = 14;
//     }
//     console.log(arr2);


// }
// ele(arr2);

// console.log(arr2.lastIndexOf(5));

//Slice method  (piece of array)
let arr = [2, 10, 6, 4, 9];
// console.log(arr.slice(1, 4)); //slice dosent change the original array.
// console.log(arr.slice(1));
// console.log(arr.slice());

//Splice
//console.log(arr.splice(1, 3));// affects the original array anf delete that portion.

//console.log(arr);

//concat
let arr3 = [-2, -5, -8, -5423, -5, -35, -23, -5, -235];
//console.log(arr.concat(arr3));//H.W---> concat multiple arrays


//For in loop
let name = ["sa", "asd", "gfd", "sdfsd"];
// let numbers = [1, 23, 345, 65, 34, 5, 323]
// for (let index in numbers) {
//     console.log(index)
// }

//for of loop

// for (let value of numbers) {
//     console.log(value);

// }

// let A = [12, 4, -8, 10];
// let B = [];
// let sum = 0;
// for (let i = 0; i < A.length; i++) {
//     sum += A[i];
//     B.push(sum);

// }

// console.log(B);

//Swapping
// let k = 5, l = 10;
// let temp = k;
// k = l;
// l = temp;
// console.log(k, l);

//swapping two numbers in array
// let n=[1,3,4,8,5,6,7]; index=3,index1=6

//o/p  n=[1,3,4,7,5,6,8];

// H/W do above by using func

//Print element at odd indices
//method 1
// let arr4 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr4.length; i++) {  //////time complexity O(6)
//     if (i % 2 != 0) {
//         console.log(arr4[i]);
//     }
// }

//method 1
// let arr6 = [1, 2, 3, 4, 5, 6];
// for (let i = 1; i < arr6.length; i += 2) {  //////time complexity O(6)

//     console.log(arr6[i]);

// }


//Swap alternate element
// let arr5 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr5.length - 1; i += 2) {
//     let temp = arr5[i];
//     arr5[i] = arr5[i + 1];
//     arr5[i + 1] = temp;
// }
// console.log(arr5);

//Swap alternate element

// let arr5 = [1, 2, 3, 4, 5];
// function SwapAltElement(arr5) {


//     for (let i = 0; i < arr5.length - 1; i += 2) {
//         let temp = arr5[i];
//         arr5[i] = arr5[i + 1];
//         arr5[i + 1] = temp;
//     }
//     console.log(arr5);
// }
// SwapAltElement(arr5);

//Heterogenus property of array
arr = [1, 2, "123", 2.344, true, [3, 4, "five", [2, 5, "PrintMe"]]];
//print printme
//console.log(arr[5][3][2]);

/* H.W--> Question Given an array of consicutive numbers, but theres are numbers that missing */

// arr = [1, 2, 3, 4, 5, 6, 8];
// let n = arr.length * (arr.length + 1) / 2;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// let missingNo = n - sum;
// console.log("missing No is ", missingNo);

