const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const Add = document.getElementById('add')
const Multiply = document.querySelectorAll('#multiply')[0]
const Sub = document.getElementById('subtract')
// const resultBox = document.querySelector('span')
const resultBox = document.querySelector('.result')

// console.log(a,b)
// console.log(Add,Multiply)
// console.log(Result)

// const addFunction = () => {
//     const Result = parseInt(a.value) + parseInt(b.value)
//     // console.log(Result)
//     resultBox.innerHTML = Result
// }

// const multiplyFunction = () => {
//     const MResult = parseInt(a.value)*parseInt(b.value)
//     resultBox.innerHTML = MResult

// }

const calculator = (event,operation) => {
    // console.log(poo.target)
    // if (operation == 'add1'){
    //     console.log('adding')
    // }else if (operation == 'multiply1'){
    //     console.log('multiply')
    // }

    //switch case
    switch(operation){
        case "add1":
            resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
            break
        case "multiply1":
            resultBox.innerHTML = parseInt(a.value) * parseInt(b.value)
            break
            //yoy must give a break after each case
        case "sub1":
            resultBox.innerHTML = parseInt(a.value) - parseInt(b.value)
            break
        default:
            resultBox.innerHTML = "not a valid operation"
    }
}

// parseInt = converts string to int 

Add.addEventListener('click',(event) => calculator(event,'add1'))
// here () this dumy function returs another function 
// this dumy function calls the function calculator
Multiply.addEventListener('click',(event) => {
    calculator(event,'multiply1')
})
Sub.addEventListener('click',(event)=> calculator(event,'sub1'))

// in the addEventListener the 2nd parameter should be the function signature not a function call 