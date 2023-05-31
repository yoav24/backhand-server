const {arrfriends} = require('../data/index')

exports.sendArr = (req,res)=>{
    try {
        res.send(arrfriends)
    } catch (error) {
        console.log(error)
    }
}

exports.updateArrOfFriends = (req, res) => {
    try {
        //1. req.body
        //2. req.params
        //3. req.query

        // console.log(req)
        // console.log(req.body)
        // const nameUser = req.body
        // console.log(nameUser.nameUser)
        const {nameUser, ageUser}  = req.body // const nameUser = req.body nameUser.nameUser

        arrfriends.push({name: nameUser, age: ageUser})

        console.log(arrfriends)

        res.send(arrfriends)

        //filter + map



    } catch (error) {
        console.log(error)
        // console.error(error)
    }
}