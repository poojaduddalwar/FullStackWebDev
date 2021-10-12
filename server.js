// console.log('a message')
// console.log('another message')

// script is a command that executes another command
// to run the scripts (command) inside package.json file use npm run start(name of the script) or npm start(name of the script)

//nodemon is a utility which monitor your file for changes, as soon as it sees any change it refresh  and it can run only one file

//http module
const http = require('http')
const fs = require('fs')
const Path = require('path')
// console.log(http)

const server = http.createServer((request,response)=> {
    // console.log(request.headers)
    // console.log(request.url)
    // console.log(request.method) //will log the type of request being made / method i.e Get or post or patch ...etc

    //steps for sending response using http module:
    //1. specify type of response (text response or a http response..etc)
    //2. write to the response
    //3. send it
    // const path = request.url
    // response.write(`you made a request to : ${url}`)//method used to write to a response
    // response.write(`<h1>I'm a heading</h1>`)
    // const markup = fs.readFileSync(Path.resolve('./index.html'))
    // response.write(markup)
    // response.end()


    const {url} = request
    if (url == '/login'){ //login and signup are routes
        response.write('<h1>LOGIN</h1>')
        response.end()
    }
    if (url == '/signup'){
        response.write('<h1>SIGNUP</h1>')
        response.end()
    }
})
// headers are the extra information that the requests contains
// createServer is method which return a server instance 
// console.log(server) 

// to start the server 
//this takes 2 parameter : 1. port 2. callback
server.listen(3000,()=>{
    console.log(`Server listening at PORT : ${3000}`)
})
// 3000 = port = it is just the address where you want to execute 

//http is a built in module required to built a server in node js