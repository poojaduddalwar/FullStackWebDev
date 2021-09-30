var button =document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

// const callBackFunc = (event) => {
//     console.log(event.target)
//     // here it shows the targeted html tag 
//     console.log(input.value)
//     // here it shows the value we entered in the placeholder inside the console
// }

const callBackFunc = (event) => {
    const inputValue = input.value
    // if we want the value of any input use this value attribute
    // input is a self closing tag and self closing tags don't have any text inside so we use the value attribute for input
    console.log(input.value)
    // if we want the text of any element we use the innerHTML attribute
    console.log(button.innerHTML)
    const element = document.createElement("li")
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)
}

button.addEventListener('click',callBackFunc)