// NODE-JS 

// library is a collection of methods..... they allow us to utilize a certain functionality (reusable functions)
// node-js is a runtime environment for js . runtime environment is environment to run . nodejs internally uses v8 engine
// nodejs brings multiple support of libraries and packages and also a runtime environment nad some other modules as well

// console.log(window)
// for(var i = 0;i<10;i++){
//     console.log("iteration",i+1)
// }

// setTimeout(() => {
//     console.log('pooja')
// }, 5000);

//Module - file that contains the code
// it is an encapsulated block of code 
// const greet = () => 'hi'
// module.exports.something = greet  // this adds the greet funtion inside the exports object
// console.log('i am app1.js')  


// const stuff = require('./utils')

// console.log(stuff)

const {add,subtract,multiply,divide,message} = require('./utils')

add()
subtract()
multiply()
divide()
console.log(message)