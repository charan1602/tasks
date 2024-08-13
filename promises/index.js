function asyncfunc(name,delay,shouldreject){
    return new Promise((resolve,reject)=>{
           if(!shouldreject){
            setTimeout(()=>{
                resolve(` ${name} completed`)
            },delay)
           }
           else{
            reject(` ${name} Failed`)
           }
    }).then((result)=>{console.log(result)},(result)=>{console.log(result)})
}
asyncfunc(1,2000,true)



function asyncfunc2(name,delay,shouldreject){
    return new Promise((resolve,reject)=>{
           if(!shouldreject){
            setTimeout(()=>{
                resolve(` ${name} completed`)
            },delay)
           }
           else{
            reject(` ${name} Failed`)
           }
    })
}
let Task1 = asyncfunc2("Task1",1000,false)
let Task2 = asyncfunc2("Task2",2000,false)
let Task3 = asyncfunc2("Task3",3000,true)
Promise.all([Task1,Task2,Task3]).then((result)=>{
      console.log("all are resolved",result)
}).catch((error)=>{
    console.log("error occured",error)
})
Promise.allSettled([Task1,Task2,Task3]).then((result)=>{console.log(result)},(result)=>{console.log(result)})
   



