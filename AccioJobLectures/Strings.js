//===========String and its Methods===========
// Creating a string
let message = "Hello, World!";
console.log(message);

// Strings are immutable 
message[0] = "h"; // This will not change the string
console.log(message); // Output: Hello, World!
// String Methods
// 1. length
let str1 = "Hello World";
let len = str1.length;

console.log(len);
// 2. toUpperCase()
let str2 = str1.toUpperCase();//output: HELLO WORLD
console.log(str2);
// 3. toLowerCase()
let str3 = str1.toLowerCase();//output: hello world
console.log(str3);
// 4. indexOf()
//indestOf() method returns the index of the first occurrence of a specified text in a string. If the text is not found, it returns -1.

let index = str1.indexOf("o");
console.log(index);


// 5. lastIndexOf()
let lastIndex = str1.lastIndexOf("o");
console.log(lastIndex);
// 6. slice()
let slicedStr = str1.slice(0, 5);
console.log(slicedStr);
// 7. replace()
let replacedStr = str1.replace("World", "JavaScript");// Replaces first occurrence
console.log(replacedStr);
// 8. split()
let splittedStr = str1.split(" ");// Splits the string into an array of substrings
console.log(splittedStr);
// 9. charAt()
let char = str1.charAt(0);
console.log(char); // Output: H 


// 10. includes()
let includesHello = str1.includes("Hello");
console.log(includesHello);
// 11. trim()
let strWithSpaces = "   Hello World   ";
let trimmedStr = strWithSpaces.trim();//output: Hello World
console.log(trimmedStr);
// 12. concat()

let str4 = "Hello";
let str5 = "World";
let concatenatedStr = str4.concat(" ", str5);
console.log(concatenatedStr);
// 13. startsWith()
let startsWithHello = str1.startsWith("Hello");
console.log(startsWithHello);
// 14. endsWith()
let endsWithWorld = str1.endsWith("World");
console.log(endsWithWorld);
// 15. repeat() 
let repeatedStr = str4.repeat(3);
console.log(repeatedStr);

//substring()
let substr = str1.substring(0, 5);
console.log(substr);

//slice()
console.log("slice method");
let name1 = "acciojob";
let sliced = name1.slice(-7, -2);
console.log(sliced);

//repeat()
console.log("repeat method");
let greet = "hi ";
let repeatedGreet = greet.repeat(3);
console.log(repeatedGreet);


// Example: Check if a string contains a substring
// let mainStr = "The quick brown fox jumps over the lazy dog";
// let subStr = "fox";
// let containsSubStr = mainStr.includes(subStr);
// console.log(containsSubStr); // Output: true


// Example: Count number of words in a string
// let str = "hi how was your day";
// str1 = str.split(" ");
// let size = str1.length;
// console.log(size);

//print substrings of length 3 for the given string
let string = "abcdefgh";
for (let i = 0; i <= string.length - 3; i++) {
    console.log(string.slice(i, i + 3));
}

//print all substrings
console.log("all substrings");
let str = "abcd";
for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
        console.log(str.slice(i, j));
    }
}


