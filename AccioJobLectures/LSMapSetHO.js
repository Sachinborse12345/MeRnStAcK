//Linear Search
/*Is way of searching the element in the array. after getting the 
desired element it simply prints the index of that element.

Time complexity of linear Search->
Best time complexity is O(1).
worst time complexity is O(n)
Average time complexity is O(n/2).*/
function linearSearch(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            console.log(`${k} is present at index ${i}`);
            return;
        }
    } return -1;
}
linearSearch([1, 4, 65, 4, 32, 56, 34], 4);

//we can solve problem by count frequency of numbers.
function linearSearch(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            count++;

        }
    } console.log(count);

}
// linearSearch([1, 4, 65, 4, 32, 56, 34], 4);

//return all indices where all the elements appears.
function linearSearch(arr, k) {
    let count = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            count.push(i);

        }
    } console.log(count.join(' '));

}
linearSearch([1, 4, 65, 4, 32, 56, 34], 4);

//Maps
function findsum(arr, n, target) {
    let map = new Map();
    let count = 0;
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (let i = 0; i < n; i++) {
        let num = arr[i];
        let complement = target - num;
        if (map.has(complement)) {
            count += map.get(complement);
        } if (complement == num) {
            count--;
        }
    } return Math.floor(count / 2);
}
console.log(findsum([1, 3, 5, 6, 1], 5, 7));

//Sets
//Angram or not
function understandSets(word1, word2) {
    if (word1.length !== word2.length) return false;
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    let newSet1 = new Set(word1);
    let newSet2 = new Set(word2);
    if (newSet1.size !== newSet2.size) return false;
    for (let ch in newSet1) {
        if (!newSet2.has(ch)) return false;
    }

    return true;
}
console.log(understandSets("sachin", "sachin"));

