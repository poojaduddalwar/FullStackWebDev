const database = require('./database/db')
const express = require('express')
const app = express()
// database.products.push('iphone')
// console.log(database)
const PORT = 3001
app.use(express.json())


app.listen(3001,()=>{
    console.log('Listening to PORT 3001')
})
