const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const Add = document.getElementById('add')
const Multiply = document.querySelectorAll('#multiply')[0]
// const resultBox = document.querySelector('span')
const resultBox = document.querySelector('.result')

// console.log(a,b)
// console.log(Add,Multiply)
// console.log(Result)

const addFunction = () => {
    const Result = parseInt(a.value) + parseInt(b.value)
    // console.log(Result)
    resultBox.innerHTML = Result
}

const multiplyFunction = () => {
    const MResult = parseInt(a.value)*parseInt(b.value)
    resultBox.innerHTML = MResult

}

// parseInt = converts string to int 

Add.addEventListener('click',addFunction)
Multiply.addEventListener('click',multiplyFunction)