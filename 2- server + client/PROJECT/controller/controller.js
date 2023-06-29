const { shoeArr } = require("../data/data")
const { uid } = require("../helper/helper")


exports.update = (req, res) => {
    console.log(req.body)
    const { shoe, img } = req.body

    shoeArr.push({ id: uid(), shoe, img })

    res.send({ shoeArr, message: "User Saved" })
}