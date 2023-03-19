// 实现map方法

// Array.prototype._map = function (fn) {
//     let arr = this
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(fn(arr[i]))
//     }
//     return res
// }

// const res = [1, 2, 3, 4, 5]._map((item) => item * 2)
// console.log(res)

// 实现filter方法

// Array.prototype._filter = function (fn) {
//     let arr = this
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i])) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// const res = [1, 2, 3, 4, 5]._filter((item) => item > 3)
// console.log(res);

// 实现reduce方法：
// Array.prototype._reduce = function (f) {
//     let res = 0
//     for (let i = 0; i < this.length; i++) {
//         res = f(res, this[i])
//     }
//     return res
// }

// objectCreate() 方法
// Object.prototype._objectCreate = function (proto) {
//     function Func() {}
//     Func.prototype = proto
//     return new Func()
// }
