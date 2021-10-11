// console.log(require('./app1'))

// require is a keyword in which you pass the path of a file 
// require is a built in fuction in node js which executes the file and  gives access to the exports object of the file/module that you provided it as a path of and also executes the file simultaneously

// const stuff = require('./app1')
// console.log(stuff)



const add = () => {
    console.log('i add stuff')
}
const subtract = () => {
    console.log('i subtract stuff')
}
const multiply = () => {
    console.log('i multiply stuff')
}
const divide = () => {
    console.log('i divide stuff')
}
module.exports.add = add
module.exports.divide = divide
module.exports.multiply = multiply
module.exports.subtract = subtract
module.exports.message = "hello pd"
// console.log(module)