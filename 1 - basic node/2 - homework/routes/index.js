const { Router } = require('express')
const { getIndex, check } = require('../controllers')
const router = Router()

router
    .get('/get-hello', getIndex)
    .get('/check', check)


module.exports = router

