'use strict'

function sum(i) {
    let calculation = 0
    for (let j = 1; j <= i; j++) {
        calculation = calculation + j
        console.log(calculation)
    }

}
sum(4)