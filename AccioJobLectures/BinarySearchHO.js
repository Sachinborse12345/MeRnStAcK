//Binary Search
function BinarySeaarch(arr, tar) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == tar) {
            return mid;
        } else if (arr[mid] < tar) {
            start = mid + 1;

        } else {
            end = mid - 1;
        }
    } return -1;

}
console.log(BinarySeaarch([1, 2, 3, 4, 6, 7, 8, 45, 46], 1));
//first occurance

function firstOccurance(arr, tar) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == tar) {
            result = mid;
            end = mid - 1;
        } else if (arr[mid] < tar) {
            start = mid + 1;

        } else {
            end = mid - 1;
        }
    } return result;

}
console.log(firstOccurance([1, 2, 3, 4, 4, 6, 7, 8, 45, 46], 4));

//lowerBound
function lowerBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left; // index of first >= target
}

// Example
let arr3 = [1, 2, 2, 3, 4, 5];
console.log(lowerBound(arr3, 2)); // 1
console.log(lowerBound(arr3, 0)); // 0
console.log(lowerBound(arr3, 6)); // 6 (past last index)


//UpperBound
function upperBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else right = mid;
    }
    return left; // index of first > target
}

// Example
let arr4 = [1, 2, 2, 3, 4, 5];
console.log(upperBound(arr4, 2)); // 3
console.log(upperBound(arr4, 5)); // 6
