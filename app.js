// console.log(this)
// // this is a keyword => it is window object . this point to the parent object. here this is pointing to the window object
// console.log(this.alert('hi'))


//creating objects
//literal notation
let manufacturer = 'ferrari'
let car = {      //object
    Name:"c class",  //key value pair
    manufacturer:"mercedes",
    // print: function (a){  //print = method
    //     console.log(a)
    // }
    print: function(){
        let manufacturer = 'bmw'
        //console.log(this)  //here this is pointing to the object car
        // console.log(manufacturer)
        // console.log(car.manufacturer,car.Name)
        console.log(this.Name,this.manufacturer)
        console.log(this.manufacturer)
    }
// a function inside an object is a method 
}
// car.print('pooja')
// console.log(car.manufacturer)
// console.log(typeof(car))
// console.log(car)
car.print()
// console.log(car.print("ckcshbchdbc"));

// in js we have prototype inheritance
