//Arrays
// Arrays removes the pain of creating multiple variable for same type of Data.
//A collection of same type of data,that can be managed /accesed using one varible only.

//Arrays are non primitive data type.
//we can declare array with const variable but still we can change its elements.

const names = ["sachin", "ganesh", "Tejas", "Akash"];
//console.log(name);
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("---------------------------------------------------------------------");

//find the sum of all odd elements.
let arr = [2, 3, 5, 6, 7, 8, 9];

function oddSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    } console.log(sum);

}
oddSum(arr);
console.log("---------------------------------------------------------------------");

//FizzBuzz
function fizzBuzz(arr) {


    arr = [1, 2, 5, 15, 3, 18, 32, 60, 30, 3, 10];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 == 0 && arr[i] % 3 == 0) {
            console.log("FizzBuzz");

        } else if (arr[i] % 5 == 0) {
            console.log("Fizz");

        } else if (arr[i] % 3 == 0) {
            console.log("Buzz");

        } else {
            console.log(arr[i]);
        }
    }
}
fizzBuzz(arr);
console.log("---------------------------------------------------------------------");

//methods of arrays
//push
arr = [1, 2, 3];
arr.push(1, 2, 3, 4);
console.log(arr);
//pop
arr = [1, 2, 3];
arr.pop(1, 2, 3, 4);
console.log(arr);

//shift
arr = [1, 2, 3];
arr.shift(5);
console.log(arr);

//merge
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); // [1, 2, 3, 4]

//all methods
//for in loop
//majorly used for objects
const student = {
    name: "sachin",
    age: 22,
    course: "MERN"
};
for (let key in student) {
    console.log(key, " : ", student[key]);
}

arr = [10, 20, 30];
for (let index in arr) {
    console.log(index, " : ", arr[index])
}
let fruits = ["apple", "banana", "mango"];

for (let x in fruits) {
    console.log("in:", x);
}

for (let y of fruits) {
    console.log("of:", y);
}
//Swapping
let m = 10, n = 20;
[m, n] = [n, m];
//console.log(m, n);

arr = [4, 5, 64, 6, 3, 45, 45, 4, 5, 35, 4];
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
//console.log(arr)

//print elements at odd indices
arr = [3, 4, 5, 6, 7, 4, 23, 5, 4, 3];
for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}

//Swap alternate element
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;

}
//console.log(arr);
console.log("========================================")
//array of consicutive numbers but print num that are missing
arr = [1, 2, 3, 4, 6, 7, 9];

let count = arr[0]; // start from 1

for (let i = 0; i < arr.length; i++) {
    while (count < arr[i]) {   // print all missing before current number
        console.log(count);
        count++;
    }
    count = arr[i] + 1; // move past current number
}

//subarrays print
function printSubarrays(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        for (let j = i; j < n; j++) {
            subarr.push(arr[j]);
            console.log(subarr.join(" "));


        }
    }
}
//printSubarrays([1, 2, 3]);

//print sum of all subarrays 
function printSub(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        let sum = 0;
        for (let j = i; j < n; j++) {

            sum += arr[j];
            subarr.push(arr[j]);

            console.log(subarr.join(" "), sum);
        }
    }
}
//printSub([1, 2, 3]);

function targSumSubarray(arr, k) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += arr[j];
            subarr.push(arr[j]);
            if (sum == k) {
                console.log(subarr.join(" "));
            }


        }
    }
}
targSumSubarray([1, 2, 3, 4, 5], 5);