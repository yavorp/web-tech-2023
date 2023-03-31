// global
let x = 10;
// Скоупове
// function print() {
//     // scope of the function print
//     // x, y
//     const x = 1;
//     // Имаме ли променлива x
//     // Имаме следователно, ще присвоим стойността на x, коят е дефинирана в скоупа на функцията print)
//     // Ако нямаме променлива x, ще потърсим променливата в глобалния скоуп
//     const y = x;

//     console.log(y);
// }

// print();

// Global scope do red 23 -> x = 10, sled 23 -> x = 11
function f() {
    // Outer scope
    // y = 10

    // y = 11
    const y = x;
    x = x + 1;
    
    function g() {
        // Innner scope

        console.log(`x: ${x}, y: ${y}`);
    }

    return g;
}

const g1 = f();
// x = 11, y = 10
g1();
const g2 = f();
// x = 12, y = 11
g2();
// x = 12, y = 10
g1();

// function curry(fn, ) {

// }
// How to get arguments from the function
function print(x, y, z, ...args) {
    console.log(x, y, z);
    console.log(args);
}

//  f(x, y, z, p) => f1(y,z,p) = curry(f, 1) --> f(1, y, z, p)
function curry(fn, arg) {
    // Outer scope
    // fn --->  console.log
    // arg ---> [INFO]
    return function result(...args) {
        // Inner Scope
        return fn(arg, ...args);
    }
}
const logInfo = curry(console.log, '[INFO]');
logInfo('test');

function sum(...args) {
    let res = 0;
    args.forEach(v => res += v);
    return res;
    // return args.reduce((acc, current) => acc + current, 0);
}

const add5 = curry(sum, 5)
console.log(add5(4));



function withSingleState(fn) {
    let state = undefined; // let state;
    
    function useSingleState(value) {
        // null or indefined
        state = state || value;
        function setter (newValue) {
            state = newValue;
        }
        return [state, setter];
    }

    return () => fn(useSingleState);
}


const nextValue = withSingleState(useSingleState => {
    const [counter, setCounter] = useSingleState(0);
    setCounter(counter + 1);
    return counter;
})

console.log(nextValue());
// 0
console.log(nextValue());
// 1