const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 3000

app.options('*', cors())

app.use(express.static(path.join(__dirname, 'views'), {index: '_'}));

app.get('/api/users', (req, res) => {
    res.json([
        {
            name: 'hector',
            age: 10
        },
        {
            name: 'david',
            age: 20
        },
        {
            name: 'natalia',
            age: 30
        }
    ])
})

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})