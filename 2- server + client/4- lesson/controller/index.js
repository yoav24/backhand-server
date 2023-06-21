const { userArr } = require("../data/index")
const { uid } = require("../helpers/indexHelper")

exports.update = (req, res) => {
    console.log(req.body)
    const { name, age } = req.body

    userArr.push({ id: uid(), name, age })

    // console.log(userArr)
    // res.send({userArr, message: "...."})
    // res.send(userArr)
    res.send({ userArr, message: "User Saved" })
}

exports.sendData = (req, res) => {
    try {
        res.send(userArr)
    } catch (error) {
        console.log(error)
    }
}

exports.updateUser = (req, res) => {
    try {
        const { userName, id } = req.body
        console.log(id)
 
        const index = userArr.findIndex(user => user.id == id)
        console.log(index)
        userArr[index].name = userName


        res.send(userArr)
    } catch (error) {
        console.log(error)
    }
}
exports.uptadeUserAge = (req,res) => {
    try {
        const { userAge , id} = req.body
        console.log(id)

        const index = userArr.findIndex(user => user.id == id)
        console.log(index)
        userArr[index].age = userAge

        res.send(userArr)
    } catch (error) {
        console.log(error)
    }
}