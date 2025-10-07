//Binary Search
// 1. Define the function that takes a sorted array and the target value.
// 2. Initialize two pointers: left at the start, right at the end of the array.
// 3. While left pointer is less than or equal to right pointer:
//    a. Find the middle index between left and right.
//    b. If the middle element is equal to the target, return the index.
//    c. If the middle element is less than the target, move the left pointer to mid + 1.
//    d. If the middle element is greater than the target, move the right pointer to mid - 1.
// 4. If the target is not found, return -1.
let arr = [];
function BinarySearch(arr, target) {


    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
// console.log(BinarySearch([5, 6, 3, 7, 8, 4], 8));

arr = [1, 2, 4, 4, 5, 6, 6, 7];
target = 4;
// console.log(BinarySearch(arr, target));

let arr1 = ["apple", "banana", "banana", "cherry", "date"];
// console.log(BinarySearch(arr1, "banana"));
console.log("----------------------------------");
function firstOcuurance(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) {
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
arr = [1, 2, 4, 4, 5, 6, 6, 7, 8, 9];
console.log(firstOcuurance(arr1, target));

console.log("------------------------------------");
//lowerBound
function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] >= target) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
}
arr = [1, 5, 6, 6, 7, 12, 15];
console.log(lowerBound(arr, 6));
//UpperBound