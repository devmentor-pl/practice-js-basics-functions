function sayHello(text) {

    const result = text;
    console.log('cześć' , text);

        document.getElementById('text').innerHTML = "Hello "  +  text + " do you wanna play a game?";
}

sayHello( prompt('What is your name?' , 'devmentor.pl') );



// function sayHello(message) {

//     const nameHolder = prompt(message);

//     return nameHolder;
// }

// const massageForUser =  sayHello;

// const nameFromUser = massageForUser('What is your name?');

// console.log("Hello "  + nameFromUser + " ,do you wanna play a game?");

// document.getElementById('text').innerHTML = "Hello "  +  nameFromUserar + " do you wanna play a game?";



// function sayHello() {
//     const nameHolder = prompt("What is your name?");

//     if(nameHolder != null) {

//         document.getElementById('text').innerHTML = "Hello "  + nameHolder + " do you wanna play a game?";
//         console.log("Hello "  + nameHolder + " ,do you wanna play a game?");
//     }

//     else {

//         document.getElementById('text').innerHTML = "Bro tell me who are you?";
//         console.log("Bro tell me who are you");
//     }
// }
// setTimeout(sayHello, 100);