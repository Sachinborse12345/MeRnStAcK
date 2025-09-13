//Examples
/*Write a functions to find average */


// function avg(num1, num2, num3) {
//     let avg = (num1 + num2 + num3) / 3;
//     console.log(avg);

// }
// avg(10, 10, 10);
//factorial
function fact(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log(fact);

}
fact(5);

//permutation ncr
function nCr(n, r) {
    return fact(n) / fact(n - r) * fact(r);


    // return nCr(n)/(n-r)*(r);
}
console.log(nCr(5, 3));

