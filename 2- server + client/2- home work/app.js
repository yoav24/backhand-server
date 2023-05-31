const express = require("express")
const app = express()
const port = 3240

app.use(express.static("public"))
app.use("/", require("./routes/indexrouter"))


app.listen(port, () => {
    console.log(`express running on http://localhost:${port}`)
})