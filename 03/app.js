
const sumNumbers = function(max) {
    console.log('Sum for number', max)
    let sum = 0
    let sumString = ''
    for(let i=1; i<=max; i++) {
        sum+= i
        sumString += i + ' + '
    }
    console.log(sumString)
    return sum
}
console.log(sumNumbers(4))








