/*
                                   Time & Space complexity
Logs numbers from 0 to 9 to the console using a standard for loop.

Time Complexity: O(n), where n is 10 in this case.
Time & Space complexity
/*Time Complexity= Amount of time 
required to execute the program.*/
for (let i = 0; i < 10; i++) {//Time complexity O(10);
    console.log(i);
}

for (let i = 0; i < N; i++) {//Time complexity O(N);
    console.log(i);
}

for (let i = 0; i < N; i+=2) {//Time complexity O(N/2)==>O(N);
    console.log(i);
}


// Infinite while loop
// Time complexity: Infinite (does not terminate)
while (true) {
    // This will run forever
    console.log("Infinite loop");
}

/*
Types of Time Complexity:

1. Constant Time - O(1)
2. Linear Time - O(n
3. Logarithmic Time - O(log n)
    Example: Binary search.
4. Quadratic Time - O(n^2)
    Example: Nested loops over the same data.
5. Cubic Time - O(n^3)
    Example: Three nested loops.
6. Exponential Time - O(2^n):
    The time doubles with each additional input element.
7. Factorial Time - O(n!):
    The time increases factorially with input size.
    Example: Generating all permutations of a set.
*/

// Logarithmic Time Complexity - O(log n)
// Example: Repeatedly dividing n by 2
let count =1;
while (count<n ) {
    count*=2;
    
}
// This loop runs log₂(n) times

// Nested loop with O(N) time complexity
// The inner loop runs only once for each iteration of the outer loop
for (let i = 0; i < N; i++) {
    for (let j = 0; j < 1; j++) {
        console.log("i:", i, "j:", j);
    }
}
// Total time complexity: O(N * 1) = O(N)
