const express = require("express")
const app = express()
const port = 3500







app.listen(port, () => {
    console.log(`express running on http://localhost:${port}`)
})