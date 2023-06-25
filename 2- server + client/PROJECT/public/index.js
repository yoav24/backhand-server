const sendDataToServer = async (ev) => {
    try {
        ev.preventDefault()

        const name = ev.target.elements.userName.value
        const age = ev.target.elements.userAge.value
        console.log(name, age)

        const { data: { userArr, message } } = await axios.post("/api/update-user", { name, age }) //the first option

        // const { data } = await axios.post("/api/update-user", { name, age }) // the second option
        // const { userArr, message} = data 

        // console.log(data)
        console.log(userArr)
        console.log(message)
        // render(data ) // the old option
        render(userArr)

    } catch (error) {
        console.log(error)
    }
}