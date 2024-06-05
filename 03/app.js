const numberOfCycleCounts = function(numberOfCycles) {
    let sum = 0;

    for (i = 0; i < numberOfCycles; i++) {
        sum = sum + (i+1);
    }

    return sum;
}

console.log(numberOfCycleCounts(4));