// using forEach

let arr = [1,2,3,4,5,6]
arr.forEach((itr)=>{
    console.log(itr)
})


// using map 

let doublearr = arr.map((itr)=>{
    return itr = itr*2
})
console.log(doublearr)

// using filter

let evenarr = arr.filter((itr)=>{
    return itr%2==0
})
console.log(evenarr)

// using reduce
let arr1 = [5,4,3,32,2,1]
let sum = arr1.reduce((holder,current)=>{
     return  holder + current
},0)
console.log(sum)

// using find
 let person = [
    {
        name:"charan",
        age:27
    },
    {
        name:"sathish",
        age:24
    }
    
 ]
 let personn = person.find((itr)=>{
    return itr.age>25
 })
 console.log(personn.name)


// using findindex
let person1 = [
    {
        name:"charan",
        age:27
    },
    {
        name:"sathish",
        age:24
    },
    {
        name:"vishnu",
        age:17
    }
    
 ]
 let underaged_index = person1.findIndex((itr)=>{
    return itr.age<18
 })
 console.log(underaged_index)