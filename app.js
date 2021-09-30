var button = document.querySelector('button')
var body = document.querySelector('body')


const callBackFunc = (event) => {
    // body.classList.add('dark')
    body.classList.toggle('dark')
    // toggle = removing it if it's present and adding it if it's not present.
}

button.addEventListener('click',callBackFunc)