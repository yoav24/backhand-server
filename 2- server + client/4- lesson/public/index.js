const sendDataToServer = async (ev) => {
    try {
        ev.preventDefault()

        const name = ev.target.elements.userName.value
        const age = ev.target.elements.userAge.value
        console.log(name, age)

        const { data } = await axios.post("/api/update-user", { name, age })
        
        console.log(data)
        // render(data)
    } catch (error) {
        console.log(error)
    }
}

 
/*
--HW--
1. Create a render funtion
2. Through render funtion show each user, 
next to each user, create a button that will open new form.
3. Create a function that can update the exist user.
4. Need to indude id for each user
*/