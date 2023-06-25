const { shoeArr } = require("../data/index")
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