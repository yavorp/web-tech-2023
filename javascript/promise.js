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
const fs = require('fs');
// sync example
// const res = fs.readFileSync('./text.txt');
// console.log(res.toString());
// async example
// fs.readFile('./text.txt', (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         const result = data.toString();
//         fs.writeFile('res.txt', result, () => {
//             console.log('success!');
//         })
//     }
// });
// console.log('Somthing');

// Print something
// Read file
// Write File
// Print success


// Callback hell;
// setTimeout(() => {
//     console.log('First set timeout')
//     setTimeout(() => { 
//         console.log('Second set timeout');
//         let iter = 0;
//         const interval = setInterval(() => {
//             iter++;
//             console.log(`Iter ${iter}`);
//             if (iter >= 5) {
//                 interval.unref();
//             }
//         } ,1000 )

//     }, 0);
// } , 100);

// console.log('From row 48');
// Second
// From row
// First

// 

// const promise = new Promise((resolve, reject) => {
//    console.log('promise');
//    setTimeout(() => resolve('test1'), 1000);
// });
// const promise2 = promise.then(res => console.log(res));
// promise2.then(res => console.log('From promise 2', res));

// console.log('First');

function readFilePromise(path) {
    return new Promise((res, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) {
                reject(err);

            } else {
                console.log('from first fn')
                res(data.toString());
            }
            return;
        });
    });
}


function readFilePromise1(path) {
    return new Promise((res, reject) => {
        fs.readFile(path, (err, data) => {
            reject('Test');
            return;
            if (err) {

            } else {
                setTimeout(() => {
                    console.log('from second fn');
                    res(data.toString())
                }, 1000);
            }
            return;
        });
    });
}

const promise1 = readFilePromise('text.txt');
const promise2 = readFilePromise1('res.txt');
Promise.all([promise2, promise1]).then(res => console.log(res)).catch(console.error);