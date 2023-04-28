"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// number, boolean, string
var aVar = 10;
var num = 10;
var a = 'string';
var b = 'str';
var c = undefined;
var constantNumber = 1;
var d = undefined;
d = 10;
d = 'user';
var str = 'str';
function calc(a, b, operation) {
    if (operation === 'add') {
        return a + b;
    }
    if (operation === 'divide') {
        return a / b;
    }
    if (operation === 'multiply') {
        return a * b;
    }
}
// My name is a constant
function getTeachersName() {
    return 'Yavor';
}
calc(2, 3, 'add');
var arr = [1, 'Name', true, undefined];
var arr1 = [1, 2, 3];
var person = {
    name: 'Yavor',
    age: 24,
    id: 1,
    companyName: 'SU'
};
// guest; registered
function welcomeMessage(user) {
    if (user.userType === 'guest') {
        return 'Sign Up';
    }
    else {
        return "Welcome ".concat(user.name);
    }
}
welcomeMessage({ name: 'Yavor', userType: 'registered' });
