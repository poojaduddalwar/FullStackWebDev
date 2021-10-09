const list = document.querySelector('ul')

let arr = ['one', 'two', 'three', 'four', 'five']

console.log(list)
arr.forEach(chores => {
    const element = document.createElement('li')
    const textnode = document.createTextNode(chores)
    element.appendChild(textnode)
    element.addEventListener('click', (e) => {
        // console.log(e.target.innerHTML)
        // e.target.remove()
        const useInput = window.prompt(`are you sure you want to delete ${chores}`)
        if (useInput === "YES") e.target.remove()
    })
    list.appendChild(element)

})
