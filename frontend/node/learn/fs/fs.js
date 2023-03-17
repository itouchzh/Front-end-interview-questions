// 对文件进行操作

const fs = require('fs')

// 异步写入

fs.writeFileSync('./a.txt', 'Hello World', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Write Successful')
})

// 追加写

fs.appendFile('./a.txt', '追加', (err) => {
    if (err) throw err
    console.log(' add Success')
})

// 流方式写入

let ws = fs.createWriteStream('./a.txt')
ws.write(' 流写入 ')
ws.end()

// 文件读取： 异步读取， 流式读取
// 1. 异步读取
fs.readFile('./a.txt', (err, data) => {
    if (err) throw err
    console.log('异步读取到的数据', data)
})

// 2. 流式读取
let rs = fs.createReadStream('./a.txt')
rs.on('data', (data) => {
    console.log('流读取数据', data)
})
rs.on('end', () => {
    console.log('读取完成')
    rs.close()
})
