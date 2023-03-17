// Buffer
// 创建Buffer
let buf_1 = Buffer.alloc(10)
console.log(buf_1)

// 通过字符串创建Buffer
let buf_2 = Buffer.from('Hello World')
// 通过数组创建Buffer
let buf_3 = Buffer.from([1, 2, 3])
console.log(buf_2, buf_3)

// Buffer与字符串的相互转化,会输出Ascii码
let buf_4 = Buffer.from([97, 2, 3, 4, 5])
console.log(buf_4.toString())

// 2. Buffer的读和写
// 对Buffer进行更改
buf_4[0] = 100
console.log(buf_4.toString());


// -------------------------------------

