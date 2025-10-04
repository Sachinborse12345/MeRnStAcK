let i = 1;
while (i <= 5) {
    if (i === 4) {
        i++;// increment i before continuing
        continue;
    }
    console.log(i);
    i++;
}
