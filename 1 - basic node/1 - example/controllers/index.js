exports.getIndex = (req, res) => { //req= request, res = responce
    try {
        res.send('<div>Hello world</div>')
    } catch (error) {
        console.log(error)
    }
}
exports.sendSomething = (req, res) => { //req= request, res = responce
    try {
        res.send('<div>Something</div>')
    } catch (error) {
        console.log(error)
    } 
}
