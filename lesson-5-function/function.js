// function nemeh(x,y){
//     return x+y;
// }
let nemeh=(x,y)=>{
    return x+y;
}
// function hasah(x,y){
//     return x-y;
// }
let hasah=(x,y)=>{
    return x-y;
}
// function urjih(x,y){
//     return x*y;
// }
let urjih=(x,y)=>{
    return x*y;
}
// function huvaah(x,y){
//     return x/y;
// }
let huvaah=(x,y)=>{
    return x/y;
}
let sum=nemeh(7,7);
console.log("sum =",sum);
let minus=hasah(10,6);
console.log("hasah =",minus);
let mul=urjih(2,3);
console.log("urjih =",mul);
let div= huvaah(10,2);
console.log("huvaah =",div);

const text ="hello world";
const index=text.indexOf("w");
console.log("index:",index)

// function indexOf(text,useg){
    let indexOf=(text,useg)=>{
    let index=-1;
    for(let i=0; i<text.length; i++){
        if(text[i]===useg){
            index=i;
            break;
        }
    }
    return index
}
const findindex= indexOf("Hello World","W");
console.log("findindex =",findindex);

