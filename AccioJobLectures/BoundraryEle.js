const A = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
let m = 3, n = 3;


function boundaryTraversal(mat, m, n) {
    let result = [];

    // Top row
    for (let j = 0; j < n; j++) {
        result.push(mat[0][j]);
    }

    // Right column
    for (let i = 1; i < m; i++) {
        result.push(mat[i][n - 1]);
    }

    // Bottom row (only if more than 1 row)
    if (m > 1) {
        for (let j = n - 2; j >= 0; j--) {
            result.push(mat[m - 1][j]);
        }
    }

    // Left column (only if more than 1 column)
    if (n > 1) {
        for (let i = m - 2; i > 0; i--) {
            result.push(mat[i][0]);
        }
    }

    // Print each element on new line
    for (let val of result) {
        console.log(val);
    }
}
boundaryTraversal(A, m, n);