function fromCamelToKebabCase(str) {

}

console.log('str')
// str
console.log('fooBar')
// foo-bar

function flatten(arr) {
}

console.log(flatten([1,23, [1,23,4, [13, 41], [13,4]], 14]))
// [1,23,4,13,41,13,4,14]


const object = {
    a: {
        b: {
            c: 121
        }
    }
}
Object.freeze(object);
object.a.b.c = 10;

function freeze(object) {
}
freeze(object);
object.a.b.c = 20;
console.log(object.a.b.c)
// 10


// function outer() {
//     let counter = 0;
//     return function innerFunction() {
//         counter++;
//         return counter;
//     }
// }

// const getInnerFunction = outer();
// console.log(getInnerFunction());
// console.log(getInnerFunction());
// console.log(getInnerFunction());
// console.log(getInnerFunction());
// console.log(getInnerFunction());


function curry(fn, ...args) {
    return (arg) => fn(...args, ...arg); 
}

const info = curry(console.log, '[INFO]');
const error = curry(console.log, '[ERR]');
error('adsaf')

const obj = {
    a: {
        b: 'c',
        c: {
            f: {
                ff: 123
            }
        }
    }
};

freeze(obj);
obj.a.c.f.ff = 6;
console.log(obj.a.c.f.ff);

function numberGenerator() {
    let num = 0;
    function generate() {
        num++;
        return num;
    }
    return generate;
}

let asdf = numberGenerator();
console.log(asdf())
console.log(asdf())

function withSingleState(fn) {
    let value = undefined;

    function useState(initial) {
        value = value ?? initial;
        return [value, newVal => value = newVal];
    }

    return () => fn(useState);
}


const nextValue = withSingleState(useState => {
    const [counter, setCounter] = useState(0);
    setCounter(counter + 1);
    return counter;
})

console.log(nextValue(), '; ',nextValue());

function logGenerator() {
    
}
// function withSingleState(fn) {
// }


// const nextValue = withSingleState(useSingleState => {
//     const [counter, setCounter] = useSingleState(0);
//     setCounter(counter + 1);
//     return counter;
// })

// console.log(nextValue());
// console.log(nextValue());


// function withMemo(fn) {
//     let results = {};
//     function useMemo(func) {
//         if (results[func.name]) {
//             return results[func.name];
//         }
//         return results[func.name] = func();
//     };
//     return () => fn(useMemo);
// }

// function test() {
//     console.log('test1');
//     return 1;
// }

// function test2() {
//     console.log('test2');
//     return 2;
// }

// const solve = withMemo(useMemo => {
//     const a = useMemo(test)
//     const b = useMemo(test2);

//     return a+b;
// });

// console.log(solve())
// console.log(solve())




let x = 10;
 
function foo() {
  console.log(x);
}
 
function bar(funArg) {
  let x = 20;
  funArg(); // 10, not 20!
}
 
// Pass `foo` as an argument to `bar`.
bar(foo)