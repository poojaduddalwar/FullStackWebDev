//module - filesystem module

const fs = require('fs') //allows to access the disc and used to write on the hard drive .
// console.log(fs)

//Methods of filesystem module

//1

fs.readFile('./text.txt','utf-8',(error,data)=> {
    if (error) console.log(error)
    // else console.log(data.toString())
    else console.log(data)
})
//readfile accepts the path and a callback function which has data and error ...so if it fails it throws an error or if it pass it will show the data(buffer data (raw data/compressed data)) buffer is an object
// if you don't want buffer then add an optional parameter utf8 to the readfile method so that the output is actual text
// or toString() converts buffer to string 

console.log('i am a random log')
//line 17 executes first because readFile is asynchronous task(non-blocking I/O task)

console.log(fs.readFileSync('./text.txt','utf8')) //this is a synchronous task 
//if the file is huge better use asynchronous task but if the file is small use synchronous task

//2

fs.writeFileSync('./text.txt','new stuff inside the file',(error)=> {
    if (error) console.log(error)
})
//this method takes one more parameter that is the text and it replaces/overrite the contents of the text.txt file with the provided text

//3 to append 
fs.writeFile('./text.txt', `Append me ${fs.readFileSync('./text.txt', 'utf8')}`, (error) => {
    if (error) console.log(error)
}) 