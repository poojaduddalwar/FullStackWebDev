// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         data.forEach(user => {
//             console.log(data)
//         });
//     })


//async-await

const fetchdata = async () => {
    // to convert a normal function or synchronous function into asynchronous function use the async keyword.

    //await is only valid or only works in asynchronous function that is why we use async keyword

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    const data = await response.json()

    //same as .then await waits until fetch is resolves

    // here using async-await you can use the await method . here it waits for the promise to resolve(here i.e to fetch the data) and then it stores it in response
    console.log(data)
}

fetchdata()