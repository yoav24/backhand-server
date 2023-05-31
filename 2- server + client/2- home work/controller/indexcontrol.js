const {petsNamesArr} = require("../data/petsNames")
const {hobbiesArr} = require("../data/hobbies")
const {namesArr} = require("../data/names")
exports.petsNames = (req,res ) => {
    res.send(petsNamesArr) 
}
exports.myHobbies = (req,res ) => {
    res.send(hobbiesArr) 
}
exports.names = (req,res ) => {
    res.send(namesArr) 
}
