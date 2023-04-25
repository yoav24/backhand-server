const express = require('express')
const app = express()
const port = 3000

app.use("/",express.static("main"))
app.use("/hello",express.static("hello"))
app.use("/dogPic",express.static("dog"))
app.use("/catPic",express.static("cat"))
app.use("/numbers",express.static("numbers"))





function multiple(x,y){
    return x * y
}
console.log(multiple(2,3))




app.listen(port, () => {
    console.log(`express running on http://localhost:${port}`)
})