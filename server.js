const express = require('express')
//require gives only the module.exports of the module which is express
const PORT = 3000
const app = express()  //instatiate

// console.log(express)
//1. post request from chrome doesn't work- because browser only sends get request

app.get('/',(req,res)=>{
    console.log(req.headers)
    res.send('get')
})

app.post('/',(req,res) =>{
    res.send('post')
})

//2. Different kind of request- with express using thunderclient works well.

app.put('/',(req,res) =>{
    res.send('put')
})

app.delete('/',(req,res) =>{
    res.send('delete')
})

app.patch('/',(req,res) =>{
    res.send('patch')
})


app.listen(PORT,() => {
    console.log(`Server running at port :${PORT}`)
})

