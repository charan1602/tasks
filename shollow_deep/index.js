//shallow copy

//using Object.assign for shallow copy
let student ={
    name:"charan",
    age:21,
    address:{
        city:"kadapa",
        pincode:516411,      
    }
}
let student1 = Object.assign(student)
student1.address.city = "jammalamadugu"
console.log("student1",student1)
console.log("student",student)

// using spread operator for shallow copy
let employee = {
    name:"vishnu",
    age:543,
    skills:{
        language:"java",
        database:"noSQL",
        dataframes:"html"
    }
}
let employee1 = {...employee}
employee1.skills.dataframes = "css"
console.log("employee1",employee1)
console.log("employee",employee)

// deep copy

let student2 ={
    name:"charan",
    age:21,
    address:{
        city:"kadapa",
        pincode:516411,      
    }
}
let student3 = JSON.parse(JSON.stringify(student2))
student3.address.city = "jammalamadugu"
console.log("student3",student3)
console.log("student2",student2)

//using spread operator for arrays
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
let arr3 = [...arr1,...arr2]
console.log(arr3)

// using spread operator for objects
let obj1 = {
    anime:"one piece",
    MC:"luffy",
    state:"yonko"
}
let obj2 = {
    bounty:300000000,
    nickname:"strawhat"
}
let obj3 = {...obj1,...obj2}
console.log(obj3)


//rest in functions
function sum(...nums){
    return nums.reduce((acc,index) => acc+index,0)
}
console.log(sum(1,2,3,4,5,6))

//rest in array destructuring
let [first,second,...rest] =[1,2,3,4,5,6]
console.log(rest)