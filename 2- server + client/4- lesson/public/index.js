const updateForm = document.querySelector(".updateForm")

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
const inputsValue = document.querySelector('.inputsValues')

const getData = async () => {
    const { data } = await axios.get('/api/get-users')
    render(data)
    console.log(data)
}


const render = (arr) => {
    let html = ''
    arr.forEach(el => {
        html += `
        <div>
            <p>the name of the user is ${el.name} and his age is ${el.age}</p>
            <!-- <button type="button" class="updateButton" id="updateBtn" onclick="updateUserNameForm()">Update User</button>-->
            <form onsubmit="updateUserName(event, '${el.id}')" class="updateForm" > <!--id="..."-->
                <input type="text" name="userName" value="${el.name}"/>
                <button type="submit">Update User Name</button>
            </form>
            <form onsubmit="updateUserAge(event, '${el.id}')" class="updateAge" > 
                <input type="text" name="userAge" value="${el.age}"/>
                <button type="submit">Update User Age</button>
            </form>
        </div>
        `
    });
    //  console.log(html)
    inputsValue.innerHTML = html
}

// const updateUserNameForm = () => {
//     console.log(`wok`)
//     updateForm.style.display = "block"
// }

const updateUserName = async (ev, id) => {
    ev.preventDefault()
    const userName = ev.target.elements.userName.value
    const { data } = await axios.post("/api/getUptadedUsers", { userName, id })
    render(data)
}
const updateUserAge =async (ev, id) =>{
    ev.preventDefault()
    const userAge = ev.target.elements.userAge.value
    const {data}  = await axios.post("api/getUpadatedUserAge",{userAge, id})
    render(data)
}
/*
--HW--
1. Create a render funtion
2. Through render funtion show each user, 
next to each user, create a button that will open new form.
3. Create a function that can update the exist user.
4. Need to include id for each user
*/

/*
--HW2--
1. Create a button that incldes id of user.
2. Create a function that will remove a user from the list (by id)

שלבים: 
1. לקבל את המידע מהסרבר (כבר בוצע)
2. בלחיצה על הכפתור נשלח 
ID 
של היוזר לסרבר
3. לקבל את ה
ID
בסרב (חשוב לוודא שהמידע מגיע כמו שצריך)
4. לעשות מניפולציה של מחיקה של היוזר מהמערך
5. לשלוח את המעדך המעודכן לקליינט
6. להציג את המידע המעודכן בקליינט דרך פונקציית רנדר
*/