const A = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
let m = 3, n = 3;
function rotateMatrix90(A, m, n) {
    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = A[i][j];
            A[i][j] = A[j][i];
            A[j][i] = temp;
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        A[i].reverse();
    }

    // Print rotated matrix
    for (let i = 0; i < n; i++) {
        console.log(A[i].join(" "));
    }
}


rotateMatrix90(A, m, n);
