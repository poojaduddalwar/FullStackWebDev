// BASIC ECOMMERCE BACKEND

const express = require('express')
const app = express()
const PORT = 3000
const token = "TOP_SECRET"

app.use(express.json())

//Array as Database
let products = [{ name: "iPhone12 Case", price: "999",id:"1" }, { name: "iPhone13 Case", price: "1999",id:"2" }, { name: "iPhone13 Pro Case", price: "1499",id:"3" }]

//Middlewares
const validator = (req, res, next) => {
    const { name, price ,id} = req.body
    if (!name || !price ||!id) res.json({ error: "validation failed" })
    else next()
}

const isAuthorised = (req,res,next)=>{
    if(req.headers.authorisation === token) next()
    else res.json({error: "UNAUTHORISED"})
}

//GET ROUTE - send all the products
//--------------------Public routes------------------------
app.get('/products', (req, res) => {
    //res.send(products) //response is send as a text
    res.json({ products })
})

//---------------------Private routes----------------------------
app.post('/products/add',isAuthorised, validator, (req, res) => {
    const { name, price ,id} = req.body //destructure
    // console.log(req.body.price)

    //1 method to add products
    // const newProduct = {
    //     name: name,
    //     price: price,
    // }
    // products.push(newProduct)

    //2 method to add products
    // const newProduct = {
    //     name,
    //     price,
    // }
    // products.push(newProduct)

    //3 method to add products
    // products.push({
    //     name,   //when your key and value pairs variables are same you can pass one variable instead of name: name, price: price
    //     price,
    // })
    // res.send('product added')

    products.push({
        name,
        price,
        id
    })
    res.send({ products })
})

app.post('/products/delete',(req,res)=>{
    const {id} = req.body
    // res.send(products.id)
    products.forEach(obj => {
        if(id === obj.id){
            products.splice(obj,1)
            res.send({products})
        }
        else {
            // res.send('incorrect id')
            res.send({products})
        }
    });
})

////-----------------------------AUTHENTICATION ROUTE FOR ACCESSING PRIVATE ROUTE--------------------------------

app.post('/auth',(req,res)=>{
    const {email,password} = req.body
    if(email === 'admin@gmail.com' && password === 'password'){
        res.send({token})
    } else{
        res.send({message: 'UNAUTHORISED'})
    }
})

app.listen(PORT, () => {
    console.log(`server is up and running at ${PORT}`)
})