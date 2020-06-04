function addNumbers(a) {

    let sum = 0;
    for (i = 1; i < a + 1; i++) {
        sum = sum + i;
    }
    return sum;
}

const res = addNumbers(4);
console.log(res);