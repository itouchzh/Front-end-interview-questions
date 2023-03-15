// 字符串转换为数组的方法
// // 第一种
// const str = 'abcdkk'
// let arr1 = Array.from(str)
// console.log(arr1)
// // 第二种
// let arr2 = [...str]
// console.log(arr2)
// // 第三种
// let arr3 = str.split('')
// console.log(arr3)

// const arr = [1, 2, 4, 5]
// const arr4 = arr.getList()
// console.log(arr4)

// const str = '1234f'
// for(let i = 0; i<str.length;i++){
//     console.log(String.fromCharCode((str[i].charCodeAt()+1)))
// // }
// // 字符转ascii码
// const a = 'a'
// let aa = a.charCodeAt()
// console.log(aa) // 97
// // ascii码转字符
// let b = 97
// let bb = String.fromCharCode(b)
// console.log(bb)  //'a'

// const str = 'abc'
// str[0] = 'b'
// console.log(str)//abc

// const str = 'abcdefg'
// const substr = 'fg'
// console.log(str.endsWith(substr)) // true

// const str = 'abc'
// let a = str.repeat(2)
// console.log(a) // 'abcabc'

// const str = 'abcbefg'
// let a = str.slice(1, 3)
// console.log(a)
// let b = str.substring(1, 3)
// console.log(b)
let [arr1 ,arr2] = [[1, 2, 3], [1, 3, 2]]
console.log(arr1.toString() == arr2.toString())
