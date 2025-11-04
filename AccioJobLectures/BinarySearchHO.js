function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // not found
}

function firstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // move left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// Example
arr2 = [1, 2, 2, 2, 3, 4];
console.log(firstOccurrence(arr2, 2)); // 1


// Example
arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 3)); // 2

function lowerBound(arr, target) {
    let low = 0, high = arr.length; // search range [low, high)

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] < target) {
            // if mid element < target, ignore left half
            low = mid + 1;
        } else {
            // possible answer, but look for smaller index
            high = mid;
        }
    }
    return low; // first index where element >= target
}

// Example
let arr = [1, 2, 4, 4, 5];
console.log(lowerBound(arr, 4)); // Output: 2
console.log(lowerBound(arr, 3)); // Output: 2
console.log(lowerBound(arr, 6)); // Output: 5 (would insert at end)

function upperBound(arr, target) {
    let low = 0, high = arr.length;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] <= target) {
            // move right because mid is <= target
            low = mid + 1;
        } else {
            // possible answer, but look for smaller index
            high = mid;
        }
    }
    return low; // first index where element > target
}

// Example
let arr2 = [1, 2, 4, 4, 5];
console.log(upperBound(arr2, 4)); // Output: 4
console.log(upperBound(arr2, 3)); // Output: 2
console.log(upperBound(arr2, 5)); // Output: 5
