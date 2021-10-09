// var UL = document.querySelector('ul')

// let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
//     console.log(data)
//     append_data = (element) => {
//         const LI = document.createElement("li")
//         user_details = element['name'] + element['username'] + element['email']
//         const textnode = document.createTextNode(user_details)
//         LI.appendChild(textnode)
//         UL.appendChild(LI)
//     }
//     data.forEach(append_data);
// })

const Table = document.querySelector('table')
const createRow = (user) => {
    let newRow = document.createElement('tr')
    let element = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>`
    newRow.innerHTML = element
    return (newRow)
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            Table.appendChild(createRow(user))
        });
    })