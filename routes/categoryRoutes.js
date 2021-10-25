const express = require('express')
const router = express.Router()
const database = require('../database/db')

router.get('/all',(req,res)=>{
    try {
        res.status(200).json({
            categories: database.categories,
            message: 'successfully fetched categories',
            status: 'SUCCESS'
        })
        
    } catch (error) {
        res.status(200).json({
            categories:[],
            message:error.message,
            status:"FAILED"
        })

        //res.send(error.message)
        //if we send the above line instead of the res.json part our front end will crash
    }
})
