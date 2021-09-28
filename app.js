const age = 10
// you cannot re-asign a value to a const variable

//Operators
//Arithematic operators
var a =2
var b= 10
console.log('a+b=',a+b)
console.log('a-b=',b-a)
console.log('a/b=',b/a)
console.log('a*b=',a*b)
console.log('a**b=',a**b)
console.log('a%b=',a%b)

//Assignment operators
b = 11
console.log('b',b)
b +=1
console.log('b',b)
b++
console.log('b',b)
b-=1
console.log('b',b)
b--
console.log('b',b)

var c = 10
console.warn(c++)   //this is post increment
console.warn(c)
console.warn(++c)  //this is pre increment

// Comparison operators
//these always return a boolean
var d = 14
var e = 2
var f = 14

console.log(d>e)
console.log(d<e)
console.log(d>=e)
console.log(d<=e)
console.log(d==e)

console.warn(d!=f)
console.warn(d==f)
//double = is a loose check
console.log(d===f)
//here triple = also checks data types . its a strict check
console.log(d+f)

//logical operators

console.log('true && true = ',true&&true)
console.log('true && false = ',true&&false)
console.log('false && true = ',false&&true)
console.log('false && false = ',false&&false)

console.log('true || true = ',true&&true)
console.log('true || false = ',true&&false)
console.log('false || true = ',false&&true)
console.log('false || false = ',false&&false)




