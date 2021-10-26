const express = require('express')
const router = express.Router()
const database = require('../database/db')
const {v4: uuidv4} = require('uuid') 


/*
ROUTE: http://localhost:3001/category/all
METHOD : GET
*/

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
    }
})

/*
ROUTE: http://localhost:3001/category/add 
METHOD : POST
*/

router.post('/add',(req,res)=>{
    const {Name} = req.body
        let newCategory = {
            Name,
            id : uuidv4()
        }

    try {
        let include = database.categories.find(item => item.Name === Name)
        //find expects a callback function and in that function u return the condition if the return condition is true it return the element if it is false it continues.
        if(!include) database.categories.push(newCategory) 
        else console.log('Already exixts')
        res.status(200).json({
            categories: database.categories,
            message: 'successfully added category',
            status: 'SUCCESS'
        }) 
    } catch (error) {
        res.status(200).json({
            categories:[],
            message:error.message,
            status:"FAILED"
        })
    }
})

/*
ROUTE: http://localhost:3001/category/delete 
METHOD : DELETE
*/

router.delete('/delete/:id',(req,res)=>{   //if add the colon(:)the route becomes dynamic so after the colon the id you can add any thing and through the req.params u can get access to it
    try {
        // const {id} = req.body
        const {id} = req.params //here we have to send the id as a query parameter
        // let element = database.categories.find(item => item.id === id)
        // const index = database.categories.indexOf(element)
        // database.categories.splice(index,1)

        const newcategories = database.categories.filter(item => item.id !== id)
        database.categories = newcategories
        console.log(newcategories)
        res.status(200).json({
            categories: database.categories,
            message: "Successfully deleted the category",
            status: "SUCCESS"
        })
    } catch (error) {
        console.log(error)
        res.json({
            categories:[],
            message: error.message,
            status: "FAILED"
        })
    }
})

module.exports = router