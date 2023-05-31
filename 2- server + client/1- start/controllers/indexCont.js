const { arrOfNames } = require("../data/names")

exports.sendData = (req, res) => {
    res.send(arrOfNames)

}