const getData = async () => {
    const {data} = await axios.get("/send-data-to-cleint")
    render(data)
}

const root = document.querySelector("#root")

const render = (arr) => {
    let html = ""

    arr.forEach(el => {
        html += `
        <div>
            <p>The name is ${el.name}</p>
        </div>
        `
    });
    root.innerHTML = html
    console.log(arr)
}

