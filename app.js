//promises

let response = fetch('https://jsonplaceholder.typicode.com/users').then(res => {
    // console.log(res)
    let parseData = res.json()
    //console.log(parseData)  //parseData : it is a promise
    return (parseData)    //return from the 2nd promise . fetch automaticaly returned a response
}).then(data => {console.log(data)})



//all promises are thenable
// .then always returns a promise 
// promises support then ... when we return a data then what to do?

// setTimeout(() => {
//     const data = response
//     console.log(data)
//     console.log(data.json())
// }, 2000);

// we use json() method on stream and here we are getting error because the data its a promise 
// to convert a stream into actual response data we use a json method

// promise is the object . it is created by using the promise constructor

// let value = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // reject("pooja")
//         resolve("hello pooja")
//     }, 3000);
// })
// console.log(value)
// setTimeout(() => {
//     console.log(value)
// }, 4000);

// while creating a new promise we need two parameters resolve and reject . if the promise is fulfilled(resolve) then the resolve function will run (return the value(hello pooja)) and if not the the reject function will run

// promise has four states :- fulfill state , pending state , settled state ,reject state
// if the promise is fulfilled or rejected it is settled state 

// stack = last in first out (dsa)

//js is single threaded . js has a memory heap that allocates the memory and manages the garbage collection.

// setTimeout is provided by the browser , it is a part of web api. it is a asynchronous task thats why it is executed in the web api .  it is written in c++ that is why it is executed in web api and js cannot run it.

//call stack will run first and then the web api till then from web api the setTimeout after the timer will move to the callback stack and when the call stack is completed the timeout function will run in call stack.

//all the asynchronous tasks like setTimeout that are executed inside the web api they will be sitting inside the callback queue untill the call stack in empty


// console.log("one")
// // setTimeout(() => {
// //     console.log("timer 1")
// // }, 5000);
// setTimeout(() => {
//     console.log("timer 2")
// }, 6000);

// setTimeout(() => {
//     console.log("timer 1")
// }, 5000);
// console.log("two")
// console.log("two")
// console.log("two")
// console.log("two")
// console.log("two")