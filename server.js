const database = require('./database/db')
const express = require('express')
const app = express()
const PORT = 3001
app.use(express.json())

app.get("/",(req,res)=>{
    // res.send('hi')
    try {
        // document.getElementById('id')
        console.log(document)
    } catch (error) {
        res.status(200).send(error.message)
    }
})


app.listen(PORT,()=>{
    console.log('Listening to PORT 3001')
})
