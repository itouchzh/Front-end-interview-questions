// 原始数据类型
// number string null undefined boolean bigInt Symbol
// 引用数据类型 object array function

// const a = [1, 2, 3]
// delete a[2]
// console.log(2 in a)
// console.log(a)

// const obj = {
//     name: 'paul',
//     age: 23,
// }

// for (const [key, value] of Object.entries(obj)) {
//     console.log(key, value)
// }

// const map = new Map()
// map.set('name', 'paul')
// for (const [key, value] of map) {
//     console.log(key, value)
// }

// console.log(fn);
// if (true) {
//     function fn() { }
//     fn = 5
// }
// console.log(fn);

const obj = {
    name: 'paul',
    age: 23,
    getName: function () {
        console.log('my name is paul')
    },
}

// console.log('name' in obj) // true
// console.log('toString' in obj) // true

// console.log(obj.hasOwnProperty('name')) // true
// console.log(obj.hasOwnProperty('toString')) // false

// const obj1 = {}
// Object.assign(obj1, obj)
// console.log(obj1);
// obj1.getName()

// const date = new Date()
// console.log(date);
// console.log(typeof date);
// const jDate = JSON.stringify(date)
// const pDate = JSON.parse(jDate)
// console.log(jDate, pDate);
// console.log(typeof pDate);

// const arr1 = [1, 2, 3, 4]
// const arr2 = arr1
// arr2[1] = 100
// console.log(arr1)
// let a = new Array(4, 5, 6, 6, 7)
// console.log(a)
let a = [1, 2, 3, 4, 5]
let b = Array.from(a, (value, key) => {
    console.log(value, key)
    return key + value
})
console.log(b);