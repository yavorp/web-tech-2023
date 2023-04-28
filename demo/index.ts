// // number, boolean, string
// let aVar: number = 10;
// let num = 10;
// let a = 'string';
// const b = 'str';
// let c: undefined = undefined;
// const constantNumber = 1;
// let d = undefined;
// d = 10;
// d = 'user';
// let str: 'str' = 'str';
// // 
// type Operation = 'add' | 'divide' | 'multiply';
// function calc(a:number, b:number, operation: Operation): number | undefined {
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

// // My name is a constant
// function getTeachersName(): Readonly<'Yavor'> {
//     return 'Yavor';
// }

// calc(2,3, 'add');

// let arr = [1, 'Name', true, undefined];
// let arr1 :number[] = [1, 2, 3];
// // arr1 = arr;
// interface Person {
//     name: string,
//     age: number,
//     height?: number | undefined;
// }

// type PersonType = {
//     name: string,
//     age: number,
//     height?: number | undefined;
// }


// interface Employee extends Person {
//     id: number
// }


// type EmployeeType = PersonType & {
//     id: number
// } & {
//     companyName: string
// };

// const person: EmployeeType = {
//     name: 'Yavor',
//     age: 24,
//     id: 1,
//     companyName: 'SU'
// };

// interface RegisteredUser {
//     name: string,
//     userType: 'registered'
// }
// interface Guest {
//     userType: 'guest'
// }
// type User = Guest | RegisteredUser;
// // guest; registered
// function welcomeMessage(user: User) {
//     if (user.userType === 'guest') {
//         return 'Sign Up'
//     } else {
//         return `Welcome ${user.name}`;
//     }
// }

// welcomeMessage({name: 'Yavor', userType: 'registered'})
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
