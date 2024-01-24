const express = require('express')
const config = require('./config')
const mysql = require('mysql')
const app = express()
const pool = mysql.createPool(config.mysql)

// pool.getConnection((err, connection) => {
//     if (err) {
//         console.log(err)
//     }
//     connection.query('select * from users', (err, rows) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log(rows)
//         connection.release() // Release the connection when done
//     })
// })

app.get('/getUsers', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting database connection:', err)
            return res.status(500).json({ error: 'Internal Server Error' })
        }

        connection.query('SELECT * FROM users', (err, rows) => {
            connection.release() // Release the connection when done

            if (err) {
                console.error('Error executing database query:', err)
                return res.status(500).json({ error: 'Internal Server Error' })
            }

            console.log(rows)
            res.status(200).json(rows) // Send the response with the retrieved data
        })
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
