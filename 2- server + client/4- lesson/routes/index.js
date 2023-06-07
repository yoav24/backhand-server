const {Router} = require ('express')
const router = Router()
const {update,sendData} = require("../controller/index")

router
    .post('/update-user', update)
    .get('/', sendData)

module.exports = router