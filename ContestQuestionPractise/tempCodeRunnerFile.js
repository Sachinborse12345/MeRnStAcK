// let arr = [1, 2, 3, 45, 6, 5, 6, 5, 2];
// let str = "We promptly judged antique ivory buckles for the next prize";
// let newStr = str.split(" ").join("").toLowerCase();
// let myset = new Set();
// for (let char of newStr) {
//     myset.add(char);
// }
// let flag = false;
// let abcd = "abcdefghijklmnopqrstuvwxyz";
// for (let char of abcd) {
//     if (myset.has(char)) {
//         flag = true;
//     }
// }
// if (flag) {
//     console.log("pangram");
// } else {
//     console.log("not pangram");
// }
// let myset = new Set(newStr);
// console.log(myset);


// class cars {
//     constructor(brand, price) {
//         this.brand = brand;
//         this.price = price;
//     }
//     start() {
//         console.log(`car starts ${this.brand}`);
//     }
//     stop() {
//         console.log("cars stops.");
//     }
// }
// const c1 = new cars("BMW", 25000000);
// c1.start();

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
// }
// const p1 = new Person("Sachin");
// p1.greet(); // Hello Sachin

// class hero {
//     constructor() {
//         console.log("Hero can fly...");
//     }
//     jump() {
//         console.log("Hero can jump");

//     }
// }
// new hero();

// class person {
//     constructor(type) {

//         console.log("parent constructor.");
//         this.species = "mens";

//     }
//     eat() {
//         console.log("eat");
//     }
// }
// class engineer extends person {

//     constructor(type) {
//         super(type);

//         console.log("child constructor");
//     }
//     eat() {
//         super.eat();
//         console.log("eats");

//     }
// }
// let e1 = new engineer("sachin", "backbencher");


//simple diagonal array printing
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let row = arr.length;
// let col = arr[0].length;
// let diagonalarr = [];
// for (let i = 0; i < row; i++) {
//     diagonalarr.push(arr[i][i]);
// }
// for (let i = 0; i < row; i++) {
//     diagonalarr.push(arr[i][row - 1 - i]);
// }

// console.log(diagonalarr);
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {

    speak() { // overrides parent method
        super.speak();
        console.log("Dog barks");
    }
}

const d = new Dog();
d.speak(); // Dog barks ✅

