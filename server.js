const data = [{name: "pooja"},{name:'nisha'},{name: "sandhya"},{name:"girish"}]
//creating server using express

const express = require('express')
const app = express()

//creating route
app.get('/',(request,response)=> {
    // console.log(request.url)
    response.send("this is a response")
})

app.get('/getnames',(request,response)=>{
    response.send(data)
})
app.get('/signup',(request,response)=>{
    response.send("this is signup")
})
//to make the server listen to requests you have to define routes in express . / route is the homepage route
app.listen(3000,()=>{
    console.log("Server listening at port : 3000")
})   