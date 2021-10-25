const express = require('express')
const router = express.Router()
const database = require('../database/db')
const {v4: uuidv4} = require('uuid') //this package creates ids for us.

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

//to run the routers

router.post('/add',(req,res)=>{
    try {
        const {Name} = req.body
        let newCategory = {
            Name,
            id : uuidv4()
        }
        database.categories.push(newCategory)

        res.status(200).json({
            categories: categories,
            message: 'successfully fetched category1',
            status: 'SUCCESS1'
        })
    } catch (error) {
        res.status(200).json({
            categories:[],
            message:error.message,
            status:"FAILED1"
        })
    }
})

module.exports = router

//router is an express object that allows us to create routes 