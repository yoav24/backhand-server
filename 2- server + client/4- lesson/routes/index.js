const {Router} = require ('express')
const router = Router()
const {update,sendData,updateUser,uptadeUserAge} = require("../controller/index")

router
    .post('/update-user', update)
    .get('/get-users', sendData)
    .post('/getUptadedUsers',updateUser)
    .post('/getUpadatedUserAge',uptadeUserAge)

module.exports = router