const {Router} = require ('express')
const router = Router()
const {update,sendData,updateUser} = require("../controller/index")

router
    .post('/update-user', update)
    .get('/get-users', sendData)
    .post('/getUptadedUsers',updateUser)

module.exports = router