const fn = function getSum() {
    let result = 0;
    for (let i = 1; i <= 4; i++) {
        result = result + i;
    }
    console.log(result)
    return result
}

fn();