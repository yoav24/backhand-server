const { Router } = require('express')
const { getIndex } = require('../controllers')
const router = Router()

router
    .get('/', getIndex)


module.exports = router


