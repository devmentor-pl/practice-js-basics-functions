const sumNumbers = function (liczba) {
  let suma = 0
  for (let i = 1; i <= liczba; i++) {
    suma += i
  }
  return suma
}

console.log(sumNumbers(4))
