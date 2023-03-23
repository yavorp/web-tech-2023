
// console.log(typeof true);
// console.log(typeof 12);
// console.log(typeof 12.1);

// console.log(0.3 == 0.2 + 0.1);
// console.log(typeof 'Hello World');
// const name = 'Name';
// console.log(`Hello, ${name}`);


// const arr = [1, 2, 3];
// const strangeArray = [1, 'str', false];


// console.log({
//     'name': 'JS',
//     greet() {
//         return 'Hello';
//     }
// });


// console.log(/ab+c/.test('ac'));

let aVariable = undefined;
// console.log('something' * 1);


function checkStr(str) {
    if((typeof str) == 'string') {
        console.log('this is a string')
    } else {
        console.log('not a string');
    }
}

const checkArrow = param1 => {
    if((typeof param1) == 'string') {
        console.log('this is a string')
    } else {
        console.log('not a string');
    }
}

const checkStrAnonymous = function(param1) {
    if((typeof param1) == 'string') {
        console.log('this is a string')
    } else {
        console.log('not a string');
    }
}

// const fib =  function fibUtil(param1) {
//     if (param1 <= 1)
//         return param1;
//     return fib(param1 - 1) + fib(param1 - 2)
// }

// console.log(fib(4));
// console.log(fib('str'));


// console.log('1' === 1);
// console.log()

const a = 1;
const b = a + 1;
const c = b - 2;
const exp = b ** 3;
// const d = ++b;

let str1 = '1,2,3,';
let str2 = '4';
let f = null;
// console.log(f && 'something');

// const something = c % 2 === 1 ? 'c is oddd ' : 'c is evan';
// console.log(something);

// if (c === '0') 
//     console.log('something1');
    // console.log('Should be printed after something');


function aFunc() {
    // var a;
    // 
    console.log(b);
    if (false) {
        let asdf1 = 10;
        console.log('from if');
        console.log(asdf1);
    } else {
        var b = 4;
        console.log('from else');
        console.log('b: ',b);
    }
    console.log('a: ', asdf1);
}

// aFunc();

// {
//     {
//         console.log(a);
//         let a = 10;
//     }
// }

'use strict'

const object = {
    'name': 'JS',
    'age': 28
}

Object.freeze(object);
object.age = 4;
console.log(object);

let obj = {};
console.log(obj);
obj = 1;
console.log(obj);
test();

function test() {
    console.log('test');
}