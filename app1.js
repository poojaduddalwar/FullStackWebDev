// local storage : it source storage provided by the browser
const Button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

// const arr = localStorage.getItem('InputValue')
const arr =[1,2,3,4,5,6]
// localStorage.setItem('val',arr)
// console.log(localStorage.getItem('val'))
// JSON.stringify(arr)  //converts to string 
localStorage.setItem('val',JSON.stringify(arr))
// console.log(localStorage.getItem('val'))
// JSON.parse()//converts string to object
console.log(JSON.parse(localStorage.getItem('val')))

// div.innerHTML = localStorage.getItem('InputValue')
// console.log(button,div,input)
// Button.addEventListener('click',(req,res)=>{
//     localStorage.setItem('InputValue',[1,2,3,4])
//     div.innerHTML = input.value
// })

// console.log(localStorage)
// localStorage.setItem('InputValue','something') //always in key and value pair
// setItem is use to set anything in the localStorage

// console.log(localStorage.getItem("InputValue")) // to get an item from localStorage

// localStorage.clear()  //to clear 