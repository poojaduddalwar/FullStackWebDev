//template string

let car = {
    a: "c class",
    b: "mercedes",
    // print: function () {
    //     console.log(`${this.a} was created by ${this.b}`)   //`` this is the template string . it is a part of es6. in back ticks use $ sign to use a variable.
    // }

    print: () =>{
        console.log(this) //here this points to the window
        // this keyword in arrow syntax always points to the window object while this in the function declaration will change accordingly.
        console.log(`${car.a} was created by ${car.b}`)
    }
}

car.print()