exports.getIndex = (req, res) => { //req= request, res = responce
    try {
        res.send('<div>Hello world</div>')
    } catch (error) {
        console.log(error)
    }
}
exports.checkrouter = (req, res) => { 
    try {
        res.send('<div>checkrouter</div>')
    } catch (error) {
        console.log(error)
    }
}
exports.check = (req,res) => {
    try{
        res.send('<div>👍</div>')
    }catch (error){
        console.log(error)
    }
}