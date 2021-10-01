var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

var chores = []
// console.log(chores.includes('gym'))
// here the includes method is used to see weather the element is present in the array or not 

// var deleteItem = (value) => {
//     const index = chores.indexOf(value)
//     // indexOf method returs the index of the element that you specified . it is a built-in method
//     chores.splice(index,1)
//     console.log(chores)
// }

const callBackFunc = (event) => {
    // console.log(input.value)
    const inputValue = input.value
    if(chores.includes(inputValue)){
        console.log('already exixts')
    }
    else{
        chores.push(inputValue)
        const element = document.createElement("li")
        const textNode = document.createTextNode(inputValue)
        element.appendChild(textNode)
        list.appendChild(element)
        // element.addEventListener('click', (e) => {console.log(e.target.innerHTML)})
        // element.addEventListener('click', (e) => {deleteItem(e.target.innerHTML)})

        element.addEventListener('click', (e) => {e.target.remove()})
    }       
}

button.addEventListener('click',callBackFunc)