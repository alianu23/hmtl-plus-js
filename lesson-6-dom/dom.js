const box=document.getElementsByClassName("box")
const Btn=document.getElementById("btn")
let randomColor=()=>{
    let a=(Math.floor(Math.random()*255)+1)
    let b=(Math.floor(Math.random()*255)+1)
    let c=(Math.floor(Math.random()*255)+1)
    return "rgb("+a+","+b+","+c+")"
}
   
function changeBackgroundColor (){
    for(let i=0; i<box.length;i++){
        box[i].style.backgroundColor= randomColor() 
    } 
}
changeBackgroundColor();
Btn.addEventListener("click",()=>{
    console.log("Click the button");
    changeBackgroundColor();
})