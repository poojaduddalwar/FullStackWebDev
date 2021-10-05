//object methods

let car = {
    a: "pooja",
    b: "duddalwar",
    print: () =>{
        console.log(`${this.a} girish ${this.b}`)
    }
}

console.log(Object.values(car))  //o/p : (3) ['pooja', 'duddalwar', ƒ]
console.log(Object.keys(car))   //o/p : (3) ['a', 'b', 'print']
console.log(car.hasOwnProperty('a'))  //hasOwnProperty property is used to make sure that the property exists on your object or not
// console.log(Object)
// Object: it is the global object
// all the objects which we create are a kind of children of this global object