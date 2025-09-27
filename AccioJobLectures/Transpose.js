const A = [
    [1, 2, 3],
    [5, 5, 6],
    [7, 8, 9]
];
let m = 3, n = 3;

function transposeMatrix(A, m, n) {
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = A[i][j];
            A[i][j] = A[j][i];
            A[j][i] = temp;
        }
    }

    // print row by row
    console.log(A);
}

transposeMatrix(A, m, n);
