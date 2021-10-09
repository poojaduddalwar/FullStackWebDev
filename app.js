var UL = document.querySelector('ul')

let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    let parseData = res.json()
    return (parseData)   
}).then(data => {
    console.log(data)
    data.forEach(element => {
        const LI = document.createElement("li")
        const textnode = document.createTextNode(element.name +" " + element.username)
        LI.appendChild(textnode)
        UL.appendChild(LI)
    });
})
