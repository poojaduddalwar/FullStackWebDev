var Input = document.querySelector('input')
var Button = document.querySelector('button')
// var Div =document.querySelector('div')

// const callBackFun = ()=> {
//     var inputText = Input.value
//     Div.innerHTML = inputText
// }

const getData = async (item) => {
    console.log(item)
    let url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.hits)
}

// Button.addEventListener('click', ()=> {
//     console.log(Input.value)
// })


Button.addEventListener('click', (e) => { getData(Input.value) })