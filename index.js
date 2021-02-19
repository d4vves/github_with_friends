const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Nick is cool, but so is Dave.')
})

app.listen(3000, () => console.log('Nick is Cool, but so is Dave.') )