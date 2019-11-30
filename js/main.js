document.write ('working in uru academy');

var cars = ["saab", "volvo", "BMW"]
console.log(cars[3])
console.log(cars.length) //length of the array

// Adding values to an array
var updatedCars = cars.push("Toyota")   // this adds from the back
console.log(updatedCars);
console.log(cars)


var fruit = ["banana", "orange", "pineapple", "mango"]
fruit.pop()
console.log(fruit)       //this remove from the back array
fruit.shift()
console.log(fruit)       // this remove from the first list 
var fruitUpdate = fruit.unshift("apple")    // this addes value from the first list(at the beginning)
console.log(fruit)
//delete fruit[0]  /
console.log(fruit[0])

// Boolean starts
Boolean(2 > 1)

var Boolean = (2 < 1)                     //this returns a value true or false when the logic says so.
console.log(Boolean)


// combining two or more arrays together.

var combinedWork = cars.concat(fruit);
console.log(combinedWork)