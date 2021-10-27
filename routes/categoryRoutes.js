const express = require('express')
const router = express.Router()
const database = require('../database/db')
const { v4: uuidv4 } = require('uuid')


/*
ROUTE: http://localhost:3001/category/all
METHOD : GET
*/

router.get('/all', (req, res) => {
    try {
        res.status(200).json({
            categories: database.categories,
            message: 'successfully fetched categories',
            status: 'SUCCESS'
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
ROUTE: http://localhost:3001/category/add 
METHOD : POST
*/

router.post('/add', (req, res) => {
    const { Name } = req.body
    let newCategory = {
        Name,
        id: uuidv4()
    }

    try {
        let include = database.categories.find(item => item.Name === Name)
        if (!include) database.categories.push(newCategory)
        else console.log('Already exixts')
        res.status(200).json({
            categories: database.categories,
            message: 'successfully added category',
            status: 'SUCCESS'
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
ROUTE: http://localhost:3001/category/delete/:id 
METHOD : DELETE
*/

router.delete('/delete/:id', (req, res) => {  
    try {
        const { id } = req.params 

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
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
ROUTE: http://localhost:3001/category/update/:id 
METHOD : PUT
*/

router.put('/update/:id',(req,res)=>{
    try {
        const {id} = req.params
        let element = database.categories.find(item => item.id === id)
        const index = database.categories.indexOf(element)
        console.log(index)
        const {Name} = req.body
        database.categories[index].Name = Name
        res.json({
            categories: database.categories,
            message: "Successfully updated the category",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

module.exports = router