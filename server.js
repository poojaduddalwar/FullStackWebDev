const database = require('./database/db')
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
const express = require('express')
const app = express()
const PORT = 3001
app.use(express.json())

app.use('/category', categoryRoutes)
app.use('/products', productRoutes)


// app.get("/",(req,res)=>{
//     try {
//         console.log(document)
//     } catch (error) {
//         res.status(200).send(error.message)
//     }
// })


app.listen(PORT, () => {
    console.log('Listening to PORT 3001')
})
