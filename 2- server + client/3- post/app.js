const express = require("express")
const app = express()
const port = 3500

app.use(express.static("public"))
app.use(express.json())
app.use("/",require("./routes/index"))


app.listen(port, () => {
    console.log(`express running on http://localhost:${port}`)
})