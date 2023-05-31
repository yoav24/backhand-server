const {userArr} = require ("../data/index")

exports.update = (req, res) => {
    console.log(req.body)
    const {name, age} = req.body

    userArr.push({name, age})

    console.log(userArr)
    res.send(userArr)

}