// Array Methods
//push and pop methods
let arr = []
arr.push(1,2,3)  // adding elements to the array
arr.pop()    // deleting the last element
console.log(arr)

//shift and unshift methods
let arr1 = ["a","b","c"]
arr1.shift()       //deletes the element at the start
console.log("arr1 after shift:",arr1)
arr1.unshift("z")   //adds the elemet at the start
console.log("arr1 after unshift:",arr1)

//slice
let arr2 = [1,2,3,4,5]
let arr3 = arr2.slice(1,4)
console.log("sliced array:",arr3)


//splice
let arr4 = ["red","green","blue","yellow"]
arr4.splice(2,2,"purple","orange")
console.log(arr4)


//objects
//object creation
let car = {
    make:"suzuki",
    model:"swift",
    year:2020
}
console.log(car)

//property deletion
delete car.year
console.log(car)

//nested objects
let person_details = {
    name:"charan",
    age:21,
    address:{
        street:"suddapalle"
        ,city:"kadapa",
        zipcode:516411
    }
}
console.log(person_details)

// accessing object properties
console.log(person_details.address.city)


//arrow function
let greet = (name1) => {console.log("hello " + name1 +"!")}
greet("charan")