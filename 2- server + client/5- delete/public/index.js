const sendDataToServer = async (ev) => {
    try {
        ev.preventDefault()

        const name = ev.target.elements.userName.value
        const age = ev.target.elements.userAge.value

        const { data: { userArr, message } } = await axios.post("/api/update-user", { name, age }) //the first option

        render(userArr)
        ev.target.reset()
    } catch (error) {
        console.log(error)
    }
}
const inputsValue = document.querySelector('.inputsValues')

const getData = async () => {
    const { data } = await axios.get('/api/get-users')
    console.log(data)
    render(data)
}

const render = (arr) => {
    let html = ''
    if(arr.length > 0) {
        arr.forEach(el => {
            html += `
            <div>
                <p>the name of the user is ${el.name} and his age is ${el.age}</p>
                <!-- <button type="button" class="updateButton" id="updateBtn" onclick="updateUserNameForm()">Update User</button>-->
                <button onclick= "deleteUser('${el.id}')">DELETE USER</button>
            </div>
            `
        });
    } else {
        html = `No User Data`
    }

    inputsValue.innerHTML = html
}

const deleteUser = async (id) => {

    console.log(id)

    const { data } = await axios.delete("/api/delete-user", { data: { id } })
    render(data)
}
