// element by ID
let btn = document.getElementById("qaz")
btn.style.backgroundColor = "blue" 
btn.style.fontSize = "20px"
btn.style.color = "white"


// elements by class name
let luffy = document.getElementsByClassName("wsx")
for(let i=0;i<luffy.length;i++){
    luffy[i].style.color = "red"
}
// console.log(luffy.length)
// luffy.backgroundColor = "red"

// element by tagname
let elmt = document.getElementsByTagName("p")
for(let j=0;j<elmt.length;j++){
    elmt[j].style.border = "50px solid yellow" 
    // elmt[j].style.borderStyle = "solid"
    // elmt[j].style.borderColor = "green"
}
let qs = document.querySelector("h2")
qs.style.fontStyle = "italic"

let qsa = document.querySelectorAll("h3")
for(let i =0 ;i<qsa.length;i++){
     qsa[i].style.color = "blue"
}