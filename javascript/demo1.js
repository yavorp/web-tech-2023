function print() {
    console.log(this.hasOwnProperty('x'));
}

// const point = {
//     x: 10,
//     y: 10
// };

// 
// const point = new Object({x: 10, y: 10});


// let binded = print.bind(point);
// binded();


// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.print = function () {
//     console.log(`x: ${this.x}, y: ${this.y}`);
// }

// const point = new Point(1, 1);
// const point2 = new Point(2, 2);

// point.print();
// point2.print(); // Point.prototype.print.call(point2)
// 
// this = {}
// this.__proto__ = Point.prototype
// this.x = x;
// this.y = y;

// point.print(); 
// if (point.hasOwnProperty('print')) {
//     point['print']();
// } else {
//    if (point.__proto__.hasOwnProperty('print')) {
//         point.__proto__['print']();
//    } else {
//         if()
//    }
// }
// Point.prototype.move = function(){
//     this.x++;
//     this.y++;
// }

// point.move();
// point.print();


// function Point3d(x, y, z) {
//     // this = {};
//     Point.call(this, x, y);
//     this.z = z;
// }

// Point3d.prototype = Object.create(Point.prototype);
// Point3d.prototype.constructor = Point3d;
// Point3d.prototype.test = function () {
//     console.log('test');
// }

// const point3d = new Point3d(1,2,3)
// const p2 = new point3d.__proto__.constructor(1,2,3);
// console.log(p2.__proto__.constructor)

class Point {
    // Point()
    constructor(x, y, ...args) {
        this.x = x;
        this.y = y;
    }

    move() {
        this.x++;
        this.y++;
    }

    print() {
        console.log(`x: ${this.x}, y: ${ this.y }`)
    }
}

// const point = new Point(1,2);
// point.print();
// point.move();
// point.print();

class Point3d extends Point {
    constructor(x, y, z) {
        // Point.call(this, x,y)
        super(x, y);
        this.z = z;
    }

    test() {
        console.log('test');
    }
}

const point = new Point3d(1,2,3);
point.move();
point.test();