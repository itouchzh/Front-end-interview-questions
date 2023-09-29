// 循环
// const arr = [1, 2, 3, 4, 5]
// const obj = {
//     name: 'paul',
//     age: 23,
// }

// const map = new Map()
// map.set('name', 'paul')
// map.set('age', 23)

// // 1. map
// const newArr = arr.map((item,index) => item)
// // console.log(newArr);
// // console.log(newArr === arr)

// const newArra = arr.forEach(item => {
//     // console.log(item)
// })

// console.log(newArra)
// 遍历可枚举
// for (let i in arr) {
//     console.log(arr[i])
// }
// for (let i in obj) {
//     console.log(obj[i])
// }

// for of 可迭代
// console.log(arr)
// for (let i of arr) {
//     console.log(i)
// }

// for (let i of arr) {
//     console.log(i)
// }

// ??

// ?. 可选链

// const obj = {
//     name:'paul'
// }
// console.log(obj.name)
// console.log(obj?.value)

// const timer = setTimeout(() => {
//     console.log(1)
// }, 1000)

// clearTimeout(timer)

// const timer = setInterval(() => {
//     console.log(1)
// }, 1000)

// setTimeout(() => {
//     clearInterval(timer)
// }, 5001)

requestAnimationFrame(() => {
    console.log(1)
})
