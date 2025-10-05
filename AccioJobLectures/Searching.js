//Linear Search
//Searching element in stray linearly 
//Time Complexity is O(N) Worst O(1)-Best
function LinearSearch(str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            return true;
        }
    }
    return false;
}
let str = [1, 24, 5, 6, 4, 7];
// console.log(LinearSearch(str, 4));

//for string
function linearSearchStr(str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === target) {
            return i;
        }
    }
    return -1;
}
// console.log(linearSearchStr("hello", "e"));
// console.log(linearSearchStr("hello", "k"));

//for objects
let users = [{ id: 1, age: 21, name: "Ujjwal" },
{ id: 2, age: 23, name: "Sachin" },
{ id: 3, age: 24, name: "Ganesh" },
{ id: 4, age: 53, name: "Sachin" },
{ id: 5, age: 22, name: "Tejas" },
{ id: 6, age: 25, name: "Akash" }
];
function searchFromObj(users, name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            return users[i];
        }
    } return null;
}
// console.log(searchFromObj(users, "Sachin"));

//Map===>key value pair
let myMap = new Map();
// Set
// get
// has 
// delete key==removes key value pair

// myMap.set(101, "sachin");
// myMap.set(102, "tejas");
// myMap.set(103, "ganesh");
// myMap.set(104, "akash");

// let res = myMap.get(102);
// console.log(myMap);
// myMap.has(104);
// console.log(myMap);
// myMap.delete(103);
// console.log(myMap);
// myMap.clear();
// console.log(myMap);

// str = [10, 20, 10, 20, 30];
// let freq = {};
// for (let i = 0; i < str.length; i++) {
//     if (freq[stray[i]]) {
//         freq[str[i]] = (freq[str[i]] || 0) + 1;
//     }
// }
// console.log(freq);

function freqCount(str) {
    let Mymp = new Map();
    for (let i = 0; i < str.length; i++) {
        if (Mymp.has(str[i])) {
            let value = Mymp.get(str[i]) + 1;
            Mymp.set(str[i], value);

        } else {
            Mymp.set(str[i], 1);
        }
    }
    return Mymp;
}
str = [20, 30, 20, 30, 10]
// console.log(freqCount(str));


str = "hello world";
function freqCount(str) {
    let Mymp = new Map();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") continue;
        if (Mymp.has(str[i])) {
            let value = Mymp.get(str[i]) + 1;
            Mymp.set(str[i], value);
        }
        else {
            Mymp.set(str[i], 1);
        }
    }

    // console.log(Mymp);
    let maxcount = 0;
    let maxchar = '';




}
// console.log(freqCount(str));



// function freqCount(str) {

//     let strayMap = new Map();
//     for (let i = 0; i < stray.length; i++) {
//         if (strayMap.has(str[i])) {

//         }
//         strayMap.set(i, stray[i]);
//     }
//     console.log(strayMap);
// }

//Set
//unique value storing duplicates not allowed.
let fruits = new Set();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple");
// console.log(fruits);

// console.log(fruits.has("Banana"));


//Anagrams
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false;
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(isAnagram("silent", "listen"));
// console.log(isAnagram("hello", "world"));


function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let freqCount = {};
    for (let char of str1) {
        freqCount[char] = (freqCount[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!freqCount[char]) {
            return false;
        }

    } return true;
}
console.log(isAnagram("silent", "listen"));
console.log(isAnagram("hello", "world"));