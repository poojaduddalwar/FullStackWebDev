const express = require('express')
const connectDB = require('./mongoDB/connectDB')
const { User } = require('./mongoDB/models/User')

// console.log(mongoose)

connectDB()

const app = express()

app.use(express.json())


//to get the user from the collection
app.get('/getUser/:email', async (req, res) => {
    try {
        const { email } = req.params
        const user = await User.findOne({ email })
        //findOne function means find one user from the database and it accepts a parameter which is the field name, for eg. like if we want a user with the email , so if the email matches we'll have the user 

        res.send(user)
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

app.post('/addUser', async (req, res) => {
    try {
        //  console.log(req.body)
        //console logs the fields inside the body section

        const user = new User(req.body) //creates a new user /field / document in the database and whenever you create new field in the database an id is automatically is assigned by mongoDB
        console.log(user)

        await user.save() //this makes sure that the user has been created and save to the database

        res.send('request received')
    } catch (error) {
        console.log(error)
        res.send(error.message)
    }
})

app.listen(3003, (req, res) => {
    console.log('serevr listning at PORT 3003')
})