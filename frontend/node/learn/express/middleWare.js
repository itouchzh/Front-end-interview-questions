const express = require('express')

// create applicate object
const app = express()


// middleware
const middleware = (req, res, next) => {
    console.log(req.query)
    if (req.query.id === '1') {
        next()
    } else {
        res.send('配置错误')
    }
}



// create router rules
app.get('/home', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/login', middleware, (req, res) => {
    res.send('Hello login!')
})

app.all('/*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})



// 404 pages
app.listen(3000, () => {
    console.log('服务器已经启动')
})
