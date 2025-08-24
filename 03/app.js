const sumka = function(num) {
    console.log(num)

    var result = 0
    for(var i=1; i<=num; i++) {
        result = result + i
    }
    return result
}

const zmienna = sumka(4)
console.log(zmienna)