// for loop
// 1.multiplicatin table
for(let i=1;i<=10;i++){
    console.log("5 x",i,"=",5*i)
}

//2.sum of even numbers between 1 - 50
let sum =0
for(let i=0;i<=50;i++){
    if(i%2 == 0)
      sum += i
} 
console.log("sum of first 50 even numbers:",sum)


// while loop
// 3.countdown timer
let n = 2
let count =0
let j
while(n<=20){
    j=1
    count = 0
    while(j<=n){
      if(n%j == 0)
      {
        count++
      }
      j++
    }
    if(count == 2)
       {
        console.log(n)
       }
    n++   
}

// 4 sum of odd numbers
let odd=1
while(odd<=20){
    if(odd%2 != 0 )
    {
        console.log(odd)
    }
    odd++
}

// 5.factorial calculation
let multy =1
let fact = 5
while(fact>=1){
   multy = multy*fact
   fact--
}
console.log(multy)
