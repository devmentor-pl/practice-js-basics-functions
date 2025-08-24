const getNumber = function(sum) {
    let arr = [];
    for (let i = 1; i <= sum; i++){
        arr.push(i);
    }
    const result = arr.reduce(function(total, item) {
        return total + item;
    });
    console.log(result)
}   


const sumNumbers = getNumber(4);

console.log(sumNumbers)
