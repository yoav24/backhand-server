const { Router } = require('express')
const { update, sendData, deleteUser } = require('../controller')
const router = Router()
// const { update, sendData } = require("../controller/index")

router
    .post('/update-user', update)
    .get('/get-users', sendData)
    .delete('/delete-user', deleteUser)


module.exports = router