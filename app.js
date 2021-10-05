// api => application programming interface. 

// let => this keyword is also used to declare a variable. 
// when you declare a variable using let the scope of that variable is only inside that block in which it is declared i.e it won't be defined outside of that block i.e the variable has the block scope
// let a = 30
// var b = 40
// console.log(a,b)
//when we declare a variable using var it has global scope i.e your whole file

// if(true){
//     let Name = 'pooja'
//     console.log(Name)
// }
// console.log(Name)

// for(let i=0 ; i < 10 ; i++){
//     console.log('loop')
// }
// console.log(i)


// if(true){
//     let Name = 'pd'
//     if(true){
//         console.log(Name)
//     }
// }
// you can access a parent scope within a child but not the child scope within parent
// here Name is declared using let still the value is printing because the other if statement is the child of the first if statement


const print = ()=> {
    var Name = 'pooja'
    if(true){
        console.log(Name)
    }
    return Name
}
print()
// console.log(Name)

// incase of functions global scope does not exists if.e if you declare a variable using var let it is also a local scope
// you can nest as many scopes as you want
// const is similar to a let