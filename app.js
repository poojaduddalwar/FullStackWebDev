//Call back function
//executed after something is completed
// Calls a defined callback function on each element of an array, and returns an array that contains the results

var arr = ['go to gym','eat food','clean house']

// for(var i=0; i<arr.length ; i++){
//     console.log(arr[i])
// }

// arr.forEach() = this is a array method that allows to iterate over each element of the array.its a call back function
// var CallBackFunction = (element)=> {
//     console.log("i ran "+element)
// // here instead of element we can use any name
// }
// arr.forEach(CallBackFunction)

//shorthand for above
arr.forEach((element , index) => {
    console.log(element,index)
})

