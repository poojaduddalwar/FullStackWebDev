const hello = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('pooja')
    }, 3000);
})
// console.log(hello)
// setTimeout(() => {
//     console.log(hello)
// }, 4000);

hello.then(name => {console.log(name)})