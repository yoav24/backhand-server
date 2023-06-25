const {Router} = require ('express')
const router = Router()
const {update} = require("../controller/index")

router
    .post('/update-user', update)
    

module.exports = router