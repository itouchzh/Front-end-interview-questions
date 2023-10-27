
/**
 * []: 匹配括号内的任意一个
 * {} ：匹配多少次
 * {n, m} 匹配至少n次，且不超过次
 */

const a = "abc.com"
let reg = new RegExp('abc')

console.log(reg.test(a));


