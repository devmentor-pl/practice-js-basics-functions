let sum = 0;

function addNumbers(a) {

    for (i = 1; i < a + 1; i++) {
        sum = sum + i;
        // return sum;
    }
    return sum;
}


addNumbers(4);
console.log(sum)