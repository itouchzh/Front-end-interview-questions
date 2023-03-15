// const arr1 = [1, 2, 3, 4, 5]
// console.log(arr1.copyWithin(0, 3, 4)) // 4,2,3,4,5

// const arr = [1, 2, 3, 4, 5]
// const res = arr.every((v, i)=> v > 0)
// console.log(res) // true

// const arr = [1, [2, 3, 4], [1, [2, [3, [4, 5]]]]]
// console.log(arr.flat(Infinity))
// const arr = [1, 2, 3, 4, 5]
// arr.map((value, index)=>{
//     console.log(value,index)
// })
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.join(''))
// const arr = [1, 2, 3, 4, 5]
// let res = arr.reduce((sum, value)=>{
//     return sum += value
// },0)
// console.log(res)//15
// const arr = [1, 2, 3, 4, 5]
// let res = arr.splice(0)
// console.log(arr, res)//[ 'paul', 3, 4, 5 ] [ 1, 2 ]
// let arr = Array(5).fill(0)
// for(let i = 0; i < arr.length; i++){
//     arr[i] = new Array(2).fill(0)
// }
// console.log(arr)//[ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
// const arr = [1, 2, 3]
// while(arr){
//     console.log(arr)
//     arr.shift()
// }
const [m, n] = [3, 5]
let arr = new Array(m).fill(0).map(()=>new Array(n).fill(0))
console.log(arr) //[ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ] ]