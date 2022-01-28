const mongoose = require('mongoose')

const connection_string = 'mongodb+srv://pooja2202:poojamongo@ecommerce-webdev.h7sep.mongodb.net/test'
/*
! To connect with a database :-

mongoose.connect(connection_string).then(data => {
    console.log("data")
})
? 1)this connect function accepts database connection string as 1st parameter
? 2)mongoose.connect is a asynchronous function . it returns a promise
*/

// to not use .then or the upper method we create a asynchronous function that connects us to mongodb database
const connectDB = async () => {
    try {
        await mongoose.connect(connection_string)
        console.log('CONNECTED TO THE DATABASE')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB