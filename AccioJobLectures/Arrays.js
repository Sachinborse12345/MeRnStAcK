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

const arr2 = [1, 2, 234, 43, 5, 34, 5, 10];
// function ele(arr2) {
//     if (arr2.includes(10)){

//         arr2[arr2.indexOf(10)] = 14;
//     }
//     console.log(arr2);


// }
// ele(arr2);

// console.log(arr2.lastIndexOf(5));


