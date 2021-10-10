//day 8 revision

// let greet = new Promise ((resolve,reject)=> {
//     setTimeout(() => {
//         resolve("welcome")
//     }, 5000);
// })

// console.log(greet)
// setTimeout(() => {
//     console.log(greet)
// }, 6000);

// greet.then(value =>{
//     console.log(value)
//     return "new welcome"   //now the next .then will return this value
// }).then(newValue => {
//     console.log(newValue)
// }) //this .then will return undefined because the previous .the does not return anything


let response = fetch('https://jsonplaceholder.typicode.com/todos/10')
// fetch is used to make a get request to the url to send the data and fetch returns a promise 
// console.log(response)
response.then(value => {
    return(value.json())
    // json() returns a Promise because it takes some time , its a asynchronous task and js can't complete it
}).then(content => {
    console.log(content)
})