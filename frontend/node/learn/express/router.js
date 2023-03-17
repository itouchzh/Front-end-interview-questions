const router = require('./routes/homeRouter.js')
const express = require('express')
const app = express()

app.use(router)
app.listen(3000, () => {
    console.log('server is running...')
})
