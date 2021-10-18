const express = require('express')
//require gives only the module.exports of the module which is express
const PORT = 3000
const app = express()  //instatiate


// 1. Headers of request contain additional info about request.

app.get('/', (req, res) => {
    console.log(req.headers)
    res.send("GET")
})

//2. Basic security to check from where(user-agent) request is coming?
// If a request is legit that means get request which we have allowed - that means from thunderclient but not chrome(browsers)
app.get('/', (req, res) => {
    console.log(req.headers['user-agent'])
    if (req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") res.send("GET")
    else res.send("BLOCKED")
})

//3. Middleware - a more logical way for security check.
// checks if request is from thunder client if yes moves it ahead to callback otherwise show blocked.
// the middleware function which here is verify. so when a request comes in this middleware runs and here next() moves the request to the callback if the user agent is thunder client 

const verify = (req, res, next) => {
    if (req.headers['user-agent'] === "Thunder Client (https://www.thunderclient.io)") next()
    else res.send("BLOCKED")
}

app.get('/', verify, (req, res) => {
    //console.log(req)
    res.send("Hi!")
})


app.listen(PORT, () => {
    console.log(`Server running at port :${PORT}`)
})

