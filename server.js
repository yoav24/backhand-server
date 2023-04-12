const express = require('express')
const app = express()
const port = 3000

function plus(x, y) {
    return x + y
}

console.log(plus(10, 50))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})