var arr = [1,2,3,4,5,6,7,8,9]
var new_arr = arr.filter((element,index) => {
    if (element % 2 === 0) return true
})  //element % 2 === 0 this is just a test

// arr.push(6)
// //adds element at the end
// arr.unshift(8)
// //adds at the begining of the array
// arr.shift()
// //removes the first element of the array
// console.log(arr.unshift())
// var new_arr = arr.slice(2,5)
// slice function returs a new array so the original array remains unchanged

// for(var i=0;i<arr.length;i++){
//     if (arr[i] % 2 ===0) new_arr.push(arr[i])
// }
//this for loop is used to make array of even nums from arr

console.log(new_arr)