// //variables
// //table
// // let n = 5;
// // for (let i = 1; i <= 10; i++) {
// //     console.log(n, "x", i, "=", i * n);
// // }

// //Reassingnment
// // let a = 10.45;
// // a = 20.55;
// // console.log(a);

// //Calc Avg Product Rating
// function avgrat(rat1, rat2, rat3) {
//     let avg = (rat1 + rat2 + rat3) / 3;
//     return Math.floor(avg);
// }
// // console.log(avgrat(10.5, 12.5, 12.15));

// //Quotient and reminder calculation
// let a = 1042, b = 7;
// let quo = Math.floor(1042 / 7);
// let rem = 1042 % 7;
// // console.log(quo, rem);

// a = 10;
// console.log("My name is " + a);

// //Arithmatic
// //circle area and perimeter calculation
// let pi = 3, r = 4;

// let area = pi * r * r;
// let per = 2 * pi * r;
// // console.log(area, per);

// //cel to farenheit
// let cel = 32;
// let faren = cel * 1.8 + 32;


// a = 4;
// b = 5;
// let c = (a + b) ** 3;
// console.log(c);

// let year = 2800;
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 == 0)) {
//     console.log(1);

// } else {
//     console.log(0);

// }
//acute 2*(l**2)<()
let sides = "3 3 3";
let [a, b, c] = sides.split(" ").map(Number);
let largest = Math.max(a, b, c);
let twiceSquare = 2 * (largest * largest);
let sumOfSquare = a * a + b * b + c * c;
if (largest > sumOfSquare) {
    console.log(3);

} else if (twiceSquare == sumOfSquare) {
    console.log(2);

} else {
    console.log(1);

}



