const express = require('express')
const app = express()
const port = 3001

// app.use(express.static("public"))

// app.use('/public', express.static("public"))
// app.use('/pictures', express.static("images"))

// function plus(x, y) {
//     return x + y
// }

// console.log(plus(10, 50))

// function multiple(x,y){
//     return x * y
// }
// console.log(multiple(2,3))

// GET, POST, PATCH, DELETE, PUT - routing

// app.get("/", (req, res) => { //req= request, res = responce
//     try {
//         res.send('<div>Hello world</div>')
//     } catch (error) {
//         console.log(error)
//     }
// })

const routerIndex = require('./routes/index')
app.use('/', routerIndex)
// app.use('/cats', routerIndex)

// const something = {
//     name: "Yoav",
//     age: 12
// }

// const { name, age } = something // something.name, something.age
// console.log(name, age)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})