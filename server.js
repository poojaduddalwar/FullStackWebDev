const express = require('express')
const app = express()
const PORT = 3001

app.get('/products/case')
app.get('/products/protection')
app.get('/products/bands')

// instead of the abouve 3 seperate routes we can create the below one route 
app.get('/products/:categories',(req,res)=>{    //dynamic route
    if(req.params.categories == 'iPhone'){
        res.send('its an iphone page')
    }
    console.log(req.params)
    // res.send('PING')
})

app.listen(3001,()=>{
    console.log('Listening to PORT 3001')
})