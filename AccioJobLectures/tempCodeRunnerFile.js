function twoWayPattern(num, current = 1) {
    if (num < current) {
        return;
    } console.log(current);
    twoWayPattern(num, current + 1);
    console.log(current);

}
twoWayPattern(5);
