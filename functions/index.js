// function without parameters
function greet(){
    console.log("Hello World")
}
greet()

// functions with parameters
function addNumbers(a,b){
   console.log(a+b)
}
addNumbers(10,20)

// functions with return function
function multiply(x,y){
    return x*y
}
let result = multiply(3,4)
console.log(result)

// combinig functions
function calculateRectangleArea(length,width){
    let result = multiply(length,width)
    return result
}
let area = calculateRectangleArea(6,4)
console.log(area)

// default paramaters
function greetUser(name="Guest"){
    return `Hello, ${name}!`
}
console.log(greetUser())
console.log(greetUser("charan"))