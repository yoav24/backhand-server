const express = require ("express")
const app = express()
const port = 3002

app.use(express.static("public")) //express.static("client")

app.use("/", require("./routers/indexRout"))

app.listen(port, () => {
    console.log(`express running on http://localhost:${port}`)
})