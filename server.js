const database = require('./database/db')
const categoryRoutes = require('./routes/categoryRoutes')
const express = require('express')
const app = express()
const PORT = 3001
app.use(express.json())

// console.log(categoryRoutes.stack)
//http://3001/category/routes
app.use('/category',categoryRoutes)

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
