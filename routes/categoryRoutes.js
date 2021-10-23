const express = require('express')
const router = express.Router()
const database = require('../database/db')

router.get('/all',(req,res)=>{
    try {
        res.json({
            categories: database.categories,
            message: 'successfull fetched categories',
            status: 'SUCCESS'
        })
        
    } catch (error) {
        res.json({
            categories:[],
            message:error.message,
            status:"FAILED"
        })
    }
})


// whatever you want to execute u write in try block and if it fails the catch block will get executed
//throw keyword directly throws the error it will not run try catch block