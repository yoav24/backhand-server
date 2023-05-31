const showArr = document.querySelector(".showArr")
// const user = prompt("")

const getData = async() =>{
    const {data}= await axios.get('/arrOfriends')
    render(data)
    console.log(data)
}


const render = (arr)=>{
    let html= ''
     arr.forEach(el => {
        html+=`
        <div>
        <p>the name of the friend is ${el.name} and his age is ${el.age}</p>
        </div>
        `
     });
    //  console.log(html)
     showArr.innerHTML = html
}

const updateArr = async () => {
    const nameUser = "Yoav"
    const ageUser =11
    const {data}= await axios.post('/updaet-arrOfriends', {nameUser, ageUser})
    console.log(data)
    render(data)
}

//use prompt to add new friend to the list
