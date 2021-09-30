// Functions in js
//these are function keyword declaration
// function greet(Name="pd",age="14"){
//     console.log(Name,age)
//     console.log("hello "+Name+" your age is "+age)
// }
// // greet("pooja",20)
// greet()

// function add(a,b){
//     // console.log(a+b)
//     var sum =a+b
//     return sum
//     // the variable inside this function cannot be accessed anywhere outside the function
// }
// var result = add(10,20)
// console.log(result)
// console.log(add(10,20))


//function expression
// assigns a function to a variable
var add = function (a=0,b=0){
    var sum =a+b
    return sum
}
console.log(add(10,20))

// var a = function (name, age) {
//     // console.log('Hello')
//     console.log(name, age)
//     // console.log('Hey ' + name + " Your age is " + age)/
// }
// console.log(a("pd",20))


//arrow function
// arrow function always requires a variable
// var add = (a=0,b=0)=>{
//          var sum =a+b
//          return sum
// }

// console.log(add(10,20))