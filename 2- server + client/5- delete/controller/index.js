const { userArr } = require("../data/index")
const { uid } = require("../helpers/indexHelper")

exports.update = (req, res) => {
    try {
        console.log(req.body)
        const { name, age } = req.body

        userArr.push({ id: uid(), name, age })

        res.send({ userArr, message: "User Saved" })
    } catch (error) {
        console.log(error)
    }
}

exports.sendData = (req, res) => {
    try {
        res.send(userArr)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteUser = (req, res) => {
    try {
        const { id } = req.body
        // console.log(id)
        // console.log(` before userArr`)
        // console.log(userArr)
        
        const index = userArr.findIndex(user => user.id == id)
        userArr.splice(index, 1)
        
        // console.log(` after userArr`)
        // console.log(userArr)
        

        res.send(userArr)
    } catch (error) {
        console.log(error)
    }
}