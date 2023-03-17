const express = require('express')

// create applicate object
const app = express()
// create router rules
app.get('/home', (req, res) => {
    res.send('Hello World!!!')
})

app.get('/login', (req, res) => {
    res.send('Hello login!')
})
// route carry params
app.get('/stu/:student', (req, res) => {
    console.log(req.params)
    res.send(req.params.student)
})

app.all('/*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

// middleware
app.use((request, response, next) => {
    console.log('first middleware')
    next()
})
app.use((requeset, response, next) => {
    console.log('second middleware')
})

// 404 pages
app.listen(3000, () => {
    console.log('服务器已经启动')
})
