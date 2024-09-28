function* naturalNumbers(start, end) {
    let current = start;
    while (current <= end) {
        yield current;
        current++;
    }
}

// გამოყენება
const numbers = naturalNumbers(1, 5);

for (let num of numbers) {
    console.log(num);
}
