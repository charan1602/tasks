// if_else condition statements
let num = -20
if(num>0)
  console.log(num,"is positive")
else if(num<0)
    console.log(num,"is negative")
else
   console.log("zero")

// switch-case statements
let week = 3
let day
switch (week){
     case 1:
        day = "Monday"
        break
     case 2:
        day = "Tuesday"
        break
     case 3:
         day = "Wednesday"
         break
     case 4:
        day = "Thursday" 
        break   
     case 5:
        day = "Friday"
        break
     case 6:
        day = "Saturday"
        break
     case 7:
        day = "Sunday"
        break
    default:
        day = "invalid day"
}
console.log(day)


// ternary operator
let age = 20
let eligibility = (age>=18) ? "adult": "minor" 
 console.log(eligibility)


//  for loop
for(let i=1;i<=10;i++){
   console.log(i)
}
// reverse for loop
for(let i=10;i>=1;i--){
   console.log(i)
}