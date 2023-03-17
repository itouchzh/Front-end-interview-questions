const path = require('path')

// 获取路径分割符
console.log(path.sep)
// 拼接绝对路径
// __dirname 代表当前路径
console.log(path.resolve(__dirname, 'test'))

// 解析路径，得到对象
let pathName = 'D:/parogram/node'
console.log(path.parse(pathName))

// {
//     root: 'D:/',
//     dir: 'D:/parogram',
//     base: 'node',
//     ext: '',
//     name: 'node'
//   }

// 获得基础路径
console.log(path.basename(pathName))

//获得路径名称
console.log(path.dirname(pathName))

// 获得扩展名
console.log(path.extname(pathName))
