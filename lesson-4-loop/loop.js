// let a=0;
// while(a<100){
//     if(
//         a%2==0
//     )
//     console.log(a);
//     a++;
// }
// let b=0;
// while(b<100){
//     if(
//         b%2==1
//     )
//     console.log(b);
//     b++;
// }
// let a=0;
// while(a<100){
//     if(
//         a%3==0
//     )
//     console.log(a);
//     a++;
// }
// let a=0;
// while(a<100){
//     if(
//         a%5==0
//     )
//     console.log(a);
//     a++;
// }
let a= parseFloat(prompt(
    'toogoo oruulna uu'
));
let star
for(let i =0; i< a; i++){ 
    star += "*"
    console.log(star)
}

console.log(a)

// //Array niilber
let numbers1=[1,2,3,4,5,6];

i=0;
let sum=0;
while(i<numbers1.length){
  sum+=numbers1[i];
  i++;
}
console.log("Sum =", sum)

//too haih
let too=[1,2,3,4,5,6];
i=0;
let findNumber=8;
let isFind=false;
while(i<too.length){
    if(too[i]===findNumber){
        isFind=true;
        break;
    }
    i++;
}
if(isFind){
    console.log("Tanii haisan too : ",findNumber);
    console.log("Oldloo index = ",i)
}else{
    console.log("Tanii haisan too : ",findNumber);
    console.log("Oldsongui.")
}