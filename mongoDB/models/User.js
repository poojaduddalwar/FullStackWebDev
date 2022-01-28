const mongoose = require('mongoose')

//creating blueprint / schema for the user
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true, //this makes sure that no two users can have same email
        required: true
    },
    password: String
})

module.exports.User = mongoose.model("User", UserSchema)

// mongoose.Schema accepts parameter which are going to be object and that object contains key - value pairs .
// the key is the field that you want and its value is the type like what type is the field going to be 



/*
Schema is the blue print but you need to be able to write to the database , to add to the collection , to remove something from the collection , to update the collection ,etc for that we need to create a model .

you can think a model as a additional layer on the schema.
modal is what that allows the blueprint to be converted to the actual document 
*/