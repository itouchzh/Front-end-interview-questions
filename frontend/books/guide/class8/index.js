// function vector({ x, y, ...rest }) {
//     console.log(x, y, rest) // 1 2 { name: 'paul', age: 23 }
// }

// vector({ x: 1, y: 2, name: 'paul', age: 23 })

// function fn(a, b, c = '22') {
//     console.log(111)
//     console.log(this);
// }
// // console.log(fn.length)
// const obj = {
//     name: 'paul',
//     age: 23,
// }
// fn.call(obj)
// function F() {}
// let a = new F()
// // console.log(a.constructor === F.prototype.constructor);
// // console.log(F.constructor) // [Function: Function]

// F.prototype.sayHello = function () {
//     console.log('Hello')
// }

// console.log(a.constructor)

class Range {
    constructor(name) {
        this.name = name
    }
    getName() {
        console.log(this.name)
    }
}
