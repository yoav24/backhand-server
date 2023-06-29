const sendDataToServer = async (ev) => {
    try {
        ev.preventDefault()
        console.log(ev)
        const shoe = ev.target.elements.shoeName.value
        const img = ev.target.elements.shoeImg.value
        console.log(shoe, img)

        const { data: { shoeArr, message } } = await axios.post("/api/update-user", { shoe, img }) 
        console.log(shoeArr)
        console.log(message)
        render(shoeArr)

    } catch (error) {
        console.log(error)
    }
}
const renderDiv = document.querySelector('.renderDiv')
const render = (arr)=>{
    let html = ''
    arr.forEach(el => {
        html +=`
        <p>your shoe name is ${el.shoe} and the image is<img src="${el.img}" alt="" height="100px" width="75px"></p>
        ` 
    });
    renderDiv.innerHTML = html
}