const { Router } = require('express')
const { getIndex, sendSomething } = require('../controllers')
const router = Router()

router
    .get('/get-hello', getIndex)
    .get('/send-something', sendSomething)


module.exports = router


