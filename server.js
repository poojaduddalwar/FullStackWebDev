const express =require('express')
const app = express()
const PORT = 3000

const Logger = (req,res,next)=>{
    console.log(req.method)//req.method tells what type of request is made is it get push or anything else.
    next()
}

app.use(Logger,express.json()) //it is a method and it add middleware in each and every request instead of we adding manualy a middleware in each request

app.get('/',(req,res)=>{
    res.send('get request made')
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('post request made')
})

app.listen(PORT,()=>{
    console.log(`server is up and running at ${PORT}`)
})