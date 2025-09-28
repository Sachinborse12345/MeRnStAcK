let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let matrix = [];
for (let i = 0; i < arr[i].length; i++) {
    for (let j = 0; j < arr[j].length; j++) {
        matrix[i][j] += arr[i][j];

    }
}
console.log(matrix);