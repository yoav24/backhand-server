const {Router} = require ('express')
const router = Router()
const {update} = require("../controller/controller")

router
    .post('/update-user', update)
    

module.exports = router