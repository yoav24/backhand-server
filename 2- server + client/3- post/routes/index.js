const {Router} = require('express')
const router = Router()
const {sendArr, updateArrOfFriends} = require("../controller/index")



router
    .get("/arrOfriends",sendArr)
    .post("/updaet-arrOfriends",updateArrOfFriends)

module.exports = router