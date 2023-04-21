// // Base types 
// // string | number | boolean
// let name = 'Yavor';
// let name1: 'Yavor' = 'Yavor';
// // name1 = 'Ivan';

// // undefined тип или единична стойност undefined
// // единичните стойности 
// // Литералите могат да се използват като типове
// let und: undefined = undefined;
// let yavor: 'Yavor' = 'Yavor';

// // Note my name does not change 
// function getMyName(): 'Yavor' {
//     return 'Yavor'
// }

// // Union types
// type Operation = 'add' | 'divide' | 'multiply';

// function calc(a: number, b: number, operation: Operation) {
//     if (operation === 'add' ) {
//         return a + b;
//     }
//     if (operation === 'divide') {
//         return a / b;
//     }
//     if (operation === 'multiply') {
//         return a * b;
//     }
// }

function filter<T>(arr: T[], predicate: (arg: T) => boolean): T[] {
    let result: T[] = [];
    for (const iter of arr) {
        if(predicate(iter)) {
            result.push(iter);
        }
    }
    return result
}

console.log(filter([1,2,3], (num) => num % 2 === 0));

export {};