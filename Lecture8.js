//Loops
//Basics 
// console.log("Hii");
// console.log("Hii");
// console.log("Hii");
// console.log("Hii");
// console.log("Hii");
// console.log("Hii");
// Issues in repeating code,unable to count repetition, to solve this issue we use loops
//While loops
// let count =10;
// while(count>0){//(10)
//     console.log("Hii");
//     count--;
// }


// let counting=1;
// while(counting<=10){//O(10)
//     console.log(counting,"");
//     counting++;
// }
// let count1 = 1;
// while (count1 <= 25) {//O(13)
//     if (count1 % 2 == 0) {
//         console.log(count1);
//     }
//     count1++;
// }
// let ptr = 2;
// while (ptr <= 25) {//O(13)
//     console.log(ptr);
//     ptr += 2;
// }

// let ptr2 = 10;
// while (ptr2 > 0) {//O(10)
//     console.log(ptr2);
//     ptr2--;
// }

//For loops 
//1.initilize the value of variable
//2.check if condition is true
//3.exacute lines of code inside this for loop
//4.increment the value again goes to ->2->3->4->2->3->4->repeat
// for (let i = 0; i < 10; i++) {//O(10)
//     console.log("Hii");
// }
//print 1->10 using for loop
// for(let i=1;i<=10;i++){//O(10)
//     console.log(i);
// }

//print multiplies of 3 up to 50
// for (let i = 3; i <= 50; i += 3) {//O(50)
//     console.log(i);
// }

// for (let i = 1; i <= 50; i++) //O(50)
//     {
//     if (i % 3 == 0) {
//         console.log(i);
//     }
// }


//Print squres of numbers from 20 to 35
// for (let i = 20; i <= 35; i++) //O(50)
// {
// console.log(i * i);
// }

// n = 15;
// start = 20;
// for (let i = start; i <= start + n; i++) //O(50)
// {
//     console.log(i * i);
// }

//TC->O(n)->[(start+n)-start]

// let n = 5;
// for (let i = 1; i <= 10; i++) {//O(10)
//     console.log(n, "X", i, "=", i * n);
// }


// let sum = 0;
// for (let i = 1; i <= 100; i++) {//O(100)
//     sum += i;
// }
// console.log("Sum of first 100 numbers ", sum);

const n1 = false && 5;
const n2 = n1 === false && 34;
const n3 = n2 && "67";
console.log({ n1, n2, n3, n4, n5 });