const sumNums = function(maxValue) {
    let sum = 0;
    for (let i = 1;i<=maxValue;i++)
        sum += i
    return sum
}
const takeValue = sumNums(prompt('Sumuj liczby od 1 do: '))
console.log(takeValue)