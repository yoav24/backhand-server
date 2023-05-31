const {Router} = require ('express')
const {petsNames,myHobbies,names} = require('../controller/indexcontrol')
const router = Router()


router  
    .get("/show-pets-name-arr",petsNames )
    .get("/show-Hobbies-arr",myHobbies )
    .get("/show-name-arr",names )

module.exports = router