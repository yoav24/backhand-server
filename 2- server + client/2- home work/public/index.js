const getData = async() => {
    const{data} = await axios.get('/show-pets-name-arr')
    render(data)
}
const getHobbiesData = async() => {
    const{data} = await axios.get('/show-Hobbies-arr')
    render(data)
}
const getNameData = async() => {
    const{data} = await axios.get('/show-name-arr')
    render(data)
}
const showArr = document.querySelector("#showArr")
const render = (arr) =>{
    let html=""
    arr.forEach(el => {
        html+=`
        <div>
        <p>the name is ${el.name}</p>
        </div>
        `
    });
    showArr.innerHTML += html
    console.log(arr)
}
const hobbies = (arr)=>{
    console.log(arr)
}
const names = (arr)=>{
    console.log(arr)
}