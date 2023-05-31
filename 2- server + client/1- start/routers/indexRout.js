const { Router } = require('express')
const { sendData } = require('../controllers/indexCont')
const router = Router()

router
    .get("/send-data-to-cleint", sendData)

module.exports = router