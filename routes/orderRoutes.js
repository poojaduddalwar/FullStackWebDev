const express = require('express')
const router = express.Router()
const database = require('../database/db')

/*
ROUTE: http://localhost:3001/order/all
METHOD : GET
*/

router.post('/all', (req, res) => {
    try {
        res.json({
            order: database.orders,
            message: "successfully fetched orders",
            status: 'SUCCESS'
        })
    } catch (error) {
        res.status(200).json({
            orders: [],
            message: error.message,
            status: "FAILED"
        })
    }
})

/*
ROUTE: http://localhost:3001/order/add/
METHOD : POST
*/

router.post('/add/:id', (req, res) => {
    try {
        const { id } = req.params
        if (database.products.find(item => item.id === id)) {
            const newOrder = { name: database.products.item.name, id: id, price: database.products.item.price }
            database.orders.push(newOrder)
            const size = database.orders.length
            const total = 0
            for (var i = 1; i <= size; i++) {
                const price = database.orders.item[i].price
                total += price
            }
        }
        else {
            res.status(200).json({
                orders: [],
                message: error.message,
                status: "FAILED"
            })
        }
        res.json({
            order: database.orders,
            total_cost: total,
            status: 'SUCCESS'
        })
    } catch (error) {
        res.status(200).json({
            orders: [],
            message: error.message,
            status: "FAILED"
        })
    }
})
