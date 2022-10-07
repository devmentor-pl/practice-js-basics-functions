function sayHelo(name) {
    console.log(name)
}
sayHelo('Cześć Tomek');

//lub//

function sayHello() {
    const name = 'Tomek'
    console.log('Cześć', + ' ' + name)
}
sayHello();

//lub

function sayHello(a, b) {
    console.log(a + b)
}
sayHello('Hi', + ' ' +'Tomek')