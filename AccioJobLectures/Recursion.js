/**
 * Example of a recursive function: factorial
 * Calculates n! (n factorial)
 */
console.log("---------------------------------RECURSION--------------------------------");
// Recursive function to calculate factorial of n
// Recursion is a technique where a function calls itself to solve smaller instances of the same problem.
// Here, factorial(n) calls factorial(n - 1) until it reaches the base case (n === 0 or n === 1).
function reverseNum(N) {
    if (N === 0) {
        return;
    }
    console.log(N);
    reverseNum(N - 1);
}
reverseNum(5);

console.log("---------------------------------------------------------------------------");
function printNum(n) {
    if (n == 6) {
        return;
    }
    console.log(n);
    printNum(n + 1);
}
printNum(1);
console.log("---------------------------------------------------");

//reverse upto 10-1
function revUpToOne(k) {
    if (k === 0) {
        return;
    } console.log(k);
    revUpToOne(k - 1);
} revUpToOne(10);


console.log("--------------------------------------------------------------");

//factorial problem 
function printHelloWorld(m) {
    if (m == 0) {
        return;
    }
    console.log("Hello World!");
    printHelloWorld(m - 1);
}
printHelloWorld(5);
console.log("------------------------------------------------------------");

//twoWayPattern 
function twoWayPattern(num, current = 1) {
    if (num < current) {
        return;
    } console.log(current);
    twoWayPattern(num, current + 1);
    console.log(current);

}
twoWayPattern(5);

//sum nutural numebers
function sum(number) {
    if (number == 0) {
        return 0;
    }
    return number + sum(number - 1);
}
console.log(Number(sum(5)));

//power of num
function power(base, index) {
    if (index == 0) {
        return 1;
    } return base * power(base, index - 1);
}
console.log(power(2, 3));

//reverse a string
//string=Hello
function revString(str, revstr = "") {
    if (str.length === 0) {
        return revstr;
    }
    revstr += str[str.length - 1];
    return revString(str.slice(0, -1), revstr);
}
console.log(revString("hello"));

//fibonacci
function fact(number) {
    if (number == 0) {
        return 1;
    }
    return number * fact(number - 1);
}
console.log(Number(fact(5)));

//fibonacci
function printFibonacci(n, a = 0, b = 1) {
    if (n === 0) {
        return;
    }
    console.log(a);
    printFibonacci(n - 1, b, a + b);
}
printFibonacci(5);

