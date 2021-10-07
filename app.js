//promises
//promise is just an object that promises to return a value .  
//it may be unknown in the starting but in the future (like 300 milli sec or some milli sec apart) it does return something





// setTimeout(() => {
//     console.log("pooja")
// }, 0);
// it is used to create some delay and generaly to simulate  promises they use setTimeout 
// so here the console.log will run or the call back function will run after the timeout/timer which here is 5000 milli sec which means 5sec. 

// here if the timeout is 0 then also the below console.log statements will execute first and then the settimeout will execute 

// console.log("hi ")
// console.log("hey")



//fetch //this is the api provided to us by the browser. it fetches the resource for the web.it is used to make a get request to a url
var data = fetch('https://jsonplaceholder.typicode.com/todos/10')
console.log(data)