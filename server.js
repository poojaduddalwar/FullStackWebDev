const express = require('express')
const PORT = 3000
const app = express()  //instatiate

const isAdmin = (req,res,next) =>{
    if (req.headers.admin === 'true')next()
    else res.send('UNAUTHORISED')
}

app.get('/public', (req, res) => {
    console.log(req.headers)
    res.send("Hi! I'm a Public route")
})

app.get('/private',isAdmin,(req,res)=>{
    res.send("Hi! I'm a admin route")
})


app.listen(PORT, () => {
    console.log(`Server running at port :${PORT}`)
})

