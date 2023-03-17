const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    console.log('this is login page!')
    res.send("this is login page")
})

module.exports = router
