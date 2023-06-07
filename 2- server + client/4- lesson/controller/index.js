const {userArr} = require ("../data/index")

exports.update = (req, res) => {
    console.log(req.body)
    const {name, age} = req.body

    userArr.push({name, age})

    console.log(userArr)
    res.send(userArr)

}
exports.sendData = (req,res)=>{
    try {
        res.send(userArr)
    } catch (error) {
        console.log(error)
    }
}
exports.updateUser = (req,res)=>{
    try {
        const {userName, id}= req.body
        // console.log(userName)

    // update the user name by find the user via id

        // res.send(userArr)
        res.send({userName, id})
    } catch (error) {
        console.log(error)
    }
}