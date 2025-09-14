
function hollowDiamond(n) {
    // Upper half
    for (let i = 1; i <= n; i++) {
        let line = "";

        // spaces
        for (let j = i; j < n; j++) {

            line += " ";
        }

        // stars & hollow
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
    // Lower half
    for (let i = n - 1; i >= 1; i--) {
        let line = "";

        // spaces
        for (let j = n; j > i; j--) {
            line += " ";
        }

        // stars & hollow
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}

// Example
hollowDiamond(5);

