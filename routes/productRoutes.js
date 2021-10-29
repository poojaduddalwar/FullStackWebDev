const express = require('express')
const router = express.Router()
const database = require('../database/db')
const { v4: uuidv4 } = require('uuid')


/*
ROUTE: http://localhost:3001/products/all
METHOD : GET
*/

router.get('/all', (req, res) => {
    try {
        res.status(200).json({
            products: database.products,
            message: 'successfully fetched products',
            status: 'SUCCESS'
        })
    } catch (error) {
        res.status(200).json({
            products: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
ROUTE: http://localhost:3001/products/add
METHOD : POST
*/


router.post('/add', (req, res) => {
    const { name, price, category_name } = req.body

    if (!database.categories.find(item => item.name === category_name)) {
        //create a category if it doesn't already exixts
        let newCategory = { name: category_name, id: uuidv4() }
        database.categories.push(newCategory)
        //create a product & add it
        const newProduct = { id: uuidv4(), name, price, category: category_name }
        database.products.push(newProduct)
    }
    else {
        const newProduct = {
            id: uuidv4(),
            name, price, category: category_name
        }
        let include = database.products.find(item => item.name === name)
        if (!include) {
            database.products.push(newProduct)
        }
        else {
            console.log("Already exixts")
        }
    }
    try {
        res.status(200).json({
            products: database.products,
            message: 'successfully added products',
            status: 'SUCCESS'
        })
    } catch (error) {
        res.status(200).json({
            products: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
ROUTE: http://localhost:3001/products/delete/:id
METHOD : DELETE
*/

router.delete('/delete/:id', (req, res) => {
    try {
        const { id } = req.params

        const newProducts = database.products.filter(item => item.id !== id)
        database.products = newProducts
        console.log(products)

        res.status(200).json({
            products: database.products,
            message: 'successfully deleted products',
            status: 'SUCCESS'
        })
    } catch (error) {
        res.status(200).json({
            products: [],
            message: error.message,
            status: "FAILED"
        })
    }

})

/*
ROUTE: http://localhost:3001/products/update/:id
METHOD : PUT
*/

router.put('/update/:id', (req, res) => {
    try {
        const { id } = req.params
        const element = database.products.find(item => item.id === id)
        const index = database.products.indexOf(element)
        const { name } = req.body
        database.products[index].name = name

        res.status(200).json({
            products: database.products,
            message: 'successfully updated products',
            status: 'SUCCESS'
        })
    } catch (error) {
        res.status(200).json({
            products: [],
            message: error.message,
            status: "FAILED"
        })
    }

})
module.exports = router