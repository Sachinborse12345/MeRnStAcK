//Do while Loops
// let ptr=1;
// do{
//     console.log("Hii"
//     );
//     ptr++;
// }while(ptr<10);



//factorial of number
// let n = 10;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }
// console.log(fact);


// const num = 14;
// let divisorscount = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//         divisorscount++;

//     }
// }
// let result = divisorscount > 2 ? "non-prime" : "prime";
// console.log(result);

//divisibles of 17
// const num = 17;
// for (let i = 100; i <= 200; i++) {
//     if (i % num == 0) {
//         break;
//     }
//     console.log(i);
// }
// continue 
// print the square of all numbers from 1 to 100,
//  except the numbers divisible by 17
// let divisor = 17;
// for (let i = 0; i <= 100; i++) {
//     if (i % divisor == 0) {
//         continue;
//     }
//     console.log(i ** 2);
// }

//print all oddd numbers from 1 to 100 div by 5
// let divisor = 5;
// for (let i = 1; i <= 200; i++) {
//     if (i % divisor == 0) {
//         if (i % 2 == 0) {
//             continue;
//         }
//         console.log(i);

//     }

// }

// let divisor1 = 5;
// let count = 0;
// for (let i = 1; i <= 200; i++) {
//     if (i % divisor1 == 0) {
//         if (i % 2 == 0) {
//             continue;
//         }
//         console.log(i);
//         count++;
//         if (count == 10) {
//             break;
//         }

//     }

// }

// 10 stars in one line
// let starString = "";
// for (let i = 0; i <= 10; i++) {
//     starString += "*";
// }
//  console.log(starString);

//10 stars in one line of 10 lines

// for (let i = 0; i < 10; i++) {


//     let starString = "";
//     for (let i = 0; i <= 10; i++) {
//         starString += "*";
//     }
//     console.log(starString);
// }

//
// let num = 6;

// for (let i = 1; i <= num; i++) {
//     let str = "";
//     for (let j = 1; j <= num; j++) {
//         str += j + " ";

//     }
//     console.log(str);

// }

//HomeWork
// print this pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// let num = 6;

// for (let i = 1; i <= num; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str += j + " ";

//     }
//     console.log(str);

// }

//H.W
//*****
//****
//***
//**
//*

// let num1 = 6;

// for (let i = num1; i >= 0; i--) {
//     let str = "";
//     for (let j = num1; j <= i; j--) {
//         str += "*";

//     }
//     console.log(str);

// }



// let count = 0;

// do {
//     const m = prompt("Do you want to continue?", count);
//     console.log({ m });
//     count++;
// } while (m == "Yes" || m == "yes");