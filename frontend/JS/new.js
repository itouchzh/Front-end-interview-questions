// new 的过程干了什么
// 1. 创建一个空对象
// 2. 空对象的原型指向构造函数的原型
// 3. 修改this指向
// 4. 返回值问题
function Fun(age, name) {
    this.age = age
    this.name = name
}

function create(fn, ...args) {
    // 创建一个空对象
    let obj = {}
    // 2. 将空对象的原型指向构造函数的原型
    Object.setPrototypeOf(obj, fn.prototype)
    // obj.__proto__ = fn.prototype
    // 3. 改变this指向
    let res = fn.apply(obj, args)
    // 4. 对构造函数有返回值的处理
    return res instanceof Object ? res : obj
}
const obj = create(Fun, 23, 'paul')
console.log(obj)

// function newFun(Fn, ...args){
//     let newOjb = {}
//     newOjb.__proto__ = Fn.prototype
//     let res = newOjb.apply(this, args)
//     return res instanceof Object ? res : newOjb
// }

function myNew(Fn, ...args) {
    let newObj = Object.create(Fn.prototype)
    let res = Fn.apply(newObj, args)
    return typeof res == 'object' ? res : newObj
}
