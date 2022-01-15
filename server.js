const jwt = require('jsonwebtoken')

// this is my secret
const SECRET = "TOP_SECRET_DHWBDHWDKBH62IJBJ@"


const data = {
    userId: "this is the userIDbhvbhfdsnvjdn645454"
}

// creating a token 
const token = jwt.sign(data, SECRET, {
    expiresIn: "50s"
})
// in the sign function the third parameter contains the time limit in which the token will expire 

// console.log(token)
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ0aGlzIGlzIHRoZSB1c2VySURiaHZiaGZkc252amRuNjQ1NDU0IiwiaWF0IjoxNjQyMjcyODExLCJleHAiOjE2NDIyNzI4NjF9.IbMaUbq7xDjO0nQ-2YzrE8Ogz8K2pWCRaIc4pj17JYg"

//to verify
const isVerified = jwt.verify(token, SECRET)
console.log(isVerified)
//if the token is verified ....this jwt will return you the verified jwt