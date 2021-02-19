const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Nick is cool')
})

app.listen(3000, () => console.log('Nick is Cool') )