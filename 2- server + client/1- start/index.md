                                                        sever
1. after you connected the routes and controller files to server you can create a data that you want to client
its better to save the data in extermal file
2. you can send the data with the res send function
3. before send the data to client (brauswer) we will check the sending of data from server in Thunder
                                                        client
1. to get data from the server we will use axios, to instsall axios we will add: <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> in the head of html file.
2. after we conncted axios we can create js file. in the js file we can a fucnction that will get a data from server 
const getData = async () => {
    const {data} = await axios.get("/send-data-to-cleint")
}
its importan that the function will be async.
its importan that the path in the server and in the client will be the same
