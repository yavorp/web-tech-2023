// function multiply(a, b) {
//     // throw new Error('asdf')
//     return a * b;
// }

// function square(a) {
//     return multiply(a,a);
// }

// function printSquare(a) {
//     console.log(square(a));
// }

// printSquare(2);
//  call stack-a най-лесно се вижда чрез exception-ите
// this is the call stack
// multiply 
// square
// printSquare
// main


setTimeout(() => console.log('first'), 100);
setTimeout(() => console.log('second'), 0);
console.log('sas');