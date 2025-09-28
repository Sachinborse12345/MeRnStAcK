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
let index = str1.indexOf("o"); console.log(index);
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


//reverse a string
console.log("reverse a string");
let strr = "abcd";
let reversedStr = "";
for (let i = strr.length - 1; i >= 0; i--) {
    reversedStr += strr[i];
}
console.log(reversedStr);

//palindrome or not
console.log("palindrome or not");
let strrr = "madam";
let reversedStrr = "";
for (let i = strrr.length - 1; i >= 0; i--) {
    reversedStrr += strrr[i];
}

if (strrr === reversedStrr) {
    console.log("palindrome");
}

/*======================Strings Day 2============================*/
console.log("Strings Day 2");
//split() use to split str in array of string
str = "hii raj my best friend";
let arr = str.split(" ");//split by space   
//console.log(arr);

arr = str.split("i");
//console.log(arr);//['h', '', ' raj my best fr', 'end']

arr = str.split("");
//console.log(arr);//each char in array

//join() use to join array of string to single string
let arr1 = ['h', 'e', 'l', 'l', 'o'];
let str7 = arr1.join("");
//console.log(str1); //output: hello

str1 = arr1.join(" ");
//console.log(str1); //output: h e l l o

str1 = arr1.join("-");
//console.log(str1); //output: h-e-l-l-o

//Question

//output: hELlO

function togglecase(str10) {
    let name = "";
    for (let i = 0; i < str10.length; i++) {
        if (str[i].toLowerCase()) {
            name[i] += str10[i].toUpperCase();
        }
        else {
            name[i] += str10[i].toLowerCase();
        }


    }
    console.log(name);

}
togglecase("HelLo");

//camelcase to snakecase

function camelToSnake(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += "_" + str[i].toLowerCase();
        }
        else {
            newStr += str[i];
        }
    }
    console.log(newStr);

}
camelToSnake("helloWorldThisIsMe"); //hello_world_this_is_me

//snakecase to camelcase
function snakeToCamel(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {

        if (str[i] === "_") {

            newStr += str[i + 1].toUpperCase();
            i++;
        }
        else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}
snakeToCamel("hello_world_this_is_me"); //helloWorldThisIsMe



//Extrace jungle from the string
str = "  How_are_you_in Jungle!  ";//output print Jungle
str = str.trim();

console.log(str.trim().split(" ")[1].split("!")[0]);

//only use replace and replaceAll method and replace "in
str = "How are you in Spain, which city are you in? How's your pain?";
//only change in to on but not in spain
//output: How are you on Spain, which city are you on?
str = str.replaceAll(" in ", " on ");
str = str.replaceAll(" in", " on");
str = str.replaceAll("in?", "on?");

console.log(str);

//palindrome or not 

function isPalindrome(str) {
    str = "madam";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {

            return false;
        }
    }
    return true;
}
console.log(isPalindrome("madam"));


//
// str = "Nurses Run";
// str = str.toLowerCase().replaceAll(" ", "");
// console.log(str);
// function isPalindrome(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != str[str.length - 1 - i]) {
//             return false;

//         }
//     } return true;
// }
// console.log(isPalindrome(str));

// str = "Pune is the most loved city for its weather"
// //output=7
// let nextstr = str.split(" ");
// console.log(nextstr.length);
// let count = 0;
// for (let i = 0; i < nextstr.length; i++) {
//     count++;
// }
// console.log(count);


//Write a function to find the first non-repeating character in a string
//input: "StringMethodsring";
//output: "M"
console.log("first non repeating char");
function firstNonRepeatingChar(str) {
    let charCount = {};
    // Count occurrences of each character
    for (let char of str) {
        char = char.toLowerCase(); // Case insensitive
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char.toLowerCase()] === 1) {
            return char;
        }
    }
    return null; // If all characters repeat
}

//function to find the frequency of each character in a string
console.log("frequency of each char");
function charFrequency(str) {
    let frequency = {};
    for (let char of str) {
        char = char.toLowerCase(); // Case insensitive
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}
console.log(charFrequency("StringMethodsring"));    

//Write s function to count the frequency of each word in a string
console.log("frequency of each word");
str="abd ghj abd ghi ghj abc abd";



