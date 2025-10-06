
//linear searching
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
/*
 * Map in JavaScript:
 * ------------------
 * A Map is a collection of key-value pairs where both keys and values can be of any data type.
 * Maps remember the original insertion order of the keys.
 *
 * Common Map methods:
 * - set(key, value): Adds or updates an element with a specified key and value.
 * - get(key): Returns the value associated with the key, or undefined if the key does not exist.
 * - has(key): Returns true if the key exists in the Map, otherwise false.
 * - delete(key): Removes the element with the specified key.
 * - clear(): Removes all elements from the Map.
 * - size: Returns the number of key/value pairs in the Map.
 * - keys(): Returns an iterator of the Map's keys.
 * - values(): Returns an iterator of the Map's values.
 * - entries(): Returns an iterator of the Map's [key, value] pairs.
 */
function findsum(arr, n, target) {
    let map = new Map();
    let count = 0;
    for (let i = 0; i < n; i++) {
        let num = arr[i];
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


/*
 * Set in JavaScript:
 * -----------------
 * A Set is a collection of unique values. Any value (both primitive and object references) may occur only once in a Set.
 *
 * Common Set methods:
 * - add(value): Adds a new element with the given value to the Set.
 * - has(value): Returns true if the value exists in the Set, otherwise false.
 * - delete(value): Removes the specified value from the Set.
 * - clear(): Removes all elements from the Set.
 * - size: Returns the number of elements in the Set.
 * - values(): Returns an iterator of the Set's values.
 */

// Example usage of Set:
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will not be added
mySet.add('hello');
console.log(mySet.has(1)); // true
console.log(mySet.size); // 3
mySet.delete(2);
console.log([...mySet]); // [1, 'hello']
//Anagram Deletions
function minDeletions(word1, word2) {
    let freq1 = new Map();
    let freq2 = new Map();
    for (let i = 0; i < word1.length; i++) {
        let ch = word1[i].toLowerCase();
        freq1.set(ch, (freq1.get(ch) || 0) + 1);
    }
    for (let i = 0; i < word2.length; i++) {
        let ch = word2[i].toLowerCase();
        freq2.set(ch, (freq2.get(ch) || 0) + 1);
    }
    let deletions = 0;
    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(97 + i);
        let count1 = freq1.get(letter) || 0;
        let count2 = freq2.get(letter) || 0;
        deletions += Math.abs(count1 - count2);
    }
    return deletions;

}
console.log(minDeletions("Silentfds", "listengh"));
