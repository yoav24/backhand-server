const { Router } = require('express')
const { getIndex,  } = require('../controllers')
const router = Router()

router
    .get('/get-hello', getIndex)


module.exports = router

