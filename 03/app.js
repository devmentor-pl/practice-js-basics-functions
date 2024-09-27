const sumNumber = function(number) {

    let result = 0;

    for (let i=1; i<=number; i++) {

            result += i;
    }

    return result;
}


const sum = sumNumber(4);

console.log(sum);