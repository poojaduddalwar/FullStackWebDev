const express = require('express')
const PORT = 3000
const app = express()  //instatiate

app.use(express.json())
//app.use allows us to use middleware with each and every express request

//in headers the Content-Type header is used to tell the browser what type of content is there in the body . the application/json tells that the content-type is a json file

app.post('/signup',(req,res)=>{
    console.log(req.body)
    res.send("dadada")
})

app.listen(PORT, () => {
    console.log(`Server running at port :${PORT}`)
})

